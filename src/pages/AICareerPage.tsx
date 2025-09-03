import React, { useState } from 'react';
import { Box, Container, Typography, Alert, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleOutline, Code } from '@mui/icons-material';
import { CareerQuiz } from '../components/AICareer/CareerQuiz';
import { CareerResults } from '../components/AICareer/CareerResults';
import { CareerRecommendation } from '../lib/api';
import { AppButton } from '../components/ui/AppButton';
import { AppCard } from '../components/ui/AppCard';

type QuizState = 'intro' | 'quiz' | 'results';

export const AICareerPage: React.FC = () => {
  const [state, setState] = useState<QuizState>('intro');
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);

  const handleStartQuiz = () => setState('quiz');
  const handleQuizComplete = (results: CareerRecommendation[]) => {
    setRecommendations(results);
    setState('results');
  };
  const handleRestart = () => {
    setRecommendations([]);
    setState('intro');
  };

  const benefits = [
    'Personalized career recommendations',
    'Skills gap analysis',
    'Curated training module suggestions',
    'Relevant scholarship opportunities',
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              AI Career Platform
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
              Discover your ideal career path with our AI-powered guidance system, matching your skills to global digital economy opportunities.
            </Typography>
          </Box>
        </motion.div>

        <AnimatePresence mode="wait">
          {state === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <AppCard sx={{ p: { xs: 3, md: 5 }, textAlign: 'center' }}>
                <Alert severity="info" sx={{ mb: 4, textAlign: 'left' }}>
                  <strong>Demo Notice:</strong> This is a proof-of-concept. A production version would use advanced machine learning for more precise recommendations.
                </Alert>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Find Your Future in the Digital World
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Take our 3-minute assessment to analyze your preferences and skills. We'll provide personalized career and training recommendations.
                </Typography>

                <Box sx={{ mb: 4, display: 'inline-block', textAlign: 'left' }}>
                  <List dense>
                    {benefits.map((benefit) => (
                      <ListItem key={benefit}>
                        <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5 }}>
                          <CheckCircleOutline color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <AppButton variant="primary" size="large" onClick={handleStartQuiz}>
                  Start Career Assessment
                </AppButton>
              </AppCard>
            </motion.div>
          )}

          {state === 'quiz' && (
            <motion.div key="quiz" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.5 }}>
              <CareerQuiz onComplete={handleQuizComplete} />
            </motion.div>
          )}

          {state === 'results' && (
            <motion.div key="results" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.5 }}>
              <CareerResults recommendations={recommendations} onRestart={handleRestart} />
            </motion.div>
          )}
        </AnimatePresence>

        {state === 'intro' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <AppCard sx={{ mt: 6, p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Code /> For Developers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This demo uses a mock API. To connect to a real AI service, you would typically:
              </Typography>
              <List dense sx={{ fontSize: '0.875rem', '& .MuiListItem-root': { pl: 1 } }}>
                <ListItem>1. Set up an environment variable for your AI service API key.</ListItem>
                <ListItem>2. Replace the mock function in <code>src/lib/api.ts</code> with a real API call.</ListItem>
                <ListItem>3. Implement robust prompt engineering for career guidance.</ListItem>
                <ListItem>4. Add user data persistence and recommendation history.</ListItem>
              </List>
            </AppCard>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};
