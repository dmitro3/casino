import type { NextPage } from 'next';
import React from 'react';
import Navigation from 'src/pages/referral/components/Navigation';
import MainLayout from 'src/components/MainLayout';
import BackButton from 'src/components/BackButton';
import styles from 'src/pages/referral/index.module.scss';

const Referral: NextPage = () => {
  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <BackButton />
        <p className={styles.mainLabel}>Referral Program</p>
        <Navigation />
      </section>
    </MainLayout>
  );
};

export default Referral;
