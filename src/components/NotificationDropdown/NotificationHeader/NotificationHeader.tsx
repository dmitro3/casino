import React from 'react';

import ShowButton from 'src/components/ShowButton';
import Button from 'src/components/Button';
import { ArrowDownIcon, CloseIcon } from 'src/assets/svg';
import styles from './NotificationHeader.module.scss';

const NotificationHeader = () => {
  return (
    <header>
      <div className={styles.header}>
        <div>
          <span>Notifications</span>
        </div>
        <div className={styles.headerButtons}>
          <ShowButton title="View all" icon={<ArrowDownIcon />} />
          <CloseIcon width={8} height={8} />
        </div>
      </div>
      <div className={styles.button}>
        <Button
          label="Platform"
          rightIcon={<div className={styles.buttonActiveCount}>37</div>}
          customStyles={styles.buttonActive}
        />
        <Button
          label="Platform"
          rightIcon={<div className={styles.buttonPassiveCount}>37</div>}
          customStyles={styles.buttonPassive}
        />
      </div>
    </header>
  );
};

export default NotificationHeader;
