import React from 'react';

import Input from 'src/components/Input';
import {
  SearchIcon,
  BnbToken,
  BtcToken,
  EosToken,
  EthToken,
  TetherToken,
  SolToken,
} from 'src/assets/svg';
import Switch from 'src/components/Switch';
import styles from './WalletDropdownWindow.module.scss';

const tokenBalance = [
  {
    icon: TetherToken,
    label: `Tether`,
    balance: `0.000000000`,
    id: 1,
  },
  {
    icon: BnbToken,
    label: `Binance`,
    balance: `0.000000000`,
    id: 2,
  },
  {
    icon: BtcToken,
    label: `Bitcoin`,
    balance: `0.000000000`,
    id: 3,
  },
  {
    icon: EthToken,
    label: `Ethereum`,
    balance: `0.000000000`,
    id: 4,
  },
  {
    icon: SolToken,
    label: `Solana`,
    balance: `0.000000000`,
    id: 5,
  },
  {
    icon: EosToken,
    label: `EOS`,
    balance: `0.000000000`,
    id: 6,
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
        <div key={token.id} className={styles.walletDropdownWindowCurrencies}>
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
