import { Button } from '@mui/material';
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

interface NavLinkProps {
  linkData: {id: number, link: string, disabled: boolean, label: string }
}

const NavLink:React.FC<NavLinkProps> = ({ linkData }) => {
  const { label, link, disabled } = linkData;
  const resolved = useResolvedPath(link);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      style={{ textDecoration: 'none' }}
      to={disabled ? '#' : link}
    >
      <Button
        disabled={disabled}
        variant={match && !disabled ? 'contained' : 'text'}
      >
        {label}
      </Button>
    </Link>
  );
};

export default NavLink;
