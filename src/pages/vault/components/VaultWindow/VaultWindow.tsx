import React, { FC, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import VaultDeposit from 'src/pages/vault/components/VaultDeposit';
import VaultWithdraw from 'src/pages/vault/components/VaultWithdraw';
import VaultExchange from 'src/pages/vault/components/VaultExchange';
import VaultTips from 'src/pages/vault/components/VaultTips';
import {
  DepositIcon,
  WithdrawIcon,
  ExchangeIcon,
  TipsIcon,
} from 'src/assets/svg';
import styles from './VaultWindow.module.scss';

type Props = {
  customStyles?: any;
};

const VaultWindow: FC<Props> = ({ customStyles }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const [isWithdrawOpen, setIsWithDrawOpen] = useState(false);
  const [isDepositOpen, setIsDepositOpen] = useState(true);
  const [isExchangeOpen, setIsExchangeOpen] = useState(false);
  const [isTipsOpen, setIsTipsOpen] = useState(false);

  const toggleVaultWithdraw = () => {
    setIsWithDrawOpen(true);
    setIsDepositOpen(false);
    setIsExchangeOpen(false);
    setIsTipsOpen(false);
  };

  const toggleVaultDeposit = () => {
    setIsDepositOpen(true);
    setIsWithDrawOpen(false);
    setIsTipsOpen(false);
    setIsExchangeOpen(false);
  };

  const toggleVaultExchange = () => {
    setIsExchangeOpen(true);
    setIsWithDrawOpen(false);
    setIsDepositOpen(false);
    setIsTipsOpen(false);
  };

  const toggleVaultTips = () => {
    setIsTipsOpen(true);
    setIsExchangeOpen(false);
    setIsWithDrawOpen(false);
    setIsDepositOpen(false);
  };

  return (
    <section className={`${styles.vaultWindow} ${customStyles || ``}`}>
      {!isMobile && (
        <div className={styles.vaultHeader}>
          <span>Wallet</span>
        </div>
      )}

      <div className={styles.vaultContainer}>
        <div className={styles.buttonContainer}>
          <button
            onClick={toggleVaultDeposit}
            className={`${styles.button} ${
              isDepositOpen ? styles.buttonBorder : ``
            }`}
          >
            <DepositIcon />
            <span>Deposit</span>
          </button>
          <button
            onClick={toggleVaultWithdraw}
            className={`${styles.button} ${
              isWithdrawOpen ? styles.buttonBorder : ``
            }`}
          >
            <WithdrawIcon />
            <span>Withdraw</span>
          </button>
          <button
            onClick={toggleVaultExchange}
            className={`${styles.button} ${
              isExchangeOpen ? styles.buttonBorder : ``
            }`}
          >
            <ExchangeIcon />
            <span>Exchange</span>
          </button>
          <button
            onClick={toggleVaultTips}
            className={`${styles.button} ${
              isTipsOpen ? styles.buttonBorder : ``
            }`}
          >
            <TipsIcon />
            <span>Send Tips</span>
          </button>
        </div>
        {isMobile && (
          <div className={styles.vaultHeader}>
            <span>Wallet</span>
          </div>
        )}
        {/* <div className={styles.buttonContainer}>
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
        </div> */}
        {isDepositOpen && <VaultDeposit /* onClick={toggleDepositProcess} */ />}
        {isWithdrawOpen && <VaultWithdraw />}
        {isExchangeOpen && <VaultExchange />}
        {isTipsOpen && <VaultTips />}
        {/* {isDepositProcessOpen && <VaultDepositProcess />} */}
      </div>
    </section>
  );
};

export default VaultWindow;
