import { NavBar } from 'app/components';
import React from 'react';
import { BrandReactNative } from 'tabler-icons-react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout:React.FC<MainLayoutProps> = ({ children }) => (
  <main>
    <header className={styles.Header}>
      <div className="container d-flex align-items-center">
        <BrandReactNative size={40} className="text-primary me-3" />
        <NavBar />
      </div>
    </header>
    <div className="container mt-2">
      {children}
    </div>
  </main>
);

export default MainLayout;
