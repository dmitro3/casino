import React from 'react';
import Image from 'next/image';

import CashbackHero from 'src/assets/images/CashbackHero.png';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.imageContainer}>
        <Image src={CashbackHero} />
      </div>
      <div className={styles.textContainer}>
        <span>The most generous Cashback in i-Gaming</span>
        <p>
          Are you a blogger, have a large audience, many followers? We have a
          special offer for you - a unique affiliate program with bigger
          referral rewards. We will compile an individual program with special
          conditions. Contact our manager to discuss the terms -
          affiliate@betfury.io
        </p>
      </div>
    </section>
  );
};

export default Hero;
