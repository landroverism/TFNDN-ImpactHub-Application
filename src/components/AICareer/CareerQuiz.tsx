import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  LinearProgress,
  Alert,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizAnswer, CareerRecommendation } from '../../lib/api';
import mockData from '../../data/mock.json';

interface CareerQuizProps {
  onComplete: (recommendations: CareerRecommendation[]) => void;
}

export const CareerQuiz: React.FC<CareerQuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const questions = mockData.careerQuestions;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = [
      ...answers,
      { questionId: questions[currentQuestion].id, optionId: selectedOption }
    ];
    setAnswers(newAnswers);
    setSelectedOption('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete - process results
      handleQuizComplete(newAnswers);
    }
  };

  const handleQuizComplete = async (finalAnswers: QuizAnswer[]) => {
    setIsLoading(true);
    
    try {
      // Simulate API call to assess career fit
      const { api } = await import('../../lib/api');
      const recommendations = await api.assessCareer(finalAnswers);
      onComplete(recommendations);
    } catch (error) {
      console.error('Error processing quiz:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      // Set the previous answer as selected
      const prevAnswer = answers[currentQuestion - 1];
      if (prevAnswer) {
        setSelectedOption(prevAnswer.optionId);
      }
    }
  };

  if (isLoading) {
    return (
      <Card sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Analyzing Your Responses...
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Our AI is processing your answers to find the best career matches for you.
          </Typography>
          <LinearProgress sx={{ mb: 2 }} />
          <Typography variant="body2" color="text.secondary">
            This may take a few moments
          </Typography>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto' }}>
      <CardContent sx={{ p: 4 }}>
        {/* Progress bar */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Question {currentQuestion + 1} of {questions.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Math.round(progress)}% Complete
            </Typography>
          </Box>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
        </Box>

        <Alert severity="info" sx={{ mb: 3 }}>
          This is a demo assessment. In production, this would use advanced AI algorithms for more accurate career matching.
        </Alert>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              {currentQ.question}
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%', mt: 3 }}>
              <RadioGroup
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                {currentQ.options.map((option) => (
                  <motion.div
                    key={option.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FormControlLabel
                      value={option.id}
                      control={<Radio />}
                      label={option.text}
                      sx={{
                        width: '100%',
                        m: 0,
                        p: 2,
                        border: '1px solid',
                        borderColor: selectedOption === option.id ? 'primary.main' : 'grey.300',
                        borderRadius: 2,
                        mb: 1,
                        backgroundColor: selectedOption === option.id ? 'primary.light' : 'transparent',
                        '&:hover': {
                          backgroundColor: 'grey.50',
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </RadioGroup>
            </FormControl>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            variant="outlined"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
