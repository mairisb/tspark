import { createTheme } from '@mui/material';

export const appTheme = createTheme({});

export const mobileTheme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'medium',
      },
    },
  },
});

export const desktopTheme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});
