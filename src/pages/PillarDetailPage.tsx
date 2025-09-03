import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  CardContent,
  Chip,
  Alert,
  CircularProgress,
  alpha,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBack, TrendingUp, VolunteerActivism, Handshake } from '@mui/icons-material';
import { api, Pillar } from '../lib/api';
import { AppButton } from '../components/ui/AppButton';
import { AppCard } from '../components/ui/AppCard';

export const PillarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const [pillar, setPillar] = useState<Pillar | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPillar = async () => {
      if (!id) {
        setLoading(false);
        return;
      }
      try {
        const pillarData = await api.getPillar(id);
        setPillar(pillarData);
      } catch (error) {
        console.error('Error loading pillar:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPillar();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="primary" />
      </Container>
    );
  }

  if (!pillar) {
    return (
      <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
        <Alert severity="error" sx={{ mb: 3, justifyContent: 'center' }}>
          Pillar not found. It may have been moved or renamed.
        </Alert>
        <AppButton variant="primary" startIcon={<ArrowBack />} onClick={() => navigate('/framework')}>
          Back to Framework
        </AppButton>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <AppButton variant="secondary" startIcon={<ArrowBack />} onClick={() => navigate('/framework')} sx={{ mb: 3 }}>
          Back to Framework
        </AppButton>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Box sx={{ width: 64, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 2, borderRadius: 1 }} />
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {pillar.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            {pillar.description}
          </Typography>
        </Box>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Programs & Initiatives
        </Typography>
        <Grid container spacing={4}>
          {pillar.programs.map((program) => (
            <Grid item xs={12} md={6} key={program.id}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                <AppCard sx={{
                  height: '100%',
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  '&:hover': { boxShadow: (theme) => theme.shadows[6] },
                }}>
                  <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {program.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        {program.summary}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Chip
                        icon={<TrendingUp />}
                        label={program.impact}
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: 'primary.main',
                          fontWeight: 'bold',
                        }}
                      />
                    </Box>
                  </CardContent>
                </AppCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <AppCard sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: { xs: 2, md: 4 }, textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Get Involved
              </Typography>
              <Typography sx={{ mb: 3, maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
                Join us in making a lasting impact through {pillar.title.toLowerCase()}.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <AppButton
                  variant="primary"
                  size="large"
                  startIcon={<VolunteerActivism />}
                  onClick={() => navigate('/get-involved')}
                  sx={{
                    bgcolor: 'primary.contrastText',
                    color: 'black',
                    '&:hover': { bgcolor: (theme) => alpha(theme.palette.common.white, 0.9) },
                  }}
                >
                  Volunteer
                </AppButton>
                <AppButton
                  variant="secondary"
                  size="large"
                  startIcon={<Handshake />}
                  onClick={() => navigate('/partners')}
                  sx={{
                    borderColor: 'primary.contrastText',
                    color: 'primary.contrastText',
                    '&:hover': { bgcolor: alpha('#fff', 0.1) },
                  }}
                >
                  Partner With Us
                </AppButton>
              </Box>
            </CardContent>
          </AppCard>
        </Box>
      </motion.div>
    </Container>
  );
};
