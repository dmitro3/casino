import React from 'react';
import Blur from 'src/components/Blur';
import styles from 'src/pages/referral/components/Card/Card.module.scss';
import Image from 'next/image';
import Button from 'src/components/Button';
import Hero from 'src/assets/images/Hero.png';

const Card = () => {
  return (
    <div className={styles.bonusContainer}>
      <div className={styles.bonusContainerCard}>
        <div className={styles.bonusContainerCardImage}>
          <Blur width="30%" color="#FCD535" filterRadius={100}>
            <Image src={Hero} width={316} height={303} />
          </Blur>
        </div>

        <p>15 %</p>
        <span>From pure profit</span>
        <div className={styles.bonusContainerCardText}>
          Some text about. Let the whole world know about BetFury
          <br /> - Bring people here and earn more! Receive passive income
        </div>
        <Button
          customStyles={styles.bonusContainerCardButton}
          label="FOR IN HOUSE GAMES"
        />
      </div>
      <div className={styles.bonusContainerCard}>
        <div className={styles.bonusContainerCardImage}>
          <Blur width="70%" color="#745c41" filterRadius={100}>
            <Image src={Hero} width={316} height={303} />
          </Blur>
        </div>

        <p>1.5 %</p>
        <span>From all winnings</span>
        <div className={styles.bonusContainerCardText}>
          Some text about. Let the whole world know about BetFury
          <br /> - Bring people here and earn more! Receive passive income
        </div>
        <Button
          customStyles={styles.bonusContainerCardButton}
          label="FOR SLOTS AND SPORTS"
        />
      </div>
      <div className={styles.bonusContainerCard}>
        <div className={styles.bonusContainerCardImage}>
          <Blur width="50%" color="#6f443a" filterRadius={100}>
            <Image src={Hero} width={316} height={303} />
          </Blur>
        </div>

        <p>5 %</p>
        <span>From tokens mined by your referrals</span>
        <div className={styles.bonusContainerCardText}>
          Some text about. Let the whole world know about BetFury
          <br /> - Bring people here and earn more! Receive passive income
        </div>
        <Button
          customStyles={styles.bonusContainerCardButton}
          label="FOR BFG TOKENS"
        />
      </div>
    </div>
  );
};

export default Card;
