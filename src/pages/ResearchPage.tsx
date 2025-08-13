import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Download, Assessment } from '@mui/icons-material';
import { api } from '../lib/api';

export const ResearchPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await api.getChartData();
      } catch (error) {
        console.error('Error loading chart data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const reports = [
    {
      title: 'African Digital Economy Report 2024',
      description: 'Comprehensive analysis of digital transformation trends across Africa',
      date: '2024-12-01',
      type: 'Annual Report',
    },
    {
      title: 'Virtual Assistant Market Analysis',
      description: 'Labor market insights and opportunities in remote work',
      date: '2024-11-15',
      type: 'Market Research',
    },
    {
      title: 'Climate Justice Impact Assessment',
      description: 'Measuring the effectiveness of climate adaptation programs',
      date: '2024-10-30',
      type: 'Impact Study',
    },
    {
      title: 'Mental Health Program Evaluation',
      description: 'Outcomes and lessons learned from psychosocial support initiatives',
      date: '2024-10-01',
      type: 'Program Evaluation',
    },
  ];

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Loading Research Data...</Typography>
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
            Research & Innovation
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Data-driven insights and evidence-based research that inform our programs and measure our impact.
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Latest Research Reports
        </Typography>

        <Grid container spacing={3}>
          {reports.map((report, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', '&:hover': { boxShadow: '0 8px 25px rgba(0,0,0,0.15)' } }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Chip
                        label={report.type}
                        size="small"
                        sx={{ backgroundColor: 'primary.light', color: 'white' }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {new Date(report.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {report.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {report.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<Download />}
                      fullWidth
                      sx={{ mt: 'auto' }}
                    >
                      Download Report
                    </Button>
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
        <Box sx={{ mt: 8 }}>
          <Card sx={{ p: 4, backgroundColor: 'info.light', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Assessment sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Our Research Approach
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Data Collection
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    Mixed-methods approach combining quantitative surveys, qualitative interviews, and participatory research methods.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    AI Analytics
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    Advanced machine learning algorithms for pattern recognition, predictive modeling, and impact assessment.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Evidence-Based
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>
                    All program decisions backed by rigorous research and continuous monitoring and evaluation frameworks.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Container>
  );
};
