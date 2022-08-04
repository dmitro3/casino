import React from 'react';
import Link from 'next/link';

import {
  UserProfilePic,
  TipIcon,
  ArrowBackIcon,
  QuestionCircle,
  HeartIcon,
} from 'src/assets/svg';
import { mockUser } from 'src/utils/mockData';
import styles from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profileImageContainer}>
          <UserProfilePic />
          <div className={styles.userLevel}>{`${mockUser.level} lvl`}</div>
        </div>
        <div className={styles.userProfileContainer}>
          <span>User Profile</span>
          <button className={styles.tipButton}>
            <TipIcon />
            <span> Leave a tip</span>
          </button>
        </div>
        <div className={styles.nicknameContainer}>
          <span>18 days on the platform</span>
          <p>{mockUser.username}</p>
          <div className={styles.editButton}>
            <Link passHref href="sad">
              <a href="/#" className={styles.editButtonText}>
                Edit
              </a>
            </Link>
            <ArrowBackIcon />
          </div>
        </div>
      </div>
      <div className={styles.userStatsContainer}>
        <div className={styles.userActivity}>
          <p>Chat Activity</p>
          <div className={styles.userActivityStats}>
            <span>1/5</span>
            <div>
              <span>{mockUser.userRank}</span>
            </div>
            <QuestionCircle />
          </div>
        </div>
        <div className={styles.userActivity}>
          <p>Likes received</p>
          <div className={styles.userActivityStats}>
            <HeartIcon />
            <span>{mockUser.likes}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
