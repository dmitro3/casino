import React, { FC } from 'react';

import ProgressBar from '@ramonak/react-progress-bar';

import {
  BlackPerson,
  History,
  Profile,
  Account,
  Transaction,
  Sessions,
  Vault,
  Exit,
} from 'src/assets/svg';
import Link from 'next/link';
import styles from './UserDropdownWindow.module.scss';

type Props = {
  onLogout?: () => void;
  toggleUserModal: () => void;
};

const UserDropdownWindow: FC<Props> = ({ onLogout, toggleUserModal }) => {
  const username = localStorage.getItem(`username`);
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownIcon}>
        <div className={styles.dropdownIconUser}>
          <BlackPerson />
        </div>
        <div className={styles.userLevel}>1 lvl</div>
        <span>{username}</span>
      </div>
      <div className={styles.levels}>
        <span>1 lvl</span>
        <span>2 lvl</span>
      </div>
      <div className={styles.progressBar}>
        <ProgressBar
          bgColor="#FCD535"
          height="4px"
          className={styles.barContainer}
          isLabelVisible
          customLabel=" "
          completed={60}
        />
        <span className={styles.gift}>🎁</span>
        <span>%</span>
      </div>
      <div>
        <div className={styles.modalMenuWrapper}>
          <ul>
            <li>
              <Profile />
              <button onClick={toggleUserModal}>My Profile</button>
            </li>
            <li>
              <Account />
              <Link href={`/account/${username}`} passHref>
                <a href={`/account/${username}`}>Account</a>
              </Link>
            </li>
            <li>
              <Transaction />
              <Link href="/account/transactions" passHref>
                <a href="/account/transactions">Transaction</a>
              </Link>
            </li>
            <li>
              <History />
              <Link href="/account/gameHistory" passHref>
                <a href="/account/gameHistory">Game History</a>
              </Link>
            </li>
            <li>
              <Sessions />
              <Link href="/account/sessions" passHref>
                <a href="/account/sessions">Sessions</a>
              </Link>
            </li>
            <li>
              <Vault />
              <Link href="/vault" passHref>
                <a href="/vault">Vault</a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={styles.exit}
          role="button"
          tabIndex={0}
          onKeyDown={onLogout}
          onClick={onLogout}
        >
          <Exit />
          Exit
        </div>
      </div>
    </div>
  );
};

export default UserDropdownWindow;
