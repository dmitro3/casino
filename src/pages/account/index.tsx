import type { NextPage } from 'next';
import React from 'react';
import Navigation from 'src/pages/account/components/Navigation';
import ProfileInfo from 'src/pages/account/components/ProfileInfo';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/account/index.module.scss';

const Account: NextPage = () => {
  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <span className={styles.backButton}>{`< Back`}</span>
        <p className={styles.mainLabel}>Account</p>
        <Navigation />
        <ProfileInfo />
      </section>
    </MainLayout>
  );
};

export default Account;
