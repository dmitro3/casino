import React from 'react';
import Image from 'next/image';
import HeroBackground from 'src/assets/images/HeroBackground.png';
import Bitcoin from 'src/assets/images/Bitcoin.png';
import Button from 'src/components/Button';
import styles from './MainHero.module.scss';

const MainHero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <div className={styles.heroText}>
          <h1>Leading Crypto Casino</h1>
          <p>
            Enjoy 5000+ crypto games, fast payout and 24/7 live support. Make
            the best of the superior Bitcoin Casino.
          </p>
          <div className={styles.heroButtons}>
            <Button label="Sign up" customStyles={styles.button} />
            <div className={styles.heroAd}>
              <p>
                Spin Free Fury Wheel and Win up to <b>1 BTC</b>
              </p>
              <Image src={Bitcoin} width={49} height={49} layout="fixed" />
            </div>
          </div>
        </div>
        <div className={styles.heroBlurWrapper}>
          <div className={styles.heroBlur} />
          <Image src={HeroBackground} width={911} height={450} />
        </div>
      </div>
    </section>
  );
};

export default MainHero;
