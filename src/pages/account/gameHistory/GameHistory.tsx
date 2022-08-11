import type { NextPage } from 'next';
import React from 'react';
import Navigation from 'src/pages/account/components/Navigation';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/account/transactions/Transactions.module.scss';
import Table from 'src/components/Table';
import {
  gameHistoryData as data,
  gameHistoryColumns as columns,
} from 'src/utils/mockData';
import Dropdown from 'src/components/Dropdown';

const GameHistory: NextPage = () => {
  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <span className={styles.backButton}>{`< Back`}</span>
        <p className={styles.mainLabel}>Account</p>
        <Navigation />
        <div className={styles.tableContainer}>
          <div
            className={styles.tableContainerHeader}
            style={{ justifyContent: `flex-start` }}
          >
            <Dropdown
              buttonComponent={<div>In-house</div>}
              dropdownComponent={
                <ul>
                  <li>Dropdown</li>
                  <li>Amount</li>
                </ul>
              }
              customButtonStyles={styles.tableContainerHeaderButton}
              customDropdownStyles={styles.tableContainerHeaderDropdown}
            />
            <Dropdown
              buttonComponent={<div>Deposit</div>}
              dropdownComponent={
                <ul>
                  <li>Dropdown</li>
                  <li>Amount</li>
                </ul>
              }
              customButtonStyles={styles.tableContainerHeaderButton}
              customDropdownStyles={styles.tableContainerHeaderDropdown}
            />
          </div>
          <Table columns={columns} data={data} />
        </div>
      </section>
    </MainLayout>
  );
};

export default GameHistory;
