import React, { FC, useState } from 'react';
import Link from 'next/link';

import { ArrowBackIcon, QuestionCircle, HeartIcon } from 'src/assets/svg';
import { mockUser } from 'src/utils/mockData';
import ProfileImg from 'src/pages/account/components/ProfileInfo/components/ProfileImg';
import TipButton from 'src/pages/account/components/ProfileInfo/components/TipButton';
import styles from './ProfileInfo.module.scss';

type Props = {
  customStyles?: any;
  username: string;
};

const ProfileInfo: FC<Props> = ({ customStyles, username }) => {
  const [isUserModalActive, setIsUserModalActive] = useState(true);

  const userModalToggle = () => {
    setIsUserModalActive(!isUserModalActive);
  };

  return (
    <section>
      <section className={styles.sectionContainer}>
        <div className={`${styles.profileContainer} ${customStyles}`}>
          <ProfileImg />
          <div className={styles.userProfileContainer}>
            <span>User Profile</span>
            <TipButton />
          </div>
          <div className={styles.nicknameContainer}>
            <span>18 days on the platform</span>
            <p>{username}</p>
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
    </section>
  );
};

export default ProfileInfo;
