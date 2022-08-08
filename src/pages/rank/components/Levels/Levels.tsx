import React from 'react';
import Image from 'next/image';

import Blur from 'src/components/Blur';
import rankStar from 'src/assets/images/rankStar.png';
import rankBlurThing from 'src/assets/images/rankBlurThing.png';
import lvl1 from 'src/assets/images/lvl1.png';
import lvl2 from 'src/assets/images/lvl2.png';
import lvl3 from 'src/assets/images/lvl3.png';

import styles from './Levels.module.scss';

const Levels = () => {
  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <div className={styles.headerImage}>
          <Image src={rankBlurThing} width={63} height={63} />
        </div>
        <div className={styles.headerImage}>
          <Image src={rankStar} width={96} height={110} />
        </div>
        <h3 className={styles.headerTitle}>YOU CAN REACH 20 LEVELS</h3>
        <p className={styles.headerSubTitle}>
          Reach the high top Rank - BF LEGEND to get a 25% cashback bonus and
          open all the benefits of the platform. Stay with BetFury to receive
          the best gaming experience and excellent service!
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.cardsCard}>
          <div className={styles.cardsCardImage}>
            <Image src={lvl1} width={91} height={91} />
          </div>
          <p className={styles.cardsCardLvl}>1 lvl</p>
          <p className={styles.cardsCardRank}>Newcomer</p>
          <p className={styles.cardsCardSubTitle}>Cashback</p>
          <p className={styles.cardsCardPercent}>1%</p>
          <p className={styles.cardsCardSubTitle}>Total Wager</p>
          <p className={styles.cardsCardMoney}>
            <span>0</span> USDT
          </p>
          <p className={styles.cardsCardSubTitle}>Rank Bonus</p>
          <p className={styles.cardsCardMoney}>
            <span>0</span> USDT
          </p>
          <div className={styles.cardsCardDivider} />
          <p className={styles.cardsCardCheck}>
            <Checkmark /> Personalization
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> Daily task
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> Rakeback
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> BinibiCharge x1.0
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> Exclusive promotions
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> Vip club
          </p>
        </div>
        <div className={styles.cardsCard}>
          <div className={styles.cardsCardImage}>
            <Image src={lvl2} width={91} height={91} />
          </div>
          <p className={styles.cardsCardLvl}>2 lvl</p>
          <p className={styles.cardsCardRank}>Gambler I</p>
          <p className={styles.cardsCardSubTitle}>Cashback</p>
          <p className={styles.cardsCardPercent}>2%</p>
          <p className={styles.cardsCardSubTitle}>Total Wager</p>
          <p className={styles.cardsCardMoney}>
            <span>3000</span> USDT
          </p>
          <p className={styles.cardsCardSubTitle}>Rank Bonus</p>
          <p className={styles.cardsCardMoney}>
            <span>3</span> USDT
          </p>
          <div className={styles.cardsCardDivider} />
          <p className={styles.cardsCardCheck}>
            <Checkmark color="#4ED254" /> Personalization
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark color="#4ED254" /> Daily task
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> Rakeback
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> BinibiCharge x1.0
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> Exclusive promotions
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> Vip club
          </p>
        </div>
        <div className={styles.cardsCard}>
          <div className={styles.cardsCardImage}>
            <Image src={lvl3} width={91} height={91} />
          </div>
          <p className={styles.cardsCardLvl}>3 lvl</p>
          <p className={styles.cardsCardRank}>Gambler II</p>
          <p className={styles.cardsCardSubTitle}>Cashback</p>
          <p className={styles.cardsCardPercent}>1%</p>
          <p className={styles.cardsCardSubTitle}>Total Wager</p>
          <p className={styles.cardsCardMoney}>
            <span>0</span> USDT
          </p>
          <p className={styles.cardsCardSubTitle}>Rank Bonus</p>
          <p className={styles.cardsCardMoney}>
            <span>0</span> USDT
          </p>
          <div className={styles.cardsCardDivider} />
          <p className={styles.cardsCardCheck}>
            <Checkmark color="#4ED254" /> Personalization
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark color="#4ED254" /> Daily task
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark color="#4ED254" /> Rakeback
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> BinibiCharge x1.0
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> Exclusive promotions
          </p>
          <p className={styles.cardsCardCheck}>
            <Checkmark /> Vip club
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button>
          <Arrow />
        </button>
        <button>
          <Arrow />
        </button>
      </div>
    </section>
  );
};

const Checkmark = ({
  color,
  opacity,
}: {
  color?: string;
  opacity?: string;
}) => (
  <svg
    width="18"
    height="13"
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 4.75L7 10.75L16.5 1.25"
      stroke={color || `white`}
      strokeOpacity={opacity || `0.8`}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Arrow = () => (
  <svg
    width="11"
    height="18"
    viewBox="0 0 11 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1L2 9L10 17"
      stroke="white"
      strokeOpacity="0.8"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Levels;
