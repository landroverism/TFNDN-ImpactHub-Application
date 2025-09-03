import { Card, CardProps, useTheme } from '@mui/material';
import { Status } from './StatusBadge';

interface AppCardProps extends CardProps {
  status?: Status;
}

export function AppCard({ status, sx, ...props }: AppCardProps) {
  const theme = useTheme();

  const statusStyles = status
    ? {
        borderWidth: '2px',
        borderColor: theme.palette.status[status],
      }
    : {};

  return (
    <Card
      sx={{
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows[8],
        },
        ...statusStyles,
        ...sx,
      }}
      {...props}
    />
  );
}
