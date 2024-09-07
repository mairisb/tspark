import { useSnackbar, VariantType } from 'notistack';

export const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();

  const notification = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return {
    info: (message: string) => notification(message, 'info'),
    success: (message: string) => notification(message, 'success'),
    warning: (message: string) => notification(message, 'warning'),
    error: (message: string) => notification(message, 'error'),
  };
};
