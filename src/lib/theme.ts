import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create base theme with complete design system
const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a', // Navy Blue
      light: '#3b82f6',
      dark: '#1e40af',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#dc2626', // Red
      light: '#ef4444',
      dark: '#b91c1c',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#16a34a', // Green
      light: '#22c55e',
      dark: '#15803d',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#1e3a8a', // Navy Blue (same as primary)
      light: '#3b82f6',
      dark: '#1e40af',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#eab308', // Yellow (for warnings)
      light: '#facc15',
      dark: '#ca8a04',
      contrastText: '#111827',
    },
    error: {
      main: '#dc2626', // Red (same as secondary)
      light: '#ef4444',
      dark: '#b91c1c',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280',
      disabled: '#9CA3AF',
    },
    divider: '#E5E7EB',
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: [
      'Inter Variable',
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
    // Heading variants
    h1: {
      fontSize: '3rem', // 48px
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.25rem', // 36px
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.875rem', // 30px
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.5rem', // 24px
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem', // 20px
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem', // 18px
      fontWeight: 600,
      lineHeight: 1.5,
    },
    // Body variants
    body1: {
      fontSize: '1rem', // 16px
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    // Additional variants
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      letterSpacing: '0.02em',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 2,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: 'none',
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    '0 30px 60px -15px rgb(0 0 0 / 0.3)',
    '0 35px 70px -18px rgb(0 0 0 / 0.35)',
    '0 8px 25px rgba(0,0,0,0.15)',
    '0 10px 30px rgba(0,0,0,0.18)',
    '0 12px 35px rgba(0,0,0,0.2)',
    '0 14px 40px rgba(0,0,0,0.22)',
    '0 16px 45px rgba(0,0,0,0.24)',
    '0 18px 50px rgba(0,0,0,0.26)',
    '0 20px 55px rgba(0,0,0,0.28)',
    '0 22px 60px rgba(0,0,0,0.3)',
    '0 24px 65px rgba(0,0,0,0.32)',
    '0 26px 70px rgba(0,0,0,0.34)',
    '0 28px 75px rgba(0,0,0,0.36)',
    '0 30px 80px rgba(0,0,0,0.38)',
    '0 32px 85px rgba(0,0,0,0.4)',
    '0 34px 90px rgba(0,0,0,0.42)',
    '0 36px 95px rgba(0,0,0,0.44)',
    '0 38px 100px rgba(0,0,0,0.46)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '10px 20px',
          transition: 'all 0.2s ease-in-out',
        },
        sizeLarge: {
          padding: '12px 24px',
          fontSize: '1rem',
        },
        sizeMedium: {
          padding: '8px 16px',
          fontSize: '0.875rem',
        },
        sizeSmall: {
          padding: '6px 12px',
          fontSize: '0.8125rem',
        },
        contained: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 8,
        },
        sizeSmall: {
          fontSize: '0.75rem',
          height: 24,
        },
        sizeMedium: {
          fontSize: '0.8125rem',
          height: 32,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.2s ease-in-out',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0F766E',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
        input: {
          '&::placeholder': {
            color: '#9CA3AF',
            opacity: 1,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E5E7EB',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        rounded: {
          borderRadius: 12,
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontSize: '0.875rem',
        },
        standardInfo: {
          backgroundColor: '#EFF6FF',
          color: '#1E40AF',
        },
        standardSuccess: {
          backgroundColor: '#F0FDF4',
          color: '#166534',
        },
        standardWarning: {
          backgroundColor: '#FFFBEB',
          color: '#92400E',
        },
        standardError: {
          backgroundColor: '#FEF2F2',
          color: '#991B1B',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 8,
        },
        bar: {
          borderRadius: 4,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(15, 118, 110, 0.08)',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#1F2937',
          fontSize: '0.75rem',
          borderRadius: 6,
          padding: '8px 12px',
        },
        arrow: {
          color: '#1F2937',
        },
      },
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Apply responsive font sizes
export const theme = responsiveFontSizes(baseTheme, {
  breakpoints: ['sm', 'md', 'lg'],
  factor: 3,
});
