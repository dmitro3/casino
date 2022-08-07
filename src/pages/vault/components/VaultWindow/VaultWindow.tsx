import React, { FC } from 'react';

import BackButton from 'src/components/BackButton';
import Button from 'src/components/Button';
import Dropdown from 'src/components/Dropdown';
import WalletDropdownButton from 'src/components/Header/components/WalletDropdownButton';
import WalletDropdownWindow from 'src/components/Header/components/WalletDropdownWindow';
import Input from 'src/components/Input';
import { DepositArrowIcon, TetherToken } from 'src/assets/svg';
import styles from './VaultWindow.module.scss';

type Props = {
  customStyles?: any;
};

const VaultWindow: FC<Props> = ({ customStyles }) => {
  return (
    <section className={`${styles.vaultWindow} ${customStyles || ``}`}>
      <BackButton />
      <div className={styles.vaultContainer}>
        <span>Vault</span>
        <div className={styles.buttonContainer}>
          <Button
            customStyles={styles.button}
            leftIcon={<DepositArrowIcon />}
            label="Deposit"
          />
          <Button
            customStyles={styles.button}
            leftIcon={<DepositArrowIcon />}
            label="Withdraw"
          />
        </div>
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
        <Button label="Deposit to Vault" customStyles={styles.bigButton} />
      </div>
    </section>
  );
};

export default VaultWindow;
