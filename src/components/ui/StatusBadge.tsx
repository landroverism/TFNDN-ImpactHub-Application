import { Chip, useTheme } from '@mui/material';

export type Status = 'pending' | 'review' | 'resolved' | 'rejected';

const statusMap: Record<Status, { label: string }> = {
  pending: { label: 'PENDING' },
  review: { label: 'IN REVIEW' },
  resolved: { label: 'RESOLVED' },
  rejected: { label: 'REJECTED' },
};

export function StatusBadge({ status }: { status: Status }) {
  const theme = useTheme();
  const { label } = statusMap[status];
  const color = theme.palette.status[status];

  return (
    <Chip
      label={label}
      sx={{
        bgcolor: `${color}1A`, // Hex with alpha
        color: color,
        fontWeight: 600,
        borderRadius: '999px',
      }}
    />
  );
}
