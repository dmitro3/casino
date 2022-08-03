import React from 'react';

import Input from 'src/components/Input';
import {
  SearchIcon,
  bnbToken,
  btcToken,
  eosToken,
  ethToken,
  tetherToken,
  solToken,
} from 'src/assets/svg';
import Switch from 'src/components/Switch';
import styles from './WalletDropdownWindow.module.scss';

const tokenBalance = [
  {
    icon: tetherToken,
    label: `Tether`,
    balance: `0.000000000`,
  },
  {
    icon: bnbToken,
    label: `Binance`,
    balance: `0.000000000`,
  },
  {
    icon: btcToken,
    label: `Bitcoin`,
    balance: `0.000000000`,
  },
  {
    icon: ethToken,
    label: `Ethereum`,
    balance: `0.000000000`,
  },
  {
    icon: solToken,
    label: `Solana`,
    balance: `0.000000000`,
  },
  {
    icon: eosToken,
    label: `EOS`,
    balance: `0.000000000`,
  },
];

const WalletDropdownWindow = () => {
  return (
    <div className={styles.walletDropdownWindow}>
      <Input
        placeholder="Search"
        icon={<SearchIcon />}
        customStyles={styles.searchBar}
      />
      {tokenBalance.map((token) => (
        <div className={styles.walletDropdownWindowCurrencies}>
          <token.icon />
          <span>{token.label}</span>
          <span className={styles.tokenBalance}>{token.balance}</span>
        </div>
      ))}
      <div className={styles.actions}>
        <div className={styles.actionsItem}>
          <span>Display in Fiat</span>
          <Switch />
        </div>
        <div className={styles.actionsItem}>
          <span>Hide 0 balances</span>
          <Switch />
        </div>
        <div className={styles.actionsItem}>
          <span>Show vault balance</span>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default WalletDropdownWindow;
