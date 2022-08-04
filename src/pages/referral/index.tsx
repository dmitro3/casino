import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Navigation from 'src/pages/referral/components/Navigation';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/referral/index.module.scss';

const Referral: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <button
          type="button"
          className={styles.backButton}
          onClick={() => router.back()}
        >{`< Back`}</button>
        <p className={styles.mainLabel}>Referral Program</p>
        <Navigation />
      </section>
    </MainLayout>
  );
};

export default Referral;
