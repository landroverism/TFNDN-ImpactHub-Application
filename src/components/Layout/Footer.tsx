import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              TFDN Impact Hub
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Transforming lives through education, career development, and social innovation across Africa.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: 'white' }} aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'white' }} aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'white' }} aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ color: 'white' }} aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Programs
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/pillars/education" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none' }}>
                Education
              </Link>
              <Link href="/pillars/career" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none' }}>
                Career Development
              </Link>
              <Link href="/pillars/social" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none' }}>
                Social Innovation
              </Link>
              <Link href="/pillars/research" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none' }}>
                Research & AI
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/research" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none' }}>
                Research Reports
              </Link>
              <Link href="/ai-career" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none' }}>
                Career Assessment
              </Link>
              <Link href="/framework" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none' }}>
                Strategic Framework
              </Link>
              <Link href="/partners" color="inherit" sx={{ opacity: 0.9, textDecoration: 'none' }}>
                Partners
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
              Email: info@tfdn.org
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
              Phone: +254 700 000 000
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Nairobi, Kenya
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 Taji Fanisi Development Network. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
