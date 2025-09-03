import React from 'react';
import {
  Box,
  Typography,
  CardContent,
  Chip,
  Grid,
  Divider,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { CareerRecommendation } from '../../lib/api';
import { TrendingUp, School, Work, LocationOn, AttachMoney, Refresh } from '@mui/icons-material';
import { AppCard } from '../ui/AppCard';
import { AppButton } from '../ui/AppButton';
import { Status } from '../ui/StatusBadge';

interface CareerResultsProps {
  recommendations: CareerRecommendation[];
  onRestart: () => void;
}

const getScoreStatus = (score: number): Status => {
  if (score >= 80) return 'resolved';
  if (score >= 60) return 'review';
  return 'pending';
};

export const CareerResults: React.FC<CareerResultsProps> = ({ recommendations, onRestart }) => {
  const theme = useTheme();

  return (
    <Box>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          Your Career Recommendations
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 4 }}>
          Based on your responses, here are the top career paths that match your profile.
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {recommendations.map((rec, index) => {
          const status = getScoreStatus(rec.score);
          const statusColor = theme.palette.status[status];

          return (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <AppCard status={status}>
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Grid item xs={12} sm={8}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Work sx={{ color: 'text.primary' }} />
                          <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                            {rec.role}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={4} sx={{ textAlign: { sm: 'right' } }}>
                        <Chip
                          label={`${rec.score}% Match`}
                          sx={{
                            backgroundColor: rec.score >= 80 ? theme.palette.primary.main : theme.palette.secondary.main,
                            color: theme.palette.getContrastText(rec.score >= 80 ? theme.palette.primary.main : theme.palette.secondary.main),
                            fontWeight: 'bold',
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {rec.opportunity.description}
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                          Key Info
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <AttachMoney fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2">{rec.opportunity.salary}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <LocationOn fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2">{rec.opportunity.location}</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                          Key Skills
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {rec.skills.map((skill) => (
                            <Chip key={skill} label={skill} size="small" />
                          ))}
                        </Box>
                      </Grid>
                    </Grid>

                    <Divider sx={{ my: 3 }} />

                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                        <School sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          Recommended Training
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {rec.trainingLinks.map((training) => (
                          <Chip key={training} label={training} size="small" variant="outlined" />
                        ))}
                      </Box>
                    </Box>

                    <AppButton
                      component="a"
                      variant="primary"
                      fullWidth
                      sx={{ mt: 4 }}
                      startIcon={<TrendingUp />}
                      href={rec.opportunity.link}
                      target="_blank"
                    >
                      View & Apply for This Role
                    </AppButton>
                  </CardContent>
                </AppCard>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <AppButton variant="secondary" onClick={onRestart} startIcon={<Refresh />}>
          Take Quiz Again
        </AppButton>
      </Box>
    </Box>
  );
};
