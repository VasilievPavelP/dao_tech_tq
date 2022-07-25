import { Stack, Box } from '@mui/material';
import { NavLink } from 'app/components/';
import React from 'react';
// import styles from './NavBar.module.scss';

const NAVBAR_LINKS = [
  {
    id: 0,
    link: '/',
    label: 'Tasks',
    disabled: false,
  },
  {
    id: 1,
    link: '',
    label: 'Posts(in development)',
    disabled: true,
  },
];

const NavBar:React.FC = () => (
  <Box component="nav">
    <Stack direction="row" spacing={2}>
      {NAVBAR_LINKS.map((link) => (
        <NavLink key={link.id} linkData={link} />
      ))}
    </Stack>
  </Box>
);

export default NavBar;
