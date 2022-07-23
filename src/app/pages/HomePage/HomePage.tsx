import { useDocTitle } from 'app/hooks';
import React from 'react';

const HomePage: React.FC = () => {
  useDocTitle('Home');
  return (
    <h1 className="fw-bold font-monospace">Taskbar</h1>
  );
};

export default HomePage;
