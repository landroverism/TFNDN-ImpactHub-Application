import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Grid,
  Alert,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { CareerRecommendation } from '../../lib/api';
import { TrendingUp, School, Work } from '@mui/icons-material';

interface CareerResultsProps {
  recommendations: CareerRecommendation[];
  onRestart: () => void;
}

export const CareerResults: React.FC<CareerResultsProps> = ({ recommendations, onRestart }) => {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
          Your Career Recommendations
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 4 }}>
          Based on your responses, here are the top career paths that match your interests and skills.
        </Typography>

        <Alert severity="info" sx={{ mb: 4 }}>
          <strong>Demo Mode:</strong> These recommendations are generated using a simplified algorithm. 
          In production, this would use advanced AI models for more accurate career matching.
        </Alert>
      </motion.div>

      <Grid container spacing={3}>
        {recommendations.map((rec, index) => (
          <Grid item xs={12} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                {/* Match score badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -10,
                    right: 20,
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    zIndex: 1,
                  }}
                >
                  {rec.score}% Match
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Work sx={{ color: 'primary.main', mr: 1 }} />
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                      {rec.role}
                    </Typography>
                  </Box>

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {rec.opportunity.description}
                  </Typography>

                  {/* Match score visualization */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Compatibility Score
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {rec.score}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={rec.score}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'grey.200',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: rec.score >= 80 ? 'success.main' : rec.score >= 60 ? 'secondary.main' : 'warning.main',
                        },
                      }}
                    />
                  </Box>

                  {/* Skills required */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                      Key Skills Required:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {rec.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{ backgroundColor: 'primary.light', color: 'white' }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Salary and location */}
                  <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Salary Range
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {rec.opportunity.salary}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Location
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {rec.opportunity.location}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Training recommendations */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <School sx={{ color: 'success.main', mr: 1, fontSize: 20 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Recommended Training:
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {rec.trainingLinks.map((training) => (
                        <Chip
                          key={training}
                          label={training}
                          size="small"
                          variant="outlined"
                          sx={{ borderColor: 'success.main', color: 'success.main' }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    startIcon={<TrendingUp />}
                  >
                    Apply for This Role
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="outlined" onClick={onRestart} size="large">
          Take Quiz Again
        </Button>
      </Box>
    </Box>
  );
};
