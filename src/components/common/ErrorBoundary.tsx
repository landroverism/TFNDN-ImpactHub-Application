import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { ErrorOutline, Refresh } from '@mui/icons-material';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component to catch and handle React errors
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Container maxWidth="md">
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              py: 8,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                maxWidth: 600,
              }}
            >
              <ErrorOutline
                sx={{
                  fontSize: 64,
                  color: 'error.main',
                  mb: 2,
                }}
              />
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Oops! Something went wrong
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </Typography>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    mb: 3,
                    backgroundColor: 'grey.50',
                    textAlign: 'left',
                    maxHeight: 200,
                    overflow: 'auto',
                  }}
                >
                  <Typography
                    variant="body2"
                    component="pre"
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      margin: 0,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {this.state.error.toString()}
                  </Typography>
                </Paper>
              )}
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  startIcon={<Refresh />}
                  onClick={() => window.location.reload()}
                >
                  Refresh Page
                </Button>
                <Button variant="outlined" onClick={this.handleReset}>
                  Try Again
                </Button>
              </Box>
            </Paper>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

/**
 * Functional error display component
 */
interface ErrorDisplayProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  message = 'An error occurred',
  onRetry,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 2,
      }}
    >
      <ErrorOutline sx={{ fontSize: 64, color: 'error.main', mb: 2 }} />
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        Something went wrong
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
        {message}
      </Typography>
      {onRetry && (
        <Button variant="contained" startIcon={<Refresh />} onClick={onRetry}>
          Try Again
        </Button>
      )}
    </Box>
  );
};

/**
 * Not found / 404 component
 */
export const NotFound: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '6rem',
            fontWeight: 700,
            color: 'primary.main',
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500 }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button variant="contained" href="/" size="large">
          Go Home
        </Button>
      </Box>
    </Container>
  );
};

