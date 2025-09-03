import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  CardContent,
  Chip,
  Grow,
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
import { AppButton } from '../components/ui/AppButton';
import { AppCard } from '../components/ui/AppCard';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
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
    people: <People color="primary" sx={{ fontSize: 48 }} />,
    public: <Public color="primary" sx={{ fontSize: 48 }} />,
    school: <School color="primary" sx={{ fontSize: 48 }} />,
    trending_up: <TrendingUp color="primary" sx={{ fontSize: 48 }} />,
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          color: 'text.primary',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('/images/hero.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            zIndex: -2,
          },
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              Transforming Africa Through
              <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                Innovation & Impact
              </Box>
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, opacity: 0.9 }}>
              The Taji Fanisi Development Network connects education, career development, and social innovation to create lasting change across Africa.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <AppButton variant="primary" size="large" onClick={() => navigate('/framework')}>
                Explore Our Framework
              </AppButton>
              <AppButton variant="secondary" size="large" onClick={() => navigate('/ai-career')}>
                Try AI Career Demo
              </AppButton>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Unauthenticated>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 1, fontWeight: 'bold' }}>
              Join the TFDN Community
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Sign in to explore our platform and unlock your potential.
            </Typography>
            <AppCard sx={{ maxWidth: 450, mx: 'auto', p: 3 }}>
              <SignInForm />
            </AppCard>
          </Box>
        </Unauthenticated>

        <Authenticated>
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
              Our Impact in Numbers
            </Typography>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={stat.label}>
                  <Grow in timeout={500 + index * 200}>
                    <Box>
                       <StatCard
                        label={stat.label}
                        value={stat.value}
                        suffix={stat.suffix}
                        icon={iconMap[stat.icon as keyof typeof iconMap]}
                      />
                    </Box>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
              Stories of Impact
            </Typography>
            <Grid container spacing={4}>
              {impactStories.map((story, index) => (
                <Grid item xs={12} md={4} key={story.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AppCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Chip label={story.category} size="small" color="primary" sx={{ mb: 2 }} />
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                          {story.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {story.body}
                        </Typography>
                      </CardContent>
                    </AppCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ textAlign: 'center', py: 6, bgcolor: 'secondary.main', borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
              Explore our strategic framework and discover how you can be part of the change.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <AppButton variant="primary" size="large" onClick={() => navigate('/framework')}>
                Explore Framework
              </AppButton>
              <AppButton variant="secondary" size="large" onClick={() => navigate('/ai-career')}>
                Try AI Career Demo
              </AppButton>
            </Box>
          </Box>
        </Authenticated>
      </Container>
    </Box>
  );
};
