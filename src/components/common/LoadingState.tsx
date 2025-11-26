import React from 'react';
import { Box, CircularProgress, Typography, Skeleton, Container } from '@mui/material';
import { motion } from 'framer-motion';

interface LoadingStateProps {
  message?: string;
  fullScreen?: boolean;
}

/**
 * Loading state component with spinner
 */
export const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = 'Loading...', 
  fullScreen = false 
}) => {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        py: fullScreen ? 8 : 4,
      }}
    >
      <CircularProgress size={48} thickness={4} />
      {message && (
        <Typography variant="body1" color="text.secondary">
          {message}
        </Typography>
      )}
    </Box>
  );

  if (fullScreen) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {content}
      </Box>
    );
  }

  return content;
};

/**
 * Loading overlay component
 */
export const LoadingOverlay: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <LoadingState message={message} />
    </motion.div>
  );
};

/**
 * Skeleton loader for cards
 */
export const CardSkeleton: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 2 }} />
      <Skeleton variant="text" width="60%" height={32} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
    </Box>
  );
};

/**
 * Skeleton loader for page content
 */
export const PageSkeleton: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Skeleton variant="text" width="40%" height={48} sx={{ mb: 2 }} />
      <Skeleton variant="text" width="70%" height={24} sx={{ mb: 4 }} />
      
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </Box>
    </Container>
  );
};

/**
 * Inline loading spinner
 */
export const InlineLoader: React.FC<{ size?: number }> = ({ size = 20 }) => {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', ml: 1 }}>
      <CircularProgress size={size} thickness={4} />
    </Box>
  );
};

/**
 * Skeleton for stat cards
 */
export const StatCardSkeleton: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <Skeleton
        variant="circular"
        width={48}
        height={48}
        sx={{ mx: 'auto', mb: 2 }}
      />
      <Skeleton variant="text" width="60%" height={40} sx={{ mx: 'auto', mb: 1 }} />
      <Skeleton variant="text" width="80%" height={20} sx={{ mx: 'auto' }} />
    </Box>
  );
};

