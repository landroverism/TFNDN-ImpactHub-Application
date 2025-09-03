import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { VolunteerActivism, ContactMail, School, Work, Send } from '@mui/icons-material';
import { api } from '../lib/api';
import { AppButton } from '../components/ui/AppButton';
import { AppCard } from '../components/ui/AppCard';

export const GetInvolvedPage: React.FC = () => {
  const theme = useTheme();
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
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await api.submitVolunteer(formData);
      setSubmitMessage(result.message);
      setFormData({ name: '', email: '', phone: '', interest: '', skills: '', message: '' });
    } catch (error) {
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const opportunities = [
    {
      title: 'Program Volunteer',
      description: 'Support our education and career development programs.',
      icon: <School fontSize="large" />,
    },
    {
      title: 'Mentor',
      description: 'Guide young professionals in their career journey.',
      icon: <Work fontSize="large" />,
    },
    {
      title: 'Research Assistant',
      description: 'Help with data collection and analysis for our research initiatives.',
      icon: <ContactMail fontSize="large" />,
    },
    {
      title: 'Community Ambassador',
      description: 'Represent TFDN in your local community and events.',
      icon: <VolunteerActivism fontSize="large" />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Get Involved
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Join our mission to transform lives across Africa through education, career development, and social innovation.
          </Typography>
        </Box>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Volunteer Opportunities
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {opportunities.map((opportunity, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                <AppCard
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 2,
                    borderTop: `4px solid ${theme.palette.primary.main}`,
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: 'text.primary', mb: 2 }}>{opportunity.icon}</Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {opportunity.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {opportunity.description}
                    </Typography>
                  </CardContent>
                </AppCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Volunteer Application
        </Typography>

        {submitMessage && (
          <Alert severity={submitMessage.includes('Error') ? 'error' : 'success'} sx={{ mb: 3 }}>
            {submitMessage}
          </Alert>
        )}

        <AppCard sx={{ p: { xs: 2, md: 4 } }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Full Name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone Number (Optional)" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Area of Interest</InputLabel>
                  <Select value={formData.interest} label="Area of Interest" onChange={(e) => handleInputChange('interest', e.target.value)}>
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
                  label="Skills & Experience (Optional)"
                  multiline
                  rows={3}
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  placeholder="e.g., Project Management, Web Development, Public Speaking..."
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
                <AppButton type="submit" variant="primary" size="large" disabled={isSubmitting} startIcon={<Send />}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </AppButton>
              </Grid>
            </Grid>
          </form>
        </AppCard>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
        <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <AppCard sx={{ p: { xs: 3, md: 4 } }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Join Our Community
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Be part of a growing network of changemakers.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>500+</Typography>
                  <Typography>Active Volunteers</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>50+</Typography>
                  <Typography>Partner Organizations</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold' }}>25,000+</Typography>
                  <Typography>Lives Impacted</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </AppCard>
        </Box>
      </motion.div>
    </Container>
  );
};
