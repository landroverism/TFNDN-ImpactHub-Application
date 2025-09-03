import React, { useState } from 'react';
import { Box, Typography, CardContent, useTheme, useMediaQuery, Divider } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { TimelineEvent } from '../../lib/api';
import { AppCard } from '../ui/AppCard';

interface InteractiveTimelineProps {
  timeline: TimelineEvent[];
}

export const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ timeline }) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(timeline.length > 0 ? timeline[0].year : null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const selectedEvent = timeline.find(event => event.year === selectedYear);

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}>
        Strategic Timeline
      </Typography>

      <Box sx={{ position: 'relative', mb: 6, px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            position: 'absolute',
            top: '20px',
            left: { xs: '20px', md: '5%' },
            right: { xs: 'auto', md: '5%' },
            width: { xs: '2px', md: '90%' },
            height: { xs: 'calc(100% - 40px)', md: '2px' },
            backgroundColor: 'divider',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2,
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 4 : 0,
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
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
              >
                <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: `2px solid ${selectedYear === event.year ? theme.palette.primary.main : theme.palette.divider}`,
                      backgroundColor: selectedYear === event.year ? 'primary.main' : 'background.paper',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: selectedYear === event.year ? 'white' : 'text.primary',
                      fontWeight: 'bold',
                      boxShadow: theme.shadows[2],
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    {event.year.toString().slice(-2)}
                  </Box>
                </motion.div>
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    fontWeight: selectedYear === event.year ? 'bold' : 'regular',
                    color: selectedYear === event.year ? 'primary.main' : 'text.secondary',
                  }}
                >
                  {event.year}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      <AnimatePresence mode="wait">
        {selectedEvent && (
          <motion.div
            key={selectedEvent.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <AppCard sx={{ mt: 3, borderLeft: (theme) => `5px solid ${theme.palette.primary.main}` }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {selectedEvent.year} Milestones
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                  {selectedEvent.events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                    >
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                          {event.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {event.desc}
                        </Typography>
                        {index < selectedEvent.events.length - 1 && <Divider sx={{ my: 2 }} />}
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </CardContent>
            </AppCard>
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedYear && (
        <Box sx={{ textAlign: 'center', mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="body1" color="text.secondary">
            Click on a year to explore key milestones and initiatives.
          </Typography>
        </Box>
      )}
    </Box>
  );
};
