import { createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: amber[500],
      light: amber[300],
      dark: amber[700],
    },
    secondary: {
      main: '#e2e8f0',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
    divider: 'rgba(148,163,184,0.12)',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    overline: { letterSpacing: '0.15em', fontWeight: 500 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: {
          background: '#0f172a',
          scrollbarWidth: 'thin',
          scrollbarColor: `${amber[700]} #1e293b`,
        },
        '::-webkit-scrollbar': { width: '6px' },
        '::-webkit-scrollbar-track': { background: '#1e293b' },
        '::-webkit-scrollbar-thumb': {
          background: amber[700],
          borderRadius: '3px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontWeight: 500,
          fontSize: '0.75rem',
          letterSpacing: '0.02em',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(148,163,184,0.08)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'color 200ms ease, transform 200ms ease',
          '&:hover': { transform: 'translateY(-2px)' },
        },
      },
    },
  },
});

export default theme;
