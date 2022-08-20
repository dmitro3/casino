/* eslint-disable no-shadow */
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

enum Page {
  withdraw = `withdraw`,
  deposit = `deposit`,
  exchange = `exchange`,
  tip = `tip`,
}

const VaultWindow: FC<Props> = ({ customStyles }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const [currentPage, setCurrentPage] = useState<keyof typeof Page>(`deposit`);

  // eslint-disable-next-line consistent-return
  const renderPage = () => {
    switch (currentPage) {
      case Page.withdraw:
        return <VaultWithdraw />;
      case Page.deposit:
        return <VaultDeposit />;
      case Page.exchange:
        return <VaultExchange />;
      case Page.tip:
        return <VaultTips />;
      default:
    }
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
            onClick={() => setCurrentPage(Page.deposit)}
            className={`${styles.button} ${
              currentPage === Page.deposit ? styles.buttonBorder : ``
            }`}
          >
            <DepositIcon />
            <span>Deposit</span>
          </button>
          <button
            onClick={() => setCurrentPage(Page.withdraw)}
            className={`${styles.button} ${
              currentPage === Page.withdraw ? styles.buttonBorder : ``
            }`}
          >
            <WithdrawIcon />
            <span>Withdraw</span>
          </button>
          <button
            onClick={() => setCurrentPage(Page.exchange)}
            className={`${styles.button} ${
              currentPage === Page.exchange ? styles.buttonBorder : ``
            }`}
          >
            <ExchangeIcon />
            <span>Exchange</span>
          </button>
          <button
            onClick={() => setCurrentPage(Page.tip)}
            className={`${styles.button} ${
              currentPage === Page.tip ? styles.buttonBorder : ``
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
        {}
      </div>
      {renderPage()}
    </section>
  );
};

export default VaultWindow;
