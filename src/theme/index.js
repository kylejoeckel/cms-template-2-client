import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Gold
    },
    secondary: {
      main: '#000000', // Black
    },
    text: {
      primary: '#000000', // Black
      secondary: '#FFFFFF', // White
    },
    background: {
      default: '#FFFFFF', // White
      paper: '#FFECB3', // Light Gold
      dark: '#000000', // Black
    },
    action: {
      active: '#C49A00', // Dark Gold
    },
    grey: {
      100: '#CCCCCC', // Light Gray
      800: '#333333', // Dark Gray
    },
    warning: {
      main: '#FF8A65', // Warning color
    },
    success: {
      main: '#4CAF50', // Success color
    },
    info: {
      main: '#2196F3', // Info color
    },
    error: {
      main: '#F44336', // Error color
    },
  },
});

export default customTheme;
