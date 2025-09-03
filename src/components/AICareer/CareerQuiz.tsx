import React, { useState } from 'react';
import {
  Box,
  Typography,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  LinearProgress,
  CircularProgress,
  alpha,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizAnswer, CareerRecommendation } from '../../lib/api';
import mockData from '../../data/mock.json';
import { AppCard } from '../ui/AppCard';
import { AppButton } from '../ui/AppButton';

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
      { questionId: questions[currentQuestion].id, optionId: selectedOption },
    ];
    setAnswers(newAnswers);
    setSelectedOption('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleQuizComplete(newAnswers);
    }
  };

  const handleQuizComplete = async (finalAnswers: QuizAnswer[]) => {
    setIsLoading(true);
    try {
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
      const prevQuestionIndex = currentQuestion - 1;
      setCurrentQuestion(prevQuestionIndex);
      const prevAnswer = answers[prevQuestionIndex];
      if (prevAnswer) {
        setSelectedOption(prevAnswer.optionId);
      }
      setAnswers(answers.slice(0, -1));
    }
  };

  if (isLoading) {
    return (
      <AppCard sx={{ p: 4, textAlign: 'center' }}>
        <CardContent>
          <CircularProgress color="primary" sx={{ mb: 3 }} />
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Analyzing Your Responses...
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Our AI is finding the best career matches for you.
          </Typography>
        </CardContent>
      </AppCard>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <AppCard>
      <CardContent sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Question {currentQuestion + 1} of {questions.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Math.round(progress)}% Complete
            </Typography>
          </Box>
          <LinearProgress variant="determinate" value={progress} color="primary" sx={{ height: 8, borderRadius: 4 }} />
        </Box>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', minHeight: { md: '100px' } }}>
              {currentQ.question}
            </Typography>

            <FormControl component="fieldset" sx={{ width: '100%', mt: 3 }}>
              <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {currentQ.options.map((option) => (
                  <FormControlLabel
                    key={option.id}
                    value={option.id}
                    control={<Radio color="primary" />}
                    label={option.text}
                    sx={{
                      m: 0, mb: 1, width: '100%',
                      p: 1.5,
                      border: '1px solid',
                      borderRadius: 2,
                      borderColor: (theme) => selectedOption === option.id ? theme.palette.primary.main : theme.palette.divider,
                      bgcolor: (theme) => selectedOption === option.id ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                      transition: 'border-color 0.2s, background-color 0.2s',
                      '&:hover': {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </motion.div>
        </AnimatePresence>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <AppButton variant="secondary" onClick={handlePrevious} disabled={currentQuestion === 0}>
            Previous
          </AppButton>
          <AppButton variant="primary" onClick={handleNext} disabled={!selectedOption}>
            {currentQuestion === questions.length - 1 ? 'Finish & Get Results' : 'Next'}
          </AppButton>
        </Box>
      </CardContent>
    </AppCard>
  );
}
