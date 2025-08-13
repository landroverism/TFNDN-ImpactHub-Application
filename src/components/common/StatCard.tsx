import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

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
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(counter);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
        <CardContent>
          {icon && (
            <Box sx={{ mb: 2, color: 'primary.main' }}>
              {icon}
            </Box>
          )}
          <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
            {displayValue.toLocaleString()}{suffix}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {label}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
