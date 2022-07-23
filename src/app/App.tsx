import React from 'react';
import { AppRouter } from './router';
import { MainLayout } from './layouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = (): React.ReactElement => (
  <MainLayout>
    <AppRouter />
  </MainLayout>
);

export default App;
