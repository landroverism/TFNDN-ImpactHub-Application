import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Pillar } from '../../lib/api';

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
      whileHover={{ y: -5 }}
    >
      <Card
        sx={{
          height: '100%',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          },
          borderTop: `4px solid ${pillar.color}`,
        }}
        onClick={() => navigate(`/pillars/${pillar.id}`)}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              {pillar.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {pillar.summary}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {pillar.programs.slice(0, 3).map((program) => (
              <Chip
                key={program.id}
                label={program.title}
                size="small"
                sx={{
                  backgroundColor: `${pillar.color}20`,
                  color: pillar.color,
                  fontWeight: 500,
                }}
              />
            ))}
            {pillar.programs.length > 3 && (
              <Chip
                label={`+${pillar.programs.length - 3} more`}
                size="small"
                variant="outlined"
              />
            )}
          </Box>
          
          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
            Explore Programs →
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
