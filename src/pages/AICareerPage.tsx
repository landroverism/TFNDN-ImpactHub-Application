import React, { useState } from 'react';
import { Box, Container, Typography, Alert, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Refresh } from '@mui/icons-material';
import { CareerQuiz } from '../components/AICareer/CareerQuiz';
import { CareerResults } from '../components/AICareer/CareerResults';
import { CareerRecommendation } from '../lib/api';

type QuizState = 'intro' | 'quiz' | 'results';

export const AICareerPage: React.FC = () => {
  const [state, setState] = useState<QuizState>('intro');
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);

  const handleStartQuiz = () => {
    setState('quiz');
  };

  const handleQuizComplete = (results: CareerRecommendation[]) => {
    setRecommendations(results);
    setState('results');
  };

  const handleRestart = () => {
    setState('intro');
    setRecommendations([]);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            AI Career Platform Demo
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Experience our AI-powered career guidance system that matches your skills and interests 
            with global opportunities in the digital economy.
          </Typography>
        </Box>
      </motion.div>

      <AnimatePresence mode="wait">
        {state === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
              <Alert severity="info" sx={{ mb: 4, textAlign: 'left' }}>
                <strong>Demo Notice:</strong> This is a demonstration of our AI career guidance system. 
                In production, this would use advanced machine learning models to provide more accurate 
                and personalized career recommendations.
              </Alert>
              
              <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                Discover Your Ideal Career Path
              </Typography>
              
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                Our AI-powered assessment analyzes your preferences, skills, and goals to recommend 
                the best career opportunities in the digital economy. The quiz takes about 3-5 minutes 
                and provides personalized training recommendations.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  What You'll Get:
                </Typography>
                <Box sx={{ textAlign: 'left', maxWidth: 400, mx: 'auto' }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    • Personalized career recommendations
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    • Skills gap analysis
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    • Training module suggestions
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    • Scholarship opportunities
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                size="large"
                onClick={handleStartQuiz}
                sx={{ px: 6, py: 2 }}
              >
                Start Career Assessment
              </Button>
            </Box>
          </motion.div>
        )}

        {state === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <CareerQuiz onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {state === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <CareerResults recommendations={recommendations} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Technical Implementation Note */}
      {state === 'intro' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box sx={{ mt: 8, p: 4, backgroundColor: 'grey.50', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              For Developers:
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              This demo uses a simple rule-based algorithm. To integrate with a real AI service:
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary">
              1. Set up environment variable: <code>REACT_APP_OPENAI_API_KEY</code><br />
              2. Replace the mock assessment in <code>src/lib/api.ts</code><br />
              3. Implement proper prompt engineering for career guidance<br />
              4. Add user data persistence and recommendation history
            </Typography>
          </Box>
        </motion.div>
      )}
    </Container>
  );
};
