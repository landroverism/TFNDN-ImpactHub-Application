import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { ConvexAuthProvider } from '@convex-dev/auth/react';
import { ConvexReactClient } from 'convex/react';
import { Toaster } from 'sonner';

import { theme } from './lib/theme';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { FrameworkPage } from './pages/FrameworkPage';
import { AICareerPage } from './pages/AICareerPage';
import { ResearchPage } from './pages/ResearchPage';
import { PillarDetailPage } from './pages/PillarDetailPage';
import { PartnersPage } from './pages/PartnersPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

export default function App() {
  return (
    <ConvexAuthProvider client={convex}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/framework" element={<FrameworkPage />} />
                <Route path="/ai-career" element={<AICareerPage />} />
                <Route path="/research" element={<ResearchPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/get-involved" element={<GetInvolvedPage />} />
                <Route path="/pillars/:id" element={<PillarDetailPage />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
        <Toaster />
      </ThemeProvider>
    </ConvexAuthProvider>
  );
}
