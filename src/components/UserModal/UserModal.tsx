import React, { FC } from 'react';
import Image from 'next/image';

import Modal from 'src/components/Modal';
import ProfileImg from 'src/pages/account/components/ProfileInfo/components/ProfileImg';
import TipButton from 'src/pages/account/components/ProfileInfo/components/TipButton';
import { mockUser } from 'src/utils/mockData';
import { topGames } from 'src/pages/account/components/Stats/StatsTop/StatsTop';
import {
  QuestionCircle,
  HeartIcon,
  Rocket,
  Stats,
  Controller,
  TetherToken,
  Gamepad,
} from 'src/assets/svg';
import Button from 'src/components/Button';
import styles from './UserModal.module.scss';

type Props = {
  toggleModal: () => void;
};

const UserModal: FC<Props> = ({ toggleModal }) => {
  return (
    <Modal customStyles={styles.root} toggleModal={toggleModal}>
      <div className={styles.header}>
        <span>User Profile</span>
        <TipButton />
      </div>
      <div className={styles.userInfo}>
        <ProfileImg />
        <div className={styles.nicknameContainer}>
          <span>18 days on the platform</span>
          <p>{mockUser.username}</p>
        </div>
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
      <div className={styles.statsContainer}>
        <span>
          <Stats /> Statictics
        </span>
        <div className={styles.statItemContainer}>
          <div className={styles.statItem}>
            <span>Total Wagered</span>
            <div className={styles.sumContainer}>
              <TetherToken width={20} height={20} />
              <p>0.000000000</p>
            </div>
          </div>
          <div className={styles.statItem}>
            <span>Total Bets</span>
            <div className={styles.sumContainer}>
              <p>0</p>
            </div>
          </div>
          <div className={styles.statItem}>
            <span>Earned Staking</span>
            <div className={styles.sumContainer}>
              <TetherToken width={20} height={20} />
              <p>0.000000000</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statsContainer}>
        <span>
          <Rocket /> Activity
        </span>
        <div className={styles.statItemContainer}>
          <div className={styles.statItem}>
            <span>Total Tips</span>
            <div className={styles.sumContainer}>
              <TetherToken width={20} height={20} />
              <p>0.000000000</p>
            </div>
          </div>
          <div className={styles.statItem}>
            <span>Rains & Drops</span>
            <div className={styles.sumContainer}>
              <TetherToken width={20} height={20} />
              <p>0.000000000</p>
            </div>
          </div>
          <div className={styles.statItem}>
            <span>Messages in chat</span>
            <div className={styles.sumContainer}>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.statsContainer}>
        <span>
          <Controller /> Top favorite games
        </span>
        <div className={styles.statItemContainer}>
          <div className={styles.cardsContainer}>
            {topGames.map((tabImg) => (
              <div>
                <Image
                  src={tabImg.image}
                  key={tabImg.id}
                  width={111}
                  height={152}
                />
              </div>
            ))}
          </div>
          <div className={styles.emptyTab}>
            <Gamepad />
            <Button label="All games" />
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.statsContainer}>
        <span>
          <Controller /> Top Battles Rewards
        </span>
        <div className={styles.emptyField}>There is no information yet</div>
      </div>
    </Modal>
  );
};

export default UserModal;
