import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNav from '../AppNav/AppNav'; // якщо навігація окремо
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <AppNav />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
