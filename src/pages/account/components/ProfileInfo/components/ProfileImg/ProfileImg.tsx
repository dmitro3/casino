import React from 'react';

import { UserProfilePic } from 'src/assets/svg';
import { mockUser } from 'src/utils/mockData';
import styles from './ProfileImg.module.scss';

const ProfileImg = () => {
  return (
    <div className={styles.profileImageContainer}>
      <UserProfilePic />
      <div className={styles.userLevel}>{`${mockUser.level} lvl`}</div>
    </div>
  );
};

export default ProfileImg;
