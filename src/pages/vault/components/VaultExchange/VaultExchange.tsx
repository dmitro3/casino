import React from 'react';

import VaultSidebar from 'src/pages/vault/components/VaultSidebar';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import { BtcIcon, ExchangeIcon } from 'src/assets/svg';
import Dropdown from 'src/components/Dropdown';
import styles from './VaultExchange.module.scss';

const VaultExchange = () => {
  return (
    <div className={styles.sidebarContainer}>
      <aside>
        <VaultSidebar />
      </aside>
      <div className={styles.container}>
        <span>Exchange</span>
        <div className={styles.exchange}>
          <div className={styles.exchangeCurrencies}>
            <Dropdown
              buttonComponent={
                <div className={styles.exchangeCurrenciesItem}>
                  <BtcIcon />
                  <span>BTC</span>
                </div>
              }
              dropdownComponent={<div>Dropdown</div>}
              customButtonStyles={styles.exchangeCurrenciesButton}
            />
            <span>0</span>
          </div>
          <div>
            <ExchangeIcon />
          </div>
          <div className={styles.exchangeCurrencies}>
            <Dropdown
              buttonComponent={
                <div className={styles.exchangeCurrenciesItem}>
                  <BtcIcon />
                  <span>LTC</span>
                </div>
              }
              dropdownComponent={<div>Dropdown</div>}
              customButtonStyles={styles.exchangeCurrenciesButton}
            />
            <span>0</span>
          </div>
        </div>
        <div className={styles.currentRate}>
          <div>
            <p>
              CURRENCY RATE <span>1</span> BTC = <span>393.487003</span> LTC
            </p>
          </div>
          <div className={styles.currentRateProgress}>
            <div />
          </div>
        </div>
        <div className={styles.input}>
          <div className={`${styles.inputItem} ${styles.inputItemClicked}`}>
            <span>AMOUNT TO CHANGE</span>
            <Input
              placeholder="0.00000000"
              icon={<BtcIcon />}
              customStyles={`${styles.inputItemField} ${styles.inputItemFieldClicked}`}
              customContainerStyles={styles.inputContainer}
            />
            <p>MIN - 0.00041655 BTC</p>
          </div>
          <div className={styles.inputItem}>
            <span>AMOUNT TO GET</span>
            <Input
              placeholder="0.00000000"
              icon={<BtcIcon />}
              customStyles={styles.inputItemField}
            />
          </div>
        </div>
        <Button label="Exchange" customStyles={styles.button} />
      </div>
    </div>
  );
};

export default VaultExchange;
