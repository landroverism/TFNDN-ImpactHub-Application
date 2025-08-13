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
import { Authenticated, Unauthenticated } from 'convex/react';
import { SignInForm } from '../SignInForm';
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
          background: `linear-gradient(135deg, rgba(15, 118, 110, 0.6) 0%, rgba(20, 184, 166, 0.6) 100%), url('/images/hero.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
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
                    textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
                    fontFamily: '"Dancing Script", cursive',
                    fontSize: { xs: '2.5rem', md: '4rem' },
                  }}
                >
                  Transforming Africa Through
                  <Box component="span" sx={{ 
                    color: 'secondary.main', 
                    display: 'block',
                    textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
                  }}>
                    Innovation & Impact
                  </Box>
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 4, 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    fontWeight: 500,
                  }}
                >
                  The Taji Fanisi Development Network connects education, career development, 
                  and social innovation to create lasting change across Africa.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                  <Authenticated>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate('/framework')}
                      sx={{
                        backgroundColor: 'secondary.main',
                        '&:hover': { backgroundColor: 'secondary.dark' },
                        px: 4,
                        py: 1.5,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
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
                        borderColor: 'white',
                        color: 'white',
                        '&:hover': {
                          borderColor: 'secondary.main',
                          backgroundColor: 'secondary.main',
                        },
                        px: 4,
                        py: 1.5,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        borderWidth: '2px',
                      }}
                    >
                      Try AI Career Demo
                    </Button>
                  </Authenticated>
                  <Unauthenticated>
                    <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                      Sign in to explore our platform
                    </Typography>
                  </Unauthenticated>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: 300,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="h6" sx={{ opacity: 0.8 }}>
                    Interactive Framework Visualization
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Unauthenticated>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
              Join the TFDN Community
            </Typography>
            <Box sx={{ maxWidth: 400, mx: 'auto' }}>
              <SignInForm />
            </Box>
          </Box>
        </Unauthenticated>

        <Authenticated>
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
        </Authenticated>
      </Container>
    </Box>
  );
};
