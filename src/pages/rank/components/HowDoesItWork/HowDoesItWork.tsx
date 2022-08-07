import React from 'react';
import Image from 'next/image';

import Blur from 'src/components/Blur';
import Transactions from 'src/assets/images/Transactions.png';
import rankTrophy from 'src/assets/images/rankTrophy.png';
import rankStar from 'src/assets/images/rankStar.png';

import Button from 'src/components/Button';
import styles from './HowDoesItWork.module.scss';

const HowDoesItWork = () => {
  return (
    <section className={styles.root}>
      <h3 className={styles.title}>How does it work?</h3>
      <p className={styles.subTitle}>
        You start your gaming way from the 1st Rank – NEWCOMER. The more you
        play – the higher your Rank is. It goes up according to the wagered
        amount while playing on BetFury
      </p>
      <div className={styles.cards}>
        <div className={styles.cardsCard}>
          <Blur
            color="fcd535"
            bottom
            left
            filterRadius={100}
            width="70%"
            height="70%"
          >
            <div className={styles.cardsCardHeader}>
              <Image src={Transactions} width={87} height={87} />
              <p>01</p>
            </div>
            <div className={styles.cardsCardContent}>
              <p>Login on binobi</p>
              <p>
                Use a simplified login system to enjoy all gaming experience on
                BetFury
              </p>
            </div>
          </Blur>
        </div>
        <ArrowIcon />
        <div className={styles.cardsCard}>
          <Blur
            color="fcd535"
            bottom
            left
            filterRadius={100}
            width="70%"
            height="70%"
          >
            <div className={styles.cardsCardHeader}>
              <Image src={rankTrophy} width={87} height={87} />
              <p>02</p>
            </div>
            <div className={styles.cardsCardContent}>
              <p>Play favorite games</p>
              <p>
                Enjoy playing, get the best gaming experience and high level of
                service!
              </p>
            </div>
          </Blur>
        </div>
        <ArrowIcon />
        <div className={styles.cardsCard}>
          <Blur
            color="fcd535"
            bottom
            left
            filterRadius={100}
            width="70%"
            height="70%"
          >
            <div className={styles.cardsCardHeader}>
              <Image src={rankStar} width={87} height={87} />
              <p>03</p>
            </div>
            <div className={styles.cardsCardContent}>
              <p>Increase tour rank</p>
              <p>
                Go up to the next Rank! Each level has its bonus and even more
                opportunities!
              </p>
            </div>
          </Blur>
        </div>
      </div>
      <Button label="Play Now" />
    </section>
  );
};

const ArrowIcon = () => (
  <svg
    width="84"
    height="84"
    viewBox="0 0 84 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_647_3928)">
      <circle cx="42" cy="38" r="32" fill="#1F2127" />
    </g>
    <path
      d="M37 28L47 37.5L37 47"
      stroke="#FCD535"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <defs>
      <filter
        id="filter0_d_647_3928"
        x="0"
        y="0"
        width="84"
        height="84"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_647_3928"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_647_3928"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default HowDoesItWork;
