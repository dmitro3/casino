import type { NextPage } from 'next';
import React from 'react';
import Navigation from 'src/pages/account/components/Navigation';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/account/transactions/Transactions.module.scss';
import Table from 'src/pages/account/sessions/components/Table';
import Dropdown from 'src/components/Dropdown';

const columns = [`Дата`, `IP`, `Browser`];

const data = [
  {
    id: 0,
    Дата: `26.07.22, 22:28:06`,
    IP: `26.07847439572-39245718343io5745486`,
    Browser: <div>Chrome/5.0 (Macintosh; Intel Mac OS X 10_15_8) Apple...</div>,
  },
];

const Sessions: NextPage = () => {
  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <span className={styles.backButton}>{`< Back`}</span>
        <p className={styles.mainLabel}>Account</p>
        <Navigation />
        <div className={styles.tableContainer}>
          <Table columns={columns} data={data} />
        </div>
      </section>
    </MainLayout>
  );
};

export default Sessions;
