import React from 'react';

import { UserProfilePic } from 'src/assets/svg';
import styles from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <section>
      <div className={styles.profileContainer}>
        <div className={styles.profileImageContainer}>
          <UserProfilePic />
        </div>
        <div>User Profile</div>
        <div>18 days on the platform</div>
      </div>
    </section>
  );
};

export default ProfileInfo;
