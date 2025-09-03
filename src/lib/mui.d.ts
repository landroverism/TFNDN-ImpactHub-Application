import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    status: {
      pending: string;
      review: string;
      resolved: string;
      rejected: string;
    };
  }
  interface PaletteOptions {
    status?: {
      pending: string;
      review: string;
      resolved: string;
      rejected: string;
    };
  }
}
