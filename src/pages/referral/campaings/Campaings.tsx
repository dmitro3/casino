import React from 'react';
import MainLayout from 'src/components/MainLayout';
import Navigation from 'src/pages/referral/components/Navigation';
import styles from 'src/pages/referral/campaings/Campaings.module.scss';
import Table from 'src/components/Table';
import {
  campaingsData as data,
  campaingsDataColumns as columns,
} from 'src/utils/mockData';
import Dropdown from 'src/components/Dropdown';

const Campaings = () => {
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
        <div className={styles.tableContainer}>
          <div className={styles.tableContainerHeader}>
            <Dropdown
              buttonComponent={<div>Name</div>}
              dropdownComponent={
                <ul>
                  <li>Dropdown</li>
                  <li>Amount</li>
                </ul>
              }
              customButtonStyles={styles.tableContainerHeaderDateButton}
              customDropdownStyles={styles.tableContainerHeaderDropdown}
            />
            <Dropdown
              buttonComponent={<div>10</div>}
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
          <Table customStyles={styles.table} columns={columns} data={data} />
        </div>
      </section>
    </MainLayout>
  );
};

export default Campaings;
