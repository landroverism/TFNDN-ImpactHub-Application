import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton, Avatar } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        py: 6,
        mt: 'auto',
        borderTop: '3px solid',
        borderImage: 'linear-gradient(90deg, #dc2626, #fcd34d, #16a34a) 1',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar 
                src="/images/zoomed-rg.png" 
                alt="Taji Fanisi Development Network Logo" 
                sx={{ width: 80, height: 80 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Taji Fanisi Development Network
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Transforming lives through education, career development, and social innovation across Africa.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {[
                { icon: <Facebook />, label: 'Facebook', href: 'https://facebook.com' },
                { icon: <Twitter />, label: 'Twitter', href: 'https://twitter.com' },
                { icon: <LinkedIn />, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: <Instagram />, label: 'Instagram', href: 'https://instagram.com' },
              ].map((social) => (
                <IconButton 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  sx={{ 
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#fcd34d',
                      color: '#1e3a8a',
                      transform: 'translateY(-5px) rotate(360deg)',
                      boxShadow: '0 5px 15px rgba(252, 211, 77, 0.4)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2.5 }}>
              Programs
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { label: 'Education', href: '/pillars/education' },
                { label: 'Career Development', href: '/pillars/career' },
                { label: 'Social Innovation', href: '/pillars/social' },
                { label: 'Research & AI', href: '/pillars/research' },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  sx={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    position: 'relative',
                    display: 'inline-block',
                    width: 'fit-content',
                    py: 0.5,
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #fcd34d, #16a34a)',
                      transition: 'width 0.3s ease',
                    },
                    '&::after': {
                      content: '"→"',
                      position: 'absolute',
                      left: '-20px',
                      opacity: 0,
                      transition: 'all 0.3s ease',
                      color: '#fcd34d',
                    },
                    '&:hover': {
                      color: '#fcd34d',
                      paddingLeft: '20px',
                      '&::before': {
                        width: '100%',
                      },
                      '&::after': {
                        left: '0',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2.5 }}>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { label: 'Research Reports', href: '/research' },
                { label: 'Career Assessment', href: '/ai-career' },
                { label: 'Strategic Framework', href: '/framework' },
                { label: 'Partners', href: '/partners' },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  sx={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    position: 'relative',
                    display: 'inline-block',
                    width: 'fit-content',
                    py: 0.5,
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #fcd34d, #16a34a)',
                      transition: 'width 0.3s ease',
                    },
                    '&::after': {
                      content: '"→"',
                      position: 'absolute',
                      left: '-20px',
                      opacity: 0,
                      transition: 'all 0.3s ease',
                      color: '#fcd34d',
                    },
                    '&:hover': {
                      color: '#fcd34d',
                      paddingLeft: '20px',
                      '&::before': {
                        width: '100%',
                      },
                      '&::after': {
                        left: '0',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2.5 }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.9, 
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#fcd34d',
                    opacity: 1,
                    transform: 'translateX(5px)',
                  }
                }}
              >
                📧 info@tfdn.org
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.9,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#fcd34d',
                    opacity: 1,
                    transform: 'translateX(5px)',
                  }
                }}
              >
                📞 +254 700 000 000
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  opacity: 0.9,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#fcd34d',
                    opacity: 1,
                    transform: 'translateX(5px)',
                  }
                }}
              >
                📍 Nairobi, Kenya
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
            <Avatar 
              src="/images/zoomed-rg.png" 
              alt="Taji Fanisi Development Network Logo" 
              sx={{ width: 50, height: 50 }}
            />
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © 2024 Taji Fanisi Development Network. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
