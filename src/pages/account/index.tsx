import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Navigation from 'src/pages/account/components/Navigation';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/account/index.module.scss';

const Account: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <button
          type="button"
          className={styles.backButton}
          onClick={() => router.back()}
        >{`< Back`}</button>
        <p className={styles.mainLabel}>Account</p>
        <Navigation />
      </section>
    </MainLayout>
  );
};

export default Account;
