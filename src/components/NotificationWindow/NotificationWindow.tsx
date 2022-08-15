import React from 'react';

import { Bell } from 'src/assets/svg';
import cardData from 'src/components/NotificationDropdown/Cards/cardData';
import styles from './NotificationWindow.module.scss';

const NotificationWindow = () => {
  return (
    <div className={styles.root}>
      <Bell />
      <div className={styles.cardCount}>{cardData.length}</div>
    </div>
  );
};

export default NotificationWindow;
