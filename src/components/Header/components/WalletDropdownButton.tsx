import React from 'react';

import { TetherSmol } from 'src/assets/svg';
import styles from './WalletDropdownButton.module.scss';

const WalletDropdownButton = () => {
  return (
    <div className={styles.walletButtonContainer}>
      <TetherSmol />
      <span>0.000000000</span>
    </div>
  );
};

export default WalletDropdownButton;
