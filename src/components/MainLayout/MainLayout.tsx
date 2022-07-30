import React, { FC } from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import styles from './MainLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
