import React from 'react';

import { EthToken } from 'src/assets/svg';
import styles from './NetworkDropdown.module.scss';

const NetworkDropdown = () => {
  return (
    <div className={styles.walletButtonContainer}>
      <EthToken />
      <span>ERC-20</span>
    </div>
  );
};

export default NetworkDropdown;
