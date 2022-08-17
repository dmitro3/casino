import React from 'react';

import MainLayout from 'src/components/MainLayout';
import BackButton from 'src/components/BackButton';
import Hero from 'src/pages/fairness/components/Hero';
import MainContent from 'src/pages/fairness/components/MainContent';
import styles from './index.module.scss';

const index = () => {
  return (
    <MainLayout>
      <section className={styles.container}>
        <BackButton />
        <div className={styles.mainHeader}>
          <span>Fairness</span>
        </div>
        <Hero />
        <MainContent />
      </section>
    </MainLayout>
  );
};

export default index;
