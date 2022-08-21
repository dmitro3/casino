import React, { FC } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Modal from 'src/components/Modal';
import ProfileImg from 'src/pages/account/components/ProfileInfo/components/ProfileImg';
import Cup from 'src/assets/images/Cup.png';
import Clever from 'src/assets/images/Clever.png';
import ArrowDownRed from 'src/assets/images/ArrowDownRed.png';
import CupYellow from 'src/assets/images/CupYellow.png';

import { mockUser } from 'src/utils/mockData';
import { topGames } from 'src/pages/account/components/Stats/StatsTop/StatsTop';
import {
  CloseIcon,
  QuestionCircle,
  HeartIcon,
  Controller,
  TetherToken,
  Gamepad,
} from 'src/assets/svg';
import Button from 'src/components/Button';
import ButtonDropdownComponents from 'src/components/Modal/Modals/UserModal/components/ButtonDropdownComponents';
import styles from './UserModal.module.scss';

type Props = {
  toggleModal: () => void;
};

const UserModal: FC<Props> = ({ toggleModal }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <Modal customStyles={styles.root} toggleModal={toggleModal}>
      <div className={styles.headerContainer}>
        <div>
          <span>Duckling Info</span>

          <div>
            <Image src={Cup} width={17} height={17} />
            <span>11</span>
          </div>
        </div>

        <div>
          {!isMobile && <ButtonDropdownComponents />}
          <CloseIcon width={18} height={18} />
        </div>
      </div>
      <div className={styles.userImage}>
        <ProfileImg />

        <div className={styles.nicknameContainer}>
          {isMobile && <ButtonDropdownComponents />}
          <span>18 days on the platform</span>
          <p>User48376</p>
        </div>
      </div>

      <div className={styles.userInfo}>
        <div className={styles.mobileUserActivity}>
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
      </div>
      <div className={styles.userInfo}>
        <div className={styles.mobileUserActivity}>
          <div className={styles.userActivity}>
            <p>Wins</p>
            <div className={styles.userActivityStats}>
              <Image src={CupYellow} width={12} height={12} />
              <div className={styles.userActivityStatsCounter}>400,930</div>
            </div>
          </div>
          <div className={styles.userActivity}>
            <p>Losses</p>
            <div className={styles.userActivityStats}>
              <Image src={ArrowDownRed} width={12} height={12} />
              <div className={styles.userActivityStatsCounter}>400,930</div>
            </div>
          </div>
          <div className={styles.userActivity}>
            <p>Luck</p>
            <div className={styles.userActivityStats}>
              <Image src={Clever} width={12} height={12} />
              <div className={styles.userActivityStatsCounter}>100,32%</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statsContainerCase}>
        <div className={styles.statsContainer}>
          <div className={styles.statItemContainer}>
            <div className={styles.statItem}>
              <span>PROFIT</span>
              <div className={styles.sumContainer}>
                <div className={styles.sumContainerHidden}>HIDDEN</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <span>PROFIT RANK</span>
              <div className={styles.sumContainer}>
                <div className={styles.sumContainerHidden}>HIDDEN</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <span>MESSAGES</span>
              <div className={styles.sumContainer}>
                <p>22,453</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.statItemContainer}>
            <div className={styles.statItem}>
              <span>WAGERED</span>
              <div className={styles.sumContainer}>
                <TetherToken width={20} height={20} />
                <p>3,876.18837858</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <span>WAGERED RANK</span>
              <div className={styles.sumContainer}>
                <p>#685</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <span>BETS</span>
              <div className={styles.sumContainer}>
                <p>1,166,138</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statsContainerLabel}>
          <Controller /> Top favorite games
        </div>
        <div className={styles.statItemContainer}>
          <div className={styles.cardsContainer}>
            {topGames
              .filter((tabImg) => tabImg.id !== 4)
              .map((tabImg) => (
                <div>
                  <Image
                    src={tabImg.image}
                    key={tabImg.id}
                    width={100}
                    height={130}
                  />
                </div>
              ))}
            {isMobile && (
              <div className={styles.emptyTab}>
                <Gamepad />
                <Button label="All games" />
              </div>
            )}
            {!isMobile && (
              <div className={styles.emptyTab}>
                <Gamepad />
                <Button label="All games" />
              </div>
            )}
          </div>
        </div>
        <div className={styles.footerText}>
          <span>Last seen recently</span>
          <span>Registered 09/04/21 12:54</span>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
