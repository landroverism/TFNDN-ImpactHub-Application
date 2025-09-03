import { Button, ButtonProps } from '@mui/material';
import React from 'react';

export type AppButtonProps = {
  variant?: 'primary' | 'secondary' | 'success' | 'destructive';
} & Omit<ButtonProps, 'variant'>;

export const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ variant: customVariant = 'primary', ...props }, ref) => {
    // The `variant` prop from AppButtonProps is destructured and renamed to `customVariant`
    // to avoid passing it down to the MUI Button, which would cause a type error.
    // The `...props` object now contains all other valid ButtonProps.

    switch (customVariant) {
      case 'primary':
        return <Button ref={ref} variant="contained" color="primary" {...props} />;
      case 'secondary':
        return <Button ref={ref} variant="outlined" color="primary" {...props} />;
      case 'success':
        return <Button ref={ref} variant="contained" color="success" {...props} />;
      case 'destructive':
        return <Button ref={ref} variant="contained" color="error" {...props} />;
      default:
        return <Button ref={ref} variant="contained" color="primary" {...props} />;
    }
  }
);

AppButton.displayName = 'AppButton';
