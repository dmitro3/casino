import React from 'react';
import Image from 'next/image';

import Blur from 'src/components/Blur';
import HeroImage from 'src/assets/images/fairness-hero.png';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <span>HOW TO CHECK FAIRNESS?</span>
        <p>
          Every Lucky result on BetFury is absolutely random.
          <br /> Check it yourself!
        </p>
      </div>
      <div className={styles.heroImage}>
        <Blur color="#FCD53533">
          <Image src={HeroImage} width={546} height={265} />
        </Blur>
      </div>
    </section>
  );
};

export default Hero;
