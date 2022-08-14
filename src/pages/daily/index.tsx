import React from 'react';

import MainLayout from 'src/components/MainLayout';
import BackButton from 'src/components/BackButton';
import Hero from 'src/pages/daily/components/Hero';
import Cards from 'src/pages/daily/components/Cards';
import styles from './index.module.scss';

const index = () => {
  return (
    <MainLayout>
      <section className={styles.container}>
        <BackButton />
        <div className={styles.mainHeader}>
          <span>Cashback</span>
        </div>
        <Hero />
        <Cards />
      </section>
    </MainLayout>
  );
};

export default index;
