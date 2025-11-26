import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Avatar,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

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
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar 
            src="/images/zoomed-rg.png" 
            alt="Taji Fanisi Development Network Logo" 
            sx={{ width: 70, height: 70 }}
          />
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#1e3a8a',
              fontWeight: 'bold',
              fontFamily: '"Dancing Script", cursive',
              fontSize: '2rem',
              textShadow: '2px 2px 4px rgba(30, 58, 138, 0.1)',
              letterSpacing: '1px',
            }}
          >
            TFDN
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} component={Link} to={item.path} onClick={handleDrawerToggle}>
            <ListItemText 
              primary={item.label}
              sx={{
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                fontWeight: location.pathname === item.path ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: '#ffffff',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          color: '#1e3a8a',
          borderBottom: '3px solid',
          borderImage: 'linear-gradient(90deg, #1e3a8a, #dc2626, #16a34a) 1',
        }}
      >
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between',
            maxWidth: '100%',
            width: '100%',
            px: { xs: 2, md: 4 },
            py: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar 
              src="/images/zoomed-rg.png" 
              alt="Taji Fanisi Development Network Logo" 
              sx={{ width: 80, height: 80 }}
            />
            <Typography 
              variant="h6" 
              component={Link} 
              to="/"
              sx={{ 
                color: '#1e3a8a',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '2.5rem',
                fontFamily: '"Dancing Script", cursive',
                textShadow: '2px 2px 4px rgba(30, 58, 138, 0.1)',
                letterSpacing: '1px',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                  color: '#dc2626',
                  textShadow: '2px 2px 8px rgba(220, 38, 38, 0.3)',
                }
              }}
            >
              TFDN
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              sx={{ color: '#1e3a8a' }}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? '#dc2626' : '#1e3a8a',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    px: 2.5,
                    py: 1,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 2,
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '3px',
                      background: 'linear-gradient(90deg, #1e3a8a, #dc2626, #16a34a)',
                      transform: location.pathname === item.path ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(220, 38, 38, 0.1)',
                      color: '#dc2626',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 15px rgba(220, 38, 38, 0.2)',
                      '&::before': {
                        transform: 'scaleX(1)',
                      },
                    },
                    '&:active': {
                      transform: 'translateY(0)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
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
