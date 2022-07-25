import React from 'react';
import { AppRouter } from './router';
import { MainLayout } from './layouts';

const App = (): React.ReactElement => (
  <MainLayout>
    <AppRouter />
  </MainLayout>
);

export default App;
