import React from 'react';

import { UsdIcon, BtcIcon, SmallSettingsIcon } from 'src/assets/svg';
import depositCurrencyData from 'src/utils/depositCurrencyData';
import styles from './VaultSidebar.module.scss';

const VaultSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <span>TOTAL BALANCE</span>
        <div className={styles.sidebarHeaderContainer}>
          <div className={styles.sidebarHeaderContainerCurrency}>
            <UsdIcon />
            <span>0.00</span>
          </div>
          <div className={styles.sidebarHeaderContainerCurrency}>
            <BtcIcon />
            <p>0.0000000000</p>
          </div>
        </div>
      </div>
      <div>
        <span>ALL CURRENCIES</span>
        <div className={styles.sidebarContent}>
          {depositCurrencyData.map((currency) => (
            <div className={styles.sidebarContentItem} key={currency.id}>
              <div>
                <currency.icon />
              </div>
              <span>{currency.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.sidebarContentSettings}>
          <span>Manage Currencies</span>
          <SmallSettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default VaultSidebar;
