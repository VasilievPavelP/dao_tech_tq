import { Container, Box, Stack } from '@mui/material';
import { NavBar } from 'app/components';
import React from 'react';
import { BrandReactNative } from 'tabler-icons-react';
// import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout:React.FC<MainLayoutProps> = ({ children }) => (
  <Box component="main">
    <Box component="header">
      <Container>
        <Stack direction="row" spacing={4} alignItems="center" py={1}>
          <BrandReactNative size={40} className="text-primary me-3" />
          <NavBar />
        </Stack>
      </Container>
    </Box>
    <Container className="container mt-2">
      {children}
    </Container>
  </Box>
);

export default MainLayout;
