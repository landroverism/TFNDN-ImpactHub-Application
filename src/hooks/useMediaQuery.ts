import { useTheme } from '@mui/material/styles';
import { useMediaQuery as useMuiMediaQuery } from '@mui/material';
import { Breakpoint } from '@mui/material/styles';

/**
 * Custom hook for responsive design with Material-UI breakpoints
 */
export const useResponsive = () => {
  const theme = useTheme();

  return {
    isMobile: useMuiMediaQuery(theme.breakpoints.down('sm')),
    isTablet: useMuiMediaQuery(theme.breakpoints.between('sm', 'md')),
    isDesktop: useMuiMediaQuery(theme.breakpoints.up('md')),
    isLargeDesktop: useMuiMediaQuery(theme.breakpoints.up('lg')),
    isXLarge: useMuiMediaQuery(theme.breakpoints.up('xl')),
  };
};

/**
 * Hook to check if current screen is above a breakpoint
 */
export const useBreakpointUp = (breakpoint: Breakpoint) => {
  const theme = useTheme();
  return useMuiMediaQuery(theme.breakpoints.up(breakpoint));
};

/**
 * Hook to check if current screen is below a breakpoint
 */
export const useBreakpointDown = (breakpoint: Breakpoint) => {
  const theme = useTheme();
  return useMuiMediaQuery(theme.breakpoints.down(breakpoint));
};

/**
 * Hook to get current breakpoint name
 */
export const useCurrentBreakpoint = (): Breakpoint => {
  const theme = useTheme();
  const isXl = useMuiMediaQuery(theme.breakpoints.only('xl'));
  const isLg = useMuiMediaQuery(theme.breakpoints.only('lg'));
  const isMd = useMuiMediaQuery(theme.breakpoints.only('md'));
  const isSm = useMuiMediaQuery(theme.breakpoints.only('sm'));

  if (isXl) return 'xl';
  if (isLg) return 'lg';
  if (isMd) return 'md';
  if (isSm) return 'sm';
  return 'xs';
};

