import React from 'react';
import { CardContent, Typography, Box, Chip, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Pillar } from '../../lib/api';
import { ArrowForward } from '@mui/icons-material';
import { AppCard } from '../ui/AppCard';

interface PillarCardProps {
  pillar: Pillar;
  index: number;
}

export const PillarCard: React.FC<PillarCardProps> = ({ pillar, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      style={{ height: '100%' }}
    >
      <AppCard
        sx={{
          height: '100%',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          borderTop: (theme) => `4px solid ${pillar.color || theme.palette.primary.main}`,
          '&:hover': {
            boxShadow: (theme) => theme.shadows[6],
          },
        }}
        onClick={() => navigate(`/pillars/${pillar.id}`)}
      >
        <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 2, flexGrow: 1 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              {pillar.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {pillar.summary}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {pillar.programs.slice(0, 2).map((program) => (
              <Chip
                key={program.id}
                label={program.title}
                size="small"
                sx={{
                  backgroundColor: (theme) => alpha(pillar.color || theme.palette.primary.main, 0.1),
                  color: pillar.color || 'primary.main',
                  fontWeight: 500,
                }}
              />
            ))}
            {pillar.programs.length > 2 && (
              <Chip label={`+${pillar.programs.length - 2} more`} size="small" />
            )}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', mt: 'auto' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              Explore Pillar
            </Typography>
            <ArrowForward sx={{ ml: 1, fontSize: 16 }} />
          </Box>
        </CardContent>
      </AppCard>
    </motion.div>
  );
};
