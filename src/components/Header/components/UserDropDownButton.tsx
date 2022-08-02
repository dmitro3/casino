import React, { FC } from 'react';

import { WhitePerson } from 'src/assets/svg';
import styles from './UserDropdownButton.module.scss';

const UserDropdownButton = () => {
  return (
    <div className={styles.userIconImgContainer}>
      <WhitePerson />
    </div>
  );
};

export default UserDropdownButton;
