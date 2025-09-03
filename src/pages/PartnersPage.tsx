import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  CircularProgress,
  Button,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import { api, Partner } from '../lib/api';
import { Handshake } from '@mui/icons-material';

export const PartnersPage: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const partnersData = await api.getPartners();
        setPartners(partnersData);
      } catch (error) {
        console.error('Error loading partners:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPartners();
  }, []);

  if (loading) {
    return (
      <Container sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Partners
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Working together with leading organizations to create sustainable impact across Africa.
          </Typography>
        </Box>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Grid container spacing={4}>
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={3} key={partner.id}>
              <motion.div whileHover={{ y: -8, scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                  <CardContent>
                    <Avatar
                      src={partner.logoUrl}
                      alt={`${partner.name} logo`}
                      sx={{
                        width: 80, height: 80, mx: 'auto', mb: 2,
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                        color: 'primary.main',
                        fontSize: '2rem',
                        img: { objectFit: 'contain', p: 1 }
                      }}
                    >
                      {partner.name.charAt(0)}
                    </Avatar>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {partner.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {partner.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Card sx={{ p: { xs: 3, md: 5 }, bgcolor: 'primary.main', color: 'primary.contrastText', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Partner With Us
              </Typography>
              <Typography sx={{ my: 2, maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
                We are always looking for strategic partners who share our vision. Together, we can create lasting impact at scale.
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<Handshake />}
                sx={{
                  mt: 2,
                  bgcolor: 'white',
                  color: 'black',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                }}
              >
                Become a Partner
              </Button>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Container>
  );
};
