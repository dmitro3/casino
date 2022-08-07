import React from 'react';

import Dropdown from 'src/components/Dropdown';
import WalletDropdownButton from 'src/components/Header/components/WalletDropdownButton';
import WalletDropdownWindow from 'src/components/Header/components/WalletDropdownWindow';
import NetworkDropdown from 'src/pages/vault/components/VaultWithdraw/components/NetworkDropdown';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { TetherToken, CloseIcon, AttentionIcon } from 'src/assets/svg';
import styles from './VaultWithdraw.module.scss';

const VaultWithdraw = () => {
  return (
    <section className={styles.root}>
      <span>Withdraw</span>
      <div className={styles.dropdown}>
        <Dropdown
          buttonComponent={<WalletDropdownButton />}
          dropdownComponent={<WalletDropdownWindow />}
          customButtonStyles={styles.walletDropdown}
          customWalletDropdownStyles={styles.windowDropdown}
        />
        <Dropdown
          buttonComponent={<NetworkDropdown />}
          dropdownComponent={<div />}
          customButtonStyles={styles.walletDropdown}
          customWalletDropdownStyles={styles.windowDropdown}
        />
      </div>
      <div className={styles.inputContainerWide}>
        <span>Адрес вашего кошелька</span>
        <Input placeholder="Enter address" customStyles={styles.input} />
      </div>
      <div className={styles.inputContainerWide}>
        <span>Сумма</span>
        <div className={styles.sumContainer}>
          <Input
            placeholder="Enter Amount"
            customStyles={`${styles.inputContainer} ${styles.inputAmount}`}
            additionalButton={
              <button className={styles.buttonAdditional}>all</button>
            }
          />
          <Input
            value="0.00000000"
            placeholder=""
            icon={<TetherToken height={20} />}
            disabled
            customStyles={`${styles.inputContainer}`}
            additionalButton={<CloseIcon />}
          />
        </div>
      </div>
      <div />
      <div className={styles.attentionTab}>
        <AttentionIcon />
        <span>Минимальная сумма вывода составляет 25 USDT</span>
      </div>
      <Button label="Снять" customStyles={styles.button} />
      <div className={styles.smallText}>
        <span>Transaction free - 1.5 USDT.</span>
      </div>
    </section>
  );
};

export default VaultWithdraw;
