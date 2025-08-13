import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { VolunteerActivism, ContactMail, School, Work } from '@mui/icons-material';
import { api } from '../lib/api';

export const GetInvolvedPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    skills: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await api.submitVolunteer(formData);
      setSubmitMessage(result.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        skills: '',
        message: '',
      });
    } catch (error) {
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const opportunities = [
    {
      title: 'Program Volunteer',
      description: 'Support our education and career development programs',
      icon: <School sx={{ fontSize: 40 }} />,
      color: '#0F766E',
    },
    {
      title: 'Mentor',
      description: 'Guide young professionals in their career journey',
      icon: <Work sx={{ fontSize: 40 }} />,
      color: '#F59E0B',
    },
    {
      title: 'Research Assistant',
      description: 'Help with data collection and analysis for our research initiatives',
      icon: <ContactMail sx={{ fontSize: 40 }} />,
      color: '#8B5CF6',
    },
    {
      title: 'Community Ambassador',
      description: 'Represent TFDN in your local community',
      icon: <VolunteerActivism sx={{ fontSize: 40 }} />,
      color: '#84CC16',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Get Involved
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Join our mission to transform lives across Africa through education, career development, and social innovation.
          </Typography>
        </Box>
      </motion.div>

      {/* Volunteer Opportunities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Volunteer Opportunities
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {opportunities.map((opportunity, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                    p: 2,
                    borderTop: `4px solid ${opportunity.color}`,
                    '&:hover': {
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: opportunity.color, mb: 2 }}>
                      {opportunity.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {opportunity.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {opportunity.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Volunteer Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Volunteer Application
        </Typography>

        {submitMessage && (
          <Alert severity="success" sx={{ mb: 3 }}>
            {submitMessage}
          </Alert>
        )}

        <Card sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Area of Interest</InputLabel>
                  <Select
                    value={formData.interest}
                    onChange={(e) => handleInputChange('interest', e.target.value)}
                    required
                  >
                    <MenuItem value="education">Education & Leadership</MenuItem>
                    <MenuItem value="career">Career Development</MenuItem>
                    <MenuItem value="social">Social Innovation</MenuItem>
                    <MenuItem value="research">Research & AI</MenuItem>
                    <MenuItem value="general">General Support</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Skills & Experience"
                  multiline
                  rows={3}
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  placeholder="Tell us about your relevant skills and experience..."
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Why do you want to volunteer with TFDN?"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ px: 4, py: 1.5 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </motion.div>

      {/* Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Card sx={{ p: 4, backgroundColor: 'success.light', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Join Our Community
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Be part of a growing network of changemakers
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    500+
                  </Typography>
                  <Typography variant="body1">Active Volunteers</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    50+
                  </Typography>
                  <Typography variant="body1">Partner Organizations</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    25,000+
                  </Typography>
                  <Typography variant="body1">Lives Impacted</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Container>
  );
};
