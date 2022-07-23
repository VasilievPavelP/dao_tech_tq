import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages';

const AppRouter:React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<HomePage />} />
  </Routes>
);

export default AppRouter;
