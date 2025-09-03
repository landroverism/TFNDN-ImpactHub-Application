import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#EEEEEE', paper: '#FFFFFF' },
    primary: { main: '#FFCE02', contrastText: '#000000' },
    secondary: { main: '#EDEFF6', contrastText: '#000000' },
    error: { main: '#E63946' },
    success: { main: '#06D6A0' },
    text: { primary: '#000000', secondary: '#5f6368' },
    status: { pending: '#F9D951', review: '#3B82F6', resolved: '#06D6A0', rejected: '#E63946' }
  },
  typography: {
    fontFamily: ['Inter','-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'].join(','),
    h1: { fontWeight: 800 }, h2: { fontWeight: 700 }, h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => `
        body{
          background-color: ${theme.palette.background.default};
        }
        ::-webkit-scrollbar{width:10px;height:10px;}
        ::-webkit-scrollbar-thumb{background:${alpha(theme.palette.primary.main,0.4)};border-radius:8px;}
      `
    },
    MuiAppBar: { styleOverrides: { root: { backgroundColor: alpha('#FFFFFF', 0.8), backdropFilter: 'saturate(180%) blur(8px)', color: '#000' } } },
    MuiButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: { transition: 'all 200ms ease', transform: 'translateZ(0)', willChange: 'transform, background', '&:active': { transform: 'scale(0.98)' } },
        containedPrimary: {
          background: '#FFCE02',
          '&:hover': { background: '#F9D951', boxShadow: `0 6px 20px ${alpha('#FFCE02',0.35)}` }
        },
        outlined: { borderColor: alpha('#000000',0.25), color: '#000000', '&:hover': { backgroundColor: alpha('#FFCE02',0.15), borderColor: alpha('#FFCE02',0.7) } },
        containedSuccess: {
          borderRadius: '999px',
          background: 'linear-gradient(135deg, #06D6A0 0%, #059669 100%)',
          color: '#FFFFFF',
          '&:hover': { background: 'linear-gradient(135deg, #34d399 0%, #06D6A0 100%)', boxShadow: `0 6px 20px ${alpha('#06D6A0',0.35)}` }
        }
      }
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none', backgroundColor: '#FFFFFF' } }, defaultProps: { elevation: 0 } },
    MuiCard: { styleOverrides: { root: { background: '#FFFFFF', border: `1px solid ${alpha('#000000', 0.1)}` } } },
    MuiTextField: { styleOverrides: { root: { '& .MuiOutlinedInput-root': { backgroundColor: '#FFFFFF', '& fieldset': { borderColor: alpha('#000000',0.2) }, '&:hover fieldset': { borderColor: alpha('#000000',0.4) }, '&.Mui-focused fieldset': { borderColor: '#FFCE02' } } } } },
    MuiTableRow: { styleOverrides: { root: { transition: 'background 150ms ease', '&:hover': { backgroundColor: alpha('#FFCE02',0.12) } } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } }
  }
});

export default theme;
