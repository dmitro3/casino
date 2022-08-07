import React, { FC, useState } from 'react';
import Link from 'next/link';

import {
  ArrowBackIcon,
  QuestionCircle,
  HeartIcon,
  Checkmark,
  EmailIcon,
} from 'src/assets/svg';
import { mockUser } from 'src/utils/mockData';
import TabTemplate from 'src/components/TabTemplate';
import Checkbox from 'src/components/Checkbox';
import Input from 'src/components/Input';
import UserModal from 'src/components/UserModal';
import ProfileImg from 'src/pages/account/components/ProfileInfo/components/ProfileImg';
import TipButton from 'src/pages/account/components/ProfileInfo/components/TipButton';
import styles from './ProfileInfo.module.scss';

type Props = {
  customStyles?: any;
};

const ProfileInfo: FC<Props> = ({ customStyles }) => {
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
      <section>
        <TabTemplate
          customStyles={styles.tabMail}
          label="Моя электронная почта"
          text="Ваши данные для входа в аккаунт Binobi.com. Используйте этот адрес электронной почтыбъ, чтобы открыть платформу с любого устройства"
          mainIcon={<EmailIcon />}
          subIcon={<Checkmark isPositive />}
          subIconText="Проверено"
          isPositive
          tabContent={
            <div>
              <div>
                <Checkbox
                  label={
                    <div className={styles.userAgreement}>
                      <span>
                        Получать промо-материалы
                        <br /> по электронной почте
                      </span>
                    </div>
                  }
                />
              </div>
              <Input
                placeholder=""
                icon
                disabled
                value="657897363999@gmail.com"
                customStyles={styles.input}
              />
            </div>
          }
        />
      </section>
      {isUserModalActive && <UserModal toggleModal={userModalToggle} />}
    </section>
  );
};

export default ProfileInfo;
