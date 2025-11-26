import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { StatCard } from '../components/common/StatCard';
import { api } from '../lib/api';
import {
  TrendingUp,
  People,
  Public,
  School,
} from '@mui/icons-material';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [stats, setStats] = useState<any[]>([]);
  const [impactStories, setImpactStories] = useState<any[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/images/taji-two.webp',
    '/images/taji-4.webp',
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const [statsData, storiesData] = await Promise.all([
          api.getStats(),
          api.getImpactStories(),
        ]);
        setStats(statsData);
        setImpactStories(storiesData.slice(0, 3));
      } catch (error) {
        console.error('Error loading homepage data:', error);
      }
    };
    loadData();
  }, []);

  // Auto-slide hero images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const iconMap = {
    people: <People sx={{ fontSize: 48 }} />,
    public: <Public sx={{ fontSize: 48 }} />,
    school: <School sx={{ fontSize: 48 }} />,
    trending_up: <TrendingUp sx={{ fontSize: 48 }} />,
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
          minHeight: { xs: '70vh', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background Image Slider */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          {heroImages.map((image, index) => (
            <Box
              key={image}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentImageIndex === index ? 1 : 0,
              }}
              transition={{ duration: 1 }}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}
        </Box>
        <Container maxWidth="lg" sx={{ height: '100%' }}>
          <Grid container spacing={4} alignItems="center" sx={{ minHeight: '70vh' }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant={isMobile ? 'h3' : 'h1'}
                  component="h1"
                  gutterBottom
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 3,
                    color: '#1e3a8a',
                    textShadow: '2px 2px 4px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)',
                    fontFamily: 'Roboto, monospace',
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    letterSpacing: '0.05em',
                  }}
                >
                  Transforming Africa Through
                  <Box component="span" sx={{ 
                    color: 'secondary.main', 
                    display: 'block',
                    textShadow: '2px 2px 4px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)',
                  }}>
                    Innovation & Impact-Driven
                  </Box>
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 4, 
                    color: '#1f2937',
                    lineHeight: 1.6,
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    fontWeight: 500,
                  }}
                >
                  The Taji Fanisi Development Network connects education, career development, 
                  and social innovation to create lasting change across Africa.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/framework')}
                    sx={{
                      backgroundColor: 'secondary.main',
                      '&:hover': { backgroundColor: 'secondary.dark' },
                      px: 4,
                      py: 1.5,
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                    }}
                  >
                    Explore Framework
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/ai-career')}
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.dark',
                        backgroundColor: 'primary.main',
                        color: 'white',
                      },
                      px: 4,
                      py: 1.5,
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      borderWidth: '2px',
                    }}
                  >
                    Try AI Career Demo
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Box
                  onClick={() => window.open('https://portal.tajiconnect.com/', '_blank')}
                  sx={{
                    width: '100%',
                    height: { xs: 250, md: 350 },
                    background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(220, 38, 38, 0.95) 100%)',
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(20px)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '3px solid white',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
                      transform: 'translateY(-5px)',
                      '& .portal-icon': {
                        transform: 'rotate(360deg) scale(1.2)',
                      },
                      '& .portal-text': {
                        color: '#fcd34d',
                      },
                      '&::before': {
                        opacity: 1,
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 150,
                      height: 150,
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                      borderRadius: '50%',
                    },
                  }}
                >
                  {/* Decorative circles */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -30,
                      left: -30,
                      width: 100,
                      height: 100,
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                      borderRadius: '50%',
                    }}
                  />
                  
                  {/* Portal Icon */}
                  <Box
                    className="portal-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid white',
                      transition: 'all 0.5s ease',
                    }}
                  >
                    <Box
                      component="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      sx={{ width: 40, height: 40 }}
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </Box>
                  </Box>
                  
                  {/* Text Content */}
                  <Typography 
                    className="portal-text"
                    variant="h4" 
                    sx={{ 
                      color: 'white',
                      fontWeight: 'bold',
                      mb: 2,
                      textAlign: 'center',
                      px: 3,
                      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
                      transition: 'color 0.3s ease',
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    Interactive Framework
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      textAlign: 'center',
                      px: 3,
                      mb: 2,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                    }}
                  >
                    Explore our comprehensive portal
                  </Typography>
                  
                  {/* Click indicator */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    }}
                  >
                    <span>Click to Visit</span>
                    <Box
                      component="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      sx={{ width: 20, height: 20 }}
                    >
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
          
          {/* Slider Indicators */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 10,
            }}
          >
            {heroImages.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: currentImageIndex === index ? 'secondary.main' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '2px solid white',
                  '&:hover': {
                    backgroundColor: currentImageIndex === index ? 'secondary.dark' : 'rgba(255, 255, 255, 0.8)',
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Impact Stats */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Our Impact
          </Typography>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={stat.label}>
                <StatCard
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  icon={iconMap[stat.icon as keyof typeof iconMap]}
                  delay={index * 200}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Impact Stories Preview */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Stories of Impact
          </Typography>
          <Grid container spacing={3}>
            {impactStories.map((story, index) => (
              <Grid item xs={12} md={4} key={story.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Chip
                        label={story.category}
                        size="small"
                        sx={{ mb: 2, backgroundColor: 'success.light', color: 'white' }}
                      />
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {story.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {story.body}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Explore our strategic framework and discover how you can be part of the change.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/framework')}
                sx={{ px: 4, py: 1.5 }}
              >
                Explore Framework
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/ai-career')}
                sx={{ px: 4, py: 1.5 }}
              >
                Try AI Career Demo
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
