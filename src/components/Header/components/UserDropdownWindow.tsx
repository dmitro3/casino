import React from 'react';

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
import styles from './UserDropdownWindow.module.scss';

const UserDropdownWindow = () => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownIcon}>
        <div className={styles.dropdownIconUser}>
          <BlackPerson />
        </div>
        <div className={styles.userLevel}>1 lvl</div>
        <span>User48376</span>
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
              My Profile
            </li>
            <li>
              <Account />
              Account
            </li>
            <li>
              <Transaction />
              Transaction
            </li>
            <li>
              <History />
              Game History
            </li>
            <li>
              <Sessions />
              Sessions
            </li>
            <li>
              <Vault />
              Vault
            </li>
          </ul>
        </div>
        <div className={styles.exit}>
          <Exit />
          Exit
        </div>
      </div>
    </div>
  );
};

export default UserDropdownWindow;
