import React from 'react';
import Image from 'next/image';
import ProgressBar from '@ramonak/react-progress-bar';

import Lightning from 'src/assets/images/Lightning.png';
import Bucket from 'src/assets/images/Bucket.png';
import Button from 'src/components/Button';
import TabTemplate from 'src/components/TabTemplate';
import { ArrowBackIcon, KeyIcon, Checkmark, GoogleIcon } from 'src/assets/svg';
import styles from './ProfileCards.module.scss';

const ProfileCards = () => {
  return (
    <div>
      <section className={styles.cardsContainer}>
        <div className={styles.userRank}>
          <div className={styles.rankImage}>
            <Image src={Lightning} height={43} width={43} />
            <div className={styles.level}>
              <span>1</span>
            </div>
          </div>
          <div className={styles.rankStats}>
            <span>
              My rank: <span>Newcomer</span>
            </span>
            <ProgressBar
              bgColor="#FFFFFF1A"
              height="4px"
              className={styles.barContainer}
              isLabelVisible
              customLabel=" "
              completed={0}
            />
            <span className={styles.progressBarEnd}>🎁%</span>
            <Button
              label="See all ranks"
              customStyles={styles.button}
              rightIcon={<ArrowBackIcon />}
            />
          </div>
        </div>
        <div className={styles.userRank}>
          <div className={styles.rankImage}>
            <Image src={Bucket} height={43} width={43} />
          </div>
          <div className={styles.rankStats}>
            <span>My cashback</span>
            <p>2%</p>
          </div>
        </div>
      </section>
      <section className={styles.tabs}>
        <div>
          <TabTemplate
            label="Пароль"
            mainIcon={<KeyIcon />}
            subIcon={<Checkmark isPositive />}
            subIconText="Проверено"
            text="Must contain at least 8 characters a combination 
          of letters and characters"
            tabContent={
              <Button label="Изменить" customStyles={styles.tabsButton} />
            }
            isPositive
            customStyles={styles.tabsIndividual}
          />
        </div>
        <div>
          <TabTemplate
            label="2FA"
            mainIcon={<GoogleIcon />}
            subIcon={<Checkmark />}
            subIconText="2FA не активирован"
            text="2-й уровень безопасности вашего аккаунта. Установите 2FA для защиты своего аккаунта (доступно только при решистрации в Google 
или при установке адреса электронной почты 
и пароля) "
            tabContent={
              <Button
                customStyles={styles.tabsButtonNegative}
                label="Активировать"
              />
            }
            customStyles={styles.tabsIndividual}
          />
        </div>
      </section>
    </div>
  );
};

export default ProfileCards;
