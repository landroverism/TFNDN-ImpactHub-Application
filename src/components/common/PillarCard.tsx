import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Pillar } from '../../lib/api';
import { cardHover, getStaggerDelay } from '../../lib/animations';

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
      transition={{ duration: 0.5, delay: getStaggerDelay(index) }}
      {...cardHover}
    >
      <Card
        sx={{
          height: '100%',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: 9,
            '& .explore-text': {
              transform: 'translateX(4px)',
            },
          },
          borderTop: `4px solid ${pillar.color}`,
          position: 'relative',
          overflow: 'visible',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: pillar.color,
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover::before': {
            opacity: 0.5,
          },
        }}
        onClick={() => navigate(`/pillars/${pillar.id}`)}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography 
              variant="h5" 
              component="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                color: 'text.primary',
                mb: 1.5,
              }}
            >
              {pillar.title}
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                mb: 3,
                lineHeight: 1.6,
              }}
            >
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
                  border: `1px solid ${pillar.color}30`,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: `${pillar.color}30`,
                  },
                }}
              />
            ))}
            {pillar.programs.length > 3 && (
              <Chip
                label={`+${pillar.programs.length - 3} more`}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: 'grey.300',
                  color: 'text.secondary',
                }}
              />
            )}
          </Box>
          
          <Typography 
            variant="body2" 
            className="explore-text"
            sx={{ 
              color: 'primary.main', 
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              transition: 'transform 0.3s ease',
            }}
          >
            Explore Programs →
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
