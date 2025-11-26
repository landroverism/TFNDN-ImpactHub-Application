/**
 * Application-wide constants
 */

// Brand Colors (matching MUI theme) - Navy Blue, Red, Green, White
export const COLORS = {
  primary: {
    main: '#1e3a8a', // Navy Blue
    light: '#3b82f6',
    dark: '#1e40af',
  },
  secondary: {
    main: '#dc2626', // Red
    light: '#ef4444',
    dark: '#b91c1c',
  },
  success: {
    main: '#16a34a', // Green
    light: '#22c55e',
    dark: '#15803d',
  },
  info: {
    main: '#1e3a8a', // Navy Blue
    light: '#3b82f6',
    dark: '#1e40af',
  },
} as const;

// Pillar Colors - Navy Blue, Red, Green, and variations
export const PILLAR_COLORS = {
  education: '#1e3a8a', // Navy Blue
  career: '#dc2626', // Red
  social: '#16a34a', // Green
  research: '#3b82f6', // Light Blue
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  counter: 2000,
} as const;

// Breakpoints (matching MUI)
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Framework', path: '/framework' },
  { label: 'AI Career Demo', path: '/ai-career' },
  { label: 'Research', path: '/research' },
  { label: 'Partners', path: '/partners' },
  { label: 'Get Involved', path: '/get-involved' },
] as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/tfdn',
  twitter: 'https://twitter.com/tfdn',
  linkedin: 'https://linkedin.com/company/tfdn',
  instagram: 'https://instagram.com/tfdn',
} as const;

// Contact Information
export const CONTACT_INFO = {
  email: 'info@tfdn.org',
  phone: '+254 700 000 000',
  location: 'Nairobi, Kenya',
} as const;

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  timeout: 10000,
} as const;

// Feature Flags
export const FEATURES = {
  enableAnalytics: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  enableNewsletter: true,
  enableDarkMode: false, // Future feature
} as const;

// Form Validation Rules
export const VALIDATION = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  phone: {
    pattern: /^\+?[\d\s-()]+$/,
    message: 'Please enter a valid phone number',
  },
  minLength: {
    name: 2,
    message: 5,
    password: 8,
  },
} as const;

// Application Meta
export const APP_META = {
  name: 'Taji Fanisi Development Network',
  shortName: 'TFDN',
  description: 'Transforming Africa Through Innovation & Impact',
  version: '1.0.0',
  year: new Date().getFullYear(),
} as const;

// File Upload Limits
export const UPLOAD_LIMITS = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
} as const;

// Pagination Defaults
export const PAGINATION = {
  defaultPageSize: 10,
  pageSizeOptions: [10, 20, 50, 100],
} as const;

// Toast Notification Durations (in milliseconds)
export const TOAST_DURATION = {
  success: 3000,
  error: 5000,
  info: 4000,
  warning: 4000,
} as const;

