import React from 'react';
import Image from 'next/image';
import Hero from 'src/assets/Hero.png';
import Bitcoin from 'src/assets/Bitcoin.png';
import styles from './MainHero.module.scss';

const MainHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Leading Crypto Casino</h1>
        <p>
          Enjoy 5000+ crypto games, fast payout and 24/7 live support. Make the
          best of the superior Bitcoin Casino.
        </p>
        <div className={styles.heroButtons}>
          <button>Sign up</button>
          <div className={styles.heroAd}>
            <p>Spin Free Fury Wheel and Win up to 1 BTC</p>
            <Image src={Bitcoin} width={100} height={100} />
          </div>
        </div>
      </div>
      <div className={styles.heroBlurWrapper}>
        <div className={styles.heroBlur} />
        <Image src={Hero} width={500} height={500} />
      </div>
    </section>
  );
};

export default MainHero;
