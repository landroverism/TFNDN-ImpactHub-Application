# Quick Start Guide: Using Enhanced Features

## 🚀 Getting Started

Your Material UI application has been enhanced with powerful new features. This guide shows you how to use them effectively.

---

## 📚 Table of Contents

1. [Using the Enhanced Theme](#1-using-the-enhanced-theme)
2. [Animation System](#2-animation-system)
3. [Custom Hooks](#3-custom-hooks)
4. [Loading States](#4-loading-states)
5. [Error Handling](#5-error-handling)
6. [Constants & Configuration](#6-constants--configuration)
7. [Best Practices](#7-best-practices)

---

## 1. Using the Enhanced Theme

### Access Theme Colors

```typescript
import { useTheme } from '@mui/material';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <Box sx={{
      color: theme.palette.primary.main,    // #0F766E
      backgroundColor: theme.palette.success.light, // #A3E635
    }}>
      Content
    </Box>
  );
}
```

### Typography Variants

```typescript
<Typography variant="h1">Main Heading</Typography>      {/* 48px → auto-responsive */}
<Typography variant="h5">Sub Heading</Typography>       {/* 20px */}
<Typography variant="body1">Paragraph text</Typography> {/* 16px */}
<Typography variant="body2">Small text</Typography>     {/* 14px */}
<Typography variant="caption">Tiny text</Typography>    {/* 12px */}
```

### Using Enhanced Shadows

```typescript
<Card sx={{ boxShadow: 3 }}>Standard elevation</Card>
<Card sx={{ boxShadow: 9 }}>High elevation</Card>
<Paper elevation={5}>Custom paper</Paper>
```

---

## 2. Animation System

### Page Transitions

```typescript
import { motion } from 'framer-motion';
import { pageTransition } from './lib/animations';

export const MyPage = () => {
  return (
    <motion.div variants={pageTransition}>
      <Container>
        {/* Page content */}
      </Container>
    </motion.div>
  );
};
```

### Card Hover Effects

```typescript
import { motion } from 'framer-motion';
import { cardHover } from './lib/animations';

export const MyCard = () => {
  return (
    <motion.div {...cardHover}>
      <Card>
        {/* Card content */}
      </Card>
    </motion.div>
  );
};
```

### Staggered List Animations

```typescript
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from './lib/animations';

export const MyList = ({ items }) => {
  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate">
      {items.map((item) => (
        <motion.div key={item.id} variants={staggerItem}>
          <Card>{item.title}</Card>
        </motion.div>
      ))}
    </motion.div>
  );
};
```

### Custom Delays

```typescript
import { getStaggerDelay, createPageTransition } from './lib/animations';

// Staggered delays for multiple items
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: getStaggerDelay(index) }} // 0.1s per item
  >
    {item}
  </motion.div>
))}

// Page transition with delay
<motion.div variants={createPageTransition(0.2)}>
  {/* Content appears after 0.2s */}
</motion.div>
```

---

## 3. Custom Hooks

### Responsive Design

```typescript
import { useResponsive } from './hooks';

export const MyComponent = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return (
    <Box>
      {isMobile && <MobileNav />}
      {isDesktop && <DesktopNav />}
      
      <Grid container spacing={isMobile ? 2 : 3}>
        {/* Grid content */}
      </Grid>
    </Box>
  );
};
```

### Specific Breakpoints

```typescript
import { useBreakpointUp, useBreakpointDown } from './hooks';

const isLarge = useBreakpointUp('lg');    // >= 1200px
const isSmall = useBreakpointDown('sm');  // < 600px
```

### Count-Up Animation

```typescript
import { useCountUp } from './hooks';

export const StatisticCard = ({ value }) => {
  const displayValue = useCountUp({
    start: 0,
    end: value,
    duration: 2000,
    delay: 500,      // Wait 500ms before starting
  });
  
  return (
    <Typography variant="h3">
      {displayValue.toLocaleString()}
    </Typography>
  );
};
```

### Scroll Position

```typescript
import { useScrollPosition, useScrollThreshold, useScrollDirection } from './hooks';

export const Header = () => {
  const { y } = useScrollPosition();
  const hasScrolled = useScrollThreshold(100);
  const direction = useScrollDirection();
  
  return (
    <AppBar 
      sx={{ 
        backgroundColor: hasScrolled ? 'white' : 'transparent',
        transform: direction === 'down' ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      {/* Header content */}
    </AppBar>
  );
};
```

---

## 4. Loading States

### Full Page Loading

```typescript
import { LoadingState } from './components/common/LoadingState';

export const MyPage = () => {
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return <LoadingState message="Loading data..." fullScreen />;
  }
  
  return <PageContent />;
};
```

### Skeleton Loaders

```typescript
import { PageSkeleton, CardSkeleton, StatCardSkeleton } from './components/common/LoadingState';

export const MyPage = () => {
  if (loading) {
    return <PageSkeleton />;
  }
  
  return <Content />;
};

// For card grids
{loading ? (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}><CardSkeleton /></Grid>
    <Grid item xs={12} md={6}><CardSkeleton /></Grid>
  </Grid>
) : (
  <CardGrid />
)}
```

### Loading Overlay

```typescript
import { LoadingOverlay } from './components/common/LoadingState';
import { AnimatePresence } from 'framer-motion';

export const MyComponent = () => {
  const [submitting, setSubmitting] = useState(false);
  
  return (
    <>
      <AnimatePresence>
        {submitting && <LoadingOverlay message="Saving..." />}
      </AnimatePresence>
      
      <Form onSubmit={handleSubmit} />
    </>
  );
};
```

### Inline Loader

```typescript
import { InlineLoader } from './components/common/LoadingState';

<Button disabled={loading}>
  Save Changes
  {loading && <InlineLoader size={20} />}
</Button>
```

---

## 5. Error Handling

### App-Level Error Boundary

```typescript
// Already implemented in App.tsx
import { ErrorBoundary } from './components/common/ErrorBoundary';

<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### Component-Level Errors

```typescript
import { ErrorDisplay } from './components/common/ErrorBoundary';

export const DataComponent = () => {
  const [error, setError] = useState(null);
  
  const retry = () => {
    setError(null);
    fetchData();
  };
  
  if (error) {
    return <ErrorDisplay message={error.message} onRetry={retry} />;
  }
  
  return <Data />;
};
```

### 404 Page

```typescript
// Already set up in App.tsx routes
import { NotFound } from './components/common/ErrorBoundary';

<Route path="*" element={<NotFound />} />
```

### Custom Error Boundary

```typescript
import { ErrorBoundary } from './components/common/ErrorBoundary';

<ErrorBoundary fallback={<MyCustomErrorUI />}>
  <RiskyComponent />
</ErrorBoundary>
```

---

## 6. Constants & Configuration

### Import and Use

```typescript
import { 
  COLORS, 
  PILLAR_COLORS, 
  ANIMATION_DURATION,
  NAV_ITEMS,
  APP_META 
} from './lib/constants';

// Use in components
<Box sx={{ color: COLORS.primary.main }}>

// Animation timing
transition={{ duration: ANIMATION_DURATION.normal / 1000 }}

// Pillar colors
<Box sx={{ borderColor: PILLAR_COLORS.education }}>

// Navigation
{NAV_ITEMS.map(item => (
  <Link to={item.path}>{item.label}</Link>
))}

// App info
<Typography>{APP_META.name}</Typography>
```

### Form Validation

```typescript
import { VALIDATION } from './lib/constants';

const validateEmail = (email: string) => {
  return VALIDATION.email.pattern.test(email) 
    ? '' 
    : VALIDATION.email.message;
};
```

---

## 7. Best Practices

### ✅ DO

```typescript
// ✅ Use theme colors
sx={{ color: 'primary.main' }}

// ✅ Use animation library
import { cardHover } from './lib/animations';

// ✅ Use custom hooks
const { isMobile } = useResponsive();

// ✅ Use constants
import { COLORS } from './lib/constants';

// ✅ Use loading skeletons
{loading ? <CardSkeleton /> : <Card />}

// ✅ Handle errors gracefully
<ErrorBoundary><Component /></ErrorBoundary>
```

### ❌ DON'T

```typescript
// ❌ Don't use hard-coded colors
sx={{ color: '#0F766E' }}  // Use theme or constants instead

// ❌ Don't repeat animation code
initial={{ opacity: 0, y: 20 }}  // Use animation variants

// ❌ Don't write custom media queries
@media (max-width: 768px)  // Use useResponsive() hook

// ❌ Don't use magic numbers
delay: 300  // Use ANIMATION_DURATION.normal

// ❌ Don't show blank screen while loading
{/* Empty */}  // Use LoadingState or Skeleton

// ❌ Don't let errors crash the app
<Component />  // Wrap in ErrorBoundary
```

---

## 🎯 Common Patterns

### Pattern 1: Responsive Card Grid

```typescript
import { useResponsive } from './hooks';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from './lib/animations';

export const CardGrid = ({ items }) => {
  const { isMobile } = useResponsive();
  
  return (
    <Grid container spacing={isMobile ? 2 : 3}>
      <motion.div variants={staggerContainer} initial="initial" animate="animate">
        {items.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <motion.div variants={staggerItem}>
              <Card>{item.title}</Card>
            </motion.div>
          </Grid>
        ))}
      </motion.div>
    </Grid>
  );
};
```

### Pattern 2: Animated Statistics

```typescript
import { useCountUp } from './hooks';
import { COLORS } from './lib/constants';

export const StatCard = ({ value, label, icon }) => {
  const count = useCountUp({ end: value, duration: 2000 });
  
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Box sx={{ color: COLORS.primary.main, mb: 2 }}>
          {icon}
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          {count.toLocaleString()}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};
```

### Pattern 3: Data Fetching with Loading & Error

```typescript
import { useState, useEffect } from 'react';
import { LoadingState, ErrorDisplay } from './components/common';

export const DataPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await api.getData();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  if (loading) return <LoadingState fullScreen />;
  if (error) return <ErrorDisplay onRetry={fetchData} />;
  
  return <DataDisplay data={data} />;
};
```

### Pattern 4: Sticky Header with Scroll

```typescript
import { useScrollThreshold } from './hooks';

export const Header = () => {
  const hasScrolled = useScrollThreshold(50);
  
  return (
    <AppBar 
      position="sticky"
      sx={{
        backgroundColor: hasScrolled ? 'white' : 'transparent',
        boxShadow: hasScrolled ? 3 : 0,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Header content */}
    </AppBar>
  );
};
```

---

## 🔧 Troubleshooting

### Issue: Animations not working

```typescript
// ✅ Make sure you import from framer-motion
import { motion } from 'framer-motion';

// ✅ Use motion components
<motion.div> not <div>

// ✅ Import animation variants correctly
import { pageTransition } from './lib/animations';
```

### Issue: Theme colors not applying

```typescript
// ✅ Use theme hook
import { useTheme } from '@mui/material';
const theme = useTheme();

// ✅ Or use sx prop with theme keys
sx={{ color: 'primary.main' }}  // Not '#0F766E'
```

### Issue: Hooks not working

```typescript
// ✅ Import from hooks folder
import { useResponsive } from './hooks';  // Not './hooks/useMediaQuery'

// ✅ Use inside React components only
function MyComponent() {  // Not outside
  const { isMobile } = useResponsive();
}
```

---

## 📖 Additional Resources

- **MUI Documentation:** https://mui.com/
- **Framer Motion:** https://www.framer.com/motion/
- **React Hooks:** https://react.dev/reference/react

---

## ✨ Quick Reference

### Imports Cheat Sheet

```typescript
// Theme
import { useTheme } from '@mui/material';

// Animations
import { pageTransition, cardHover, staggerContainer } from './lib/animations';

// Hooks
import { useResponsive, useCountUp, useScrollThreshold } from './hooks';

// Components
import { LoadingState, ErrorBoundary, NotFound } from './components/common';

// Constants
import { COLORS, PILLAR_COLORS, ANIMATION_DURATION } from './lib/constants';
```

---

**Happy Coding!** 🚀

If you need help with any of these features, refer to the detailed ENHANCEMENTS_SUMMARY.md document.

