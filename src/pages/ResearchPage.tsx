import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  CardContent,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Download, Assessment, Science, BarChart, Policy } from '@mui/icons-material';
import { AppButton } from '../components/ui/AppButton';
import { AppCard } from '../components/ui/AppCard';

export const ResearchPage: React.FC = () => {
  const reports = [
    {
      title: 'African Digital Economy Report 2024',
      description: 'Comprehensive analysis of digital transformation trends across Africa.',
      date: '2024-12-01',
      type: 'Annual Report',
    },
    {
      title: 'Virtual Assistant Market Analysis',
      description: 'Labor market insights and opportunities in remote work.',
      date: '2024-11-15',
      type: 'Market Research',
    },
    {
      title: 'Climate Justice Impact Assessment',
      description: 'Measuring the effectiveness of climate adaptation programs.',
      date: '2024-10-30',
      type: 'Impact Study',
    },
    {
      title: 'Mental Health Program Evaluation',
      description: 'Outcomes and lessons from psychosocial support initiatives.',
      date: '2024-10-01',
      type: 'Program Evaluation',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Research & Innovation
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Data-driven insights and evidence-based research that inform our programs and measure our impact.
          </Typography>
        </Box>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Latest Research Reports
        </Typography>

        <Grid container spacing={4}>
          {reports.map((report, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
                <AppCard sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': { boxShadow: (theme) => theme.shadows[6] }
                }}>
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Chip label={report.type} size="small" color="primary" variant="outlined" />
                      <Typography variant="body2" color="text.secondary">
                        {new Date(report.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {report.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {report.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 3, pt: 0 }}>
                    <AppButton variant="primary" startIcon={<Download />} fullWidth>
                      Download Report
                    </AppButton>
                  </Box>
                </AppCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <AppCard sx={{ p: { xs: 3, md: 5 }, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Assessment sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Our Research Approach
                </Typography>
              </Box>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Science sx={{ fontSize: 48, mb: 1, color: 'primary.contrastText' }} />
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      Data Collection
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      Mixed-methods approach combining quantitative surveys, qualitative interviews, and participatory research.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <BarChart sx={{ fontSize: 48, mb: 1, color: 'primary.contrastText' }} />
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      AI Analytics
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      Advanced machine learning for pattern recognition, predictive modeling, and impact assessment.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Policy sx={{ fontSize: 48, mb: 1, color: 'primary.contrastText' }} />
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      Evidence-Based
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      Program decisions backed by rigorous research and continuous monitoring and evaluation frameworks.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </AppCard>
        </Box>
      </motion.div>
    </Container>
  );
};
