import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { closeSnackbar, SnackbarProvider } from 'notistack';
import { FC, PropsWithChildren } from 'react';

export const NotificationProvider: FC<PropsWithChildren> = (props) => (
  <SnackbarProvider
    preventDuplicate={true}
    action={(snackbarId) => (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {
          closeSnackbar(snackbarId);
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    )}
  >
    {props.children}
  </SnackbarProvider>
);
