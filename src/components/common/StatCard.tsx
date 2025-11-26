import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import { cardHover } from '../../lib/animations';

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  icon?: React.ReactNode;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  suffix = '', 
  icon, 
  delay = 0 
}) => {
  const displayValue = useCountUp({
    start: 0,
    end: value,
    duration: 2000,
    delay,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      {...cardHover}
    >
      <Card 
        sx={{ 
          height: '100%', 
          textAlign: 'center', 
          p: 2,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <CardContent>
          {icon && (
            <Box sx={{ mb: 2, color: 'primary.main' }}>
              {icon}
            </Box>
          )}
          <Typography 
            variant="h3" 
            component="div" 
            sx={{ 
              fontWeight: 'bold', 
              color: 'primary.main', 
              mb: 1,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {displayValue.toLocaleString()}{suffix}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
            {label}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
