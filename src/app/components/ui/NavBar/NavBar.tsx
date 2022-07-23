import React from 'react';
import { NavLink } from 'react-router-dom';
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
    link: '#',
    label: 'Posts(in development)',
    disabled: true,
  },
];

const NavBar:React.FC = () => (
  <nav className="navbar navbar-expand-lg">
    <ul className="nav nav-pills gap-2">
      {NAVBAR_LINKS.map(({
        label, id, link, disabled,
      }) => (
        <li className="nav-item" key={id}>
          <NavLink
            to={link}
            className={({ isActive }) => [
              'nav-link',
              disabled && 'disabled',
              isActive && !disabled ? 'active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
