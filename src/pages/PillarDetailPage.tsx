import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowBack, TrendingUp } from '@mui/icons-material';
import { api, Pillar } from '../lib/api';

export const PillarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pillar, setPillar] = useState<Pillar | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPillar = async () => {
      if (!id) return;
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
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Loading...</Typography>
      </Container>
    );
  }

  if (!pillar) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Alert severity="error" sx={{ mb: 4 }}>
          Pillar not found
        </Alert>
        <Button variant="contained" onClick={() => navigate('/framework')}>
          Back to Framework
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Back button */}
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate('/framework')}
        sx={{ mb: 3 }}
      >
        Back to Framework
      </Button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box
            sx={{
              width: 80,
              height: 4,
              backgroundColor: pillar.color,
              mx: 'auto',
              mb: 3,
              borderRadius: 2,
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {pillar.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            {pillar.description}
          </Typography>
        </Box>
      </motion.div>

      {/* Programs Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Programs & Initiatives
        </Typography>
        
        <Grid container spacing={3}>
          {pillar.programs.map((program, index) => (
            <Grid item xs={12} md={6} key={program.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderLeft: `4px solid ${pillar.color}`,
                    '&:hover': {
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {program.summary}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip
                        label={program.impact}
                        sx={{
                          backgroundColor: `${pillar.color}20`,
                          color: pillar.color,
                          fontWeight: 600,
                        }}
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<TrendingUp />}
                        sx={{ borderColor: pillar.color, color: pillar.color }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Box sx={{ textAlign: 'center', mt: 8, py: 6 }}>
          <Card sx={{ backgroundColor: pillar.color, color: 'white' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Get Involved
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Join us in making a lasting impact through {pillar.title.toLowerCase()}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/get-involved')}
                  sx={{
                    backgroundColor: 'white',
                    color: pillar.color,
                    '&:hover': { backgroundColor: 'grey.100' },
                  }}
                >
                  Volunteer
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/partners')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
                  }}
                >
                  Partner With Us
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Container>
  );
};
