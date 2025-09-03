import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, CardContent, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Download } from '@mui/icons-material';
import { PillarCard } from '../components/common/PillarCard';
import { InteractiveTimeline } from '../components/Timeline/InteractiveTimeline';
import { api, Pillar, TimelineEvent } from '../lib/api';
import { AppButton } from '../components/ui/AppButton';
import { AppCard } from '../components/ui/AppCard';

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
    const link = document.createElement('a');
    link.href = '/documents/tfdn-strategic-framework-2025-2030.pdf';
    link.download = 'TFDN Strategic Framework 2025-2030.pdf';
    link.click();
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress color="primary" />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading Strategic Framework...
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.default', py: 6 }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Strategic Framework
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 3, maxWidth: '750px', mx: 'auto' }}>
              A comprehensive roadmap for transformative impact across Africa for 2025-2030.
            </Typography>
            <AppButton variant="primary" startIcon={<Download />} onClick={handleDownloadPDF}>
              Download Framework PDF
            </AppButton>
          </Box>
        </motion.div>

        <Box sx={{ mb: 8 }}>
          <InteractiveTimeline timeline={timeline} />
        </Box>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Four Strategic Pillars
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Click on any pillar to explore detailed programs and initiatives that drive our mission forward.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {pillars.map((pillar, index) => (
              <Grid item xs={12} md={6} key={pillar.id}>
                <PillarCard pillar={pillar} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <AppCard sx={{ p: { xs: 3, md: 5 }, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Vision 2030
                </Typography>
                <Typography variant="h6" sx={{ mb: 3, opacity: 0.9, fontStyle: 'italic' }}>
                  To be the leading network driving sustainable development and innovation across Africa.
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', opacity: 0.9 }}>
                  By 2030, TFDN aims to have transformed the lives of over 100,000 individuals across 10+ African countries, establishing a sustainable ecosystem of education, career development, and social innovation.
                </Typography>
              </CardContent>
            </AppCard>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
