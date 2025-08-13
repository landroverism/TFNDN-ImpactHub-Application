import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Download } from '@mui/icons-material';
import { PillarCard } from '../components/common/PillarCard';
import { InteractiveTimeline } from '../components/Timeline/InteractiveTimeline';
import { api, Pillar, TimelineEvent } from '../lib/api';

export const FrameworkPage: React.FC = () => {
  const [pillars, setPillars] = useState<Pillar[]>([]);
  const [timeline, setTimeline] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [pillarsData, timelineData] = await Promise.all([
          api.getPillars(),
          api.getTimeline(),
        ]);
        setPillars(pillarsData);
        setTimeline(timelineData);
      } catch (error) {
        console.error('Error loading framework data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleDownloadPDF = () => {
    // Mock PDF download
    const link = document.createElement('a');
    link.href = '/documents/tfdn-strategic-framework-2025-2030.pdf';
    link.download = 'TFDN Strategic Framework 2025-2030.pdf';
    link.click();
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4">Loading Strategic Framework...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Strategic Framework
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Our comprehensive roadmap for transformative impact across Africa (2025-2030)
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Download />}
            onClick={handleDownloadPDF}
            sx={{ mb: 4 }}
          >
            Download Full Framework (PDF)
          </Button>
        </Box>
      </motion.div>

      {/* Interactive Timeline */}
      <Box sx={{ mb: 8 }}>
        <InteractiveTimeline timeline={timeline} />
      </Box>

      {/* Four Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Four Strategic Pillars
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
          Click on any pillar to explore detailed programs and initiatives
        </Typography>
        
        <Grid container spacing={3}>
          {pillars.map((pillar, index) => (
            <Grid item xs={12} md={6} key={pillar.id}>
              <PillarCard pillar={pillar} index={index} />
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Framework Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Card sx={{ p: 4, backgroundColor: 'primary.light', color: 'white' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Vision 2030
              </Typography>
              <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                To be the leading network driving sustainable development and innovation across Africa
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', opacity: 0.9 }}>
                By 2030, TFDN will have transformed the lives of over 100,000 individuals across 10+ African countries, 
                establishing a sustainable ecosystem of education, career development, and social innovation that serves 
                as a model for development organizations worldwide.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Container>
  );
};
