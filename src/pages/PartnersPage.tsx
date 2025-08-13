import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import { api } from '../lib/api';

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
}

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
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Loading Partners...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Partners
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Working together with leading organizations to create sustainable impact across Africa.
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Grid container spacing={4}>
          {partners.map((partner, index) => (
            <Grid item xs={12} sm={6} md={3} key={partner.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        backgroundColor: 'grey.100',
                      }}
                    >
                      <Typography variant="h4" sx={{ color: 'primary.main' }}>
                        {partner.name.charAt(0)}
                      </Typography>
                    </Avatar>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Card sx={{ p: 4, backgroundColor: 'primary.light', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Partner With Us
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                Join our network of organizations creating positive change across Africa
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
                We're always looking for strategic partners who share our vision of transforming 
                lives through education, career development, and social innovation. Together, 
                we can create lasting impact at scale.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Container>
  );
};
