import React from 'react';

import Cards from 'src/components/NotificationDropdown/Cards';
import styles from './NotificationDropdown.module.scss';

const NotificationDropdown = () => {
  return (
    <aside className={styles.container}>
      <Cards />
    </aside>
  );
};

export default NotificationDropdown;
