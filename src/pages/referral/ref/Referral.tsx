import React from 'react';
import Dropdown from 'src/components/Dropdown';
import styles from 'src/pages/referral/ref/Referral.module.scss';
import Navigation from 'src/pages/referral/components/Navigation';
import MainLayout from 'src/components/MainLayout';
import Table from 'src/components/Table';
import {
  campaingsData as data,
  campaingsDataColumns as columns,
} from 'src/utils/mockData';

const Referral = () => {
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
            <div>
              <Dropdown
                buttonComponent={<div>07/07/2022-08/08/2022</div>}
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
                buttonComponent={<div>Name</div>}
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
            <Dropdown
              buttonComponent={<div>10</div>}
              dropdownComponent={
                <ul>
                  <li>Dropdown</li>
                  <li>Amount</li>
                </ul>
              }
              customButtonStyles={styles.tableContainerHeaderCountButton}
              customDropdownStyles={styles.tableContainerHeaderDropdown}
            />
          </div>
          <Table customStyles={styles.table} columns={columns} data={data} />
        </div>
      </section>
    </MainLayout>
  );
};

export default Referral;
