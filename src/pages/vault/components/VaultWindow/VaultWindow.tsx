import React, { FC, useState } from 'react';

import BackButton from 'src/components/BackButton';
import Button from 'src/components/Button';
import VaultDeposit from 'src/pages/vault/components/VaultDeposit';
import VaultDepositProcess from 'src/pages/vault/components/VaultDepositProcess';
import VaultWithdraw from 'src/pages/vault/components/VaultWithdraw';
import { DepositArrowIcon, DepositPassiveIcon } from 'src/assets/svg';
import styles from './VaultWindow.module.scss';

type Props = {
  customStyles?: any;
};

const VaultWindow: FC<Props> = ({ customStyles }) => {
  const [isWithdrawOpen, setIsWithDrawOpen] = useState(false);
  const [isDepositOpen, setIsDepositOpen] = useState(true);
  const [isDepositProcessOpen, setIsDepositProcessOpen] = useState(false);

  const toggleVaultWithdraw = () => {
    setIsWithDrawOpen(true);
    setIsDepositOpen(false);
    setIsDepositProcessOpen(false);
  };

  const toggleVaultDeposit = () => {
    setIsDepositOpen(true);
    setIsWithDrawOpen(false);
    setIsDepositProcessOpen(false);
  };

  const toggleDepositProcess = () => {
    setIsDepositProcessOpen(true);
    setIsWithDrawOpen(false);
    setIsDepositOpen(false);
  };

  return (
    <section className={`${styles.vaultWindow} ${customStyles || ``}`}>
      <BackButton />
      <div className={styles.vaultContainer}>
        <div className={styles.buttonContainer}>
          <Button
            customStyles={
              isDepositOpen || isDepositProcessOpen
                ? styles.button
                : styles.buttonPassive
            }
            leftIcon={
              isDepositOpen || isDepositProcessOpen ? (
                <DepositArrowIcon />
              ) : (
                <DepositPassiveIcon />
              )
            }
            label="Deposit"
            onClick={toggleVaultDeposit}
          />
          <Button
            customStyles={isWithdrawOpen ? styles.button : styles.buttonPassive}
            leftIcon={
              isWithdrawOpen ? <DepositArrowIcon /> : <DepositPassiveIcon />
            }
            label="Withdraw"
            onClick={toggleVaultWithdraw}
          />
        </div>
        {isDepositOpen && <VaultDeposit onClick={toggleDepositProcess} />}
        {isWithdrawOpen && <VaultWithdraw />}
        {isDepositProcessOpen && <VaultDepositProcess />}
      </div>
    </section>
  );
};

export default VaultWindow;
