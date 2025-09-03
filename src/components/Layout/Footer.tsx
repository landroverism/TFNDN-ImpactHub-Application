import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton, Avatar } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const socialLinks = [
  { icon: <Facebook />, label: 'Facebook', href: '#' },
  { icon: <Twitter />, label: 'Twitter', href: '#' },
  { icon: <LinkedIn />, label: 'LinkedIn', href: '#' },
  { icon: <Instagram />, label: 'Instagram', href: '#' },
];

const footerSections = [
  {
    title: 'Programs',
    links: [
      { label: 'Education', href: '/pillars/education' },
      { label: 'Career Development', href: '/pillars/career' },
      { label: 'Social Innovation', href: '/pillars/social' },
      { label: 'Research & AI', href: '/pillars/research' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Research Reports', href: '/research' },
      { label: 'Career Assessment', href: '/ai-career' },
      { label: 'Strategic Framework', href: '/framework' },
      { label: 'Partners', href: '/partners' },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 8,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Avatar 
                src="/images/zoomed-logo.png" 
                alt="Taji Fanisi Logo" 
                sx={{ width: 56, height: 56 }}
              />
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                Taji Fanisi Development Network
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
              Transforming lives through education, career development, and social innovation across Africa.
            </Typography>
            <Box>
              {socialLinks.map((social) => (
                <IconButton key={social.label} component="a" href={social.href} aria-label={social.label} sx={{ color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}>
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {footerSections.map((section) => (
            <Grid item xs={6} md={2.5} key={section.title}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {section.title}
              </Typography>
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.href}
                  variant="body2"
                  color="inherit"
                  sx={{ display: 'block', mb: 1, opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1 } }}
                >
                  {link.label}
                </Link>
              ))}
            </Grid>
          ))}

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>Email: info@tfdn.org</Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>Phone: +254 700 000 000</Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>Nairobi, Kenya</Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 6, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Taji Fanisi Development Network. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
