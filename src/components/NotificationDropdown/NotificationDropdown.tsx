import React from 'react';

import Cards from 'src/components/NotificationDropdown/Cards';
import NotificationHeader from 'src/components/NotificationDropdown/NotificationHeader';
import styles from './NotificationDropdown.module.scss';

const NotificationDropdown = () => {
  return (
    <aside className={styles.container}>
      <NotificationHeader />
      <Cards />
    </aside>
  );
};

export default NotificationDropdown;
