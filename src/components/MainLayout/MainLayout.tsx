import React, { FC } from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import styles from './MainLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.root}>{children} </div>
      <Footer />
    </>
  );
};

export default MainLayout;
