import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Chip, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { TimelineEvent } from '../../lib/api';

interface InteractiveTimelineProps {
  timeline: TimelineEvent[];
}

export const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ timeline }) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const selectedEvent = timeline.find(event => event.year === selectedYear);

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Strategic Timeline 2025-2030
      </Typography>
      
      {/* Timeline visualization */}
      <Box sx={{ position: 'relative', mb: 4 }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: 2,
            backgroundColor: 'primary.light',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        />
        
        {/* Timeline points */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2,
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 2 : 0,
          }}
        >
          {timeline.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: selectedYear === event.year ? 'secondary.main' : 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {event.year}
                  </Box>
                </motion.div>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    fontWeight: selectedYear === event.year ? 600 : 400,
                    color: selectedYear === event.year ? 'secondary.main' : 'text.primary',
                  }}
                >
                  {event.year}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Event details */}
      <AnimatePresence mode="wait">
        {selectedEvent && (
          <motion.div
            key={selectedEvent.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card sx={{ mt: 3, backgroundColor: 'background.paper' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {selectedEvent.year} Milestones
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {selectedEvent.events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Chip
                          label={index + 1}
                          size="small"
                          sx={{
                            backgroundColor: 'secondary.main',
                            color: 'white',
                            fontWeight: 'bold',
                            minWidth: 24,
                          }}
                        />
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {event.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {event.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!selectedYear && (
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body1" color="text.secondary">
            Click on any year to explore milestones and goals
          </Typography>
        </Box>
      )}
    </Box>
  );
};
