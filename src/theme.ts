import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      paper: '#ced4d4',
      default: '#ccd5da',
    },
    text: {
      primary: '#1a4158',
      secondary: '#b2b9c0',
      disabled: '#b2b9c0',
    },
    primary: {
      main: '#FF0049',
    },
    secondary: {
      main: '#092b45',
      light: '#788f9c',
    },
    error: {
      main: '#f48266',
    },
    success: {
      main: '#57d84c',
    },
    info: {
      main: '#f78b50',
    },
    divider: '#40c3df',
  },
  typography: {
    fontFamily: 'Quicksand',
    fontSize: 12,
    h1: {
      fontWeight: 700,
      fontSize: 25,
      '@media (max-width:600px)': {
        fontSize: 20,
      },
    },
    h2: {
      fontWeight: 400,
      fontSize: 25,
      '@media (max-width:600px)': {
        fontSize: 20,
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: 20,
      '@media (max-width:600px)': {
        fontSize: 16,
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: 16,
      '@media (max-width:600px)': {
        fontSize: 14,
      },
    },
    h5: {
      fontWeight: 400,
      fontSize: 12,
      '@media (max-width:600px)': {
        fontSize: 10,
      },
    },
    h6: {
      fontWeight: 300,
      fontSize: 10,
      '@media (max-width:600px)': {
        fontSize: 9,
      },
    },
  },
});

export default theme;
