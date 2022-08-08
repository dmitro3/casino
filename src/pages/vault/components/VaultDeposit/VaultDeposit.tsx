import React from 'react';

import Dropdown from 'src/components/Dropdown';
import WalletDropdownButton from 'src/components/Header/components/WalletDropdownButton';
import WalletDropdownWindow from 'src/components/Header/components/WalletDropdownWindow';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { TetherToken } from 'src/assets/svg';
import styles from './VaultDeposit.module.scss';

const VaultDeposit = ({ onClick }) => {
  return (
    <section className={styles.root}>
      <span>Vault</span>
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdown}>
          <span>Main balance</span>
          <Dropdown
            buttonComponent={<WalletDropdownButton />}
            dropdownComponent={<WalletDropdownWindow />}
            customButtonStyles={styles.walletDropdown}
            customWalletDropdownStyles={styles.windowDropdown}
          />
        </div>
        <div className={styles.dropdown}>
          <span>Vault balance</span>
          <Dropdown
            buttonComponent={<WalletDropdownButton />}
            dropdownComponent={<WalletDropdownWindow />}
            customButtonStyles={styles.walletDropdown}
            customWalletDropdownStyles={styles.windowDropdown}
          />
        </div>
      </div>
      <div className={styles.input}>
        <span>Сумма</span>
        <Input
          customStyles={styles.inputField}
          icon={<TetherToken width={21} height={21} />}
          placeholder="Сумма"
        />
      </div>
      <Button
        onClick={onClick}
        label="Deposit to Vault"
        customStyles={styles.bigButton}
      />
    </section>
  );
};

export default VaultDeposit;
