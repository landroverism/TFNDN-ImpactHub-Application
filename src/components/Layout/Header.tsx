import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Avatar,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { Authenticated } from 'convex/react';
import { SignOutButton } from '../../SignOutButton';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Framework', path: '/framework' },
  { label: 'AI Career Demo', path: '/ai-career' },
  { label: 'Research', path: '/research' },
  { label: 'Partners', path: '/partners' },
  { label: 'Get Involved', path: '/get-involved' },
];

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar src="/images/zoomed-logo.png" alt="Taji Fanisi Logo" />
        <Typography variant="h6" sx={{ color: 'primary.main' }}>
          TFDN
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
        <Box sx={{ p: 2 }}>
          <Authenticated>
            <SignOutButton />
          </Authenticated>
        </Box>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{ 
          backgroundColor: 'background.paper',
          borderBottom: `1px solid ${theme.palette.divider}`
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            component={Link}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none' }}
          >
            <Avatar src="/images/zoomed-logo.png" alt="Taji Fanisi Logo" sx={{ width: 48, height: 48 }} />
            <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              TFDN
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  variant={location.pathname === item.path ? 'contained' : 'text'}
                  color={location.pathname === item.path ? 'secondary' : 'primary'}
                  disableElevation
                >
                  {item.label}
                </Button>
              ))}
              <Authenticated>
                <SignOutButton />
              </Authenticated>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
