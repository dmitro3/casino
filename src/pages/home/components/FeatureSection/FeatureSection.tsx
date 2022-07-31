import React from 'react';
import Image from 'next/image';

import FeatureSection1 from 'src/assets/images/FeatureSection1.png';
import FeatureSection2 from 'src/assets/images/FeatureSection2.png';
import FeatureSection3 from 'src/assets/images/FeatureSection3.png';
import FeatureSection4 from 'src/assets/images/FeatureSection4.png';
import FeatureSection5 from 'src/assets/images/FeatureSection5.png';
import FeatureSection6 from 'src/assets/images/FeatureSection6.png';
import FeatureSection7 from 'src/assets/images/FeatureSection7.png';
import styles from './FeatureSection.module.scss';

const FeatureSection = () => {
  return (
    <section className={styles.featureSection}>
      <div className={`${styles.featureCard} ${styles.one}`}>
        <span>Free to Play</span>
        <div className={styles.featureContent}>
          <p>Win Real Crypto by Free Play</p>
          <Image src={FeatureSection1} />
        </div>
      </div>
      <div className={`${styles.featureCard} ${styles.two}`}>
        <div className={styles.featureContent}>
          <p>Cashback up to 25%</p>
          <Image src={FeatureSection2} />
        </div>
      </div>
      <div className={`${styles.featureCard} ${styles.three}`}>
        <span>Free to Play</span>
        <div className={styles.featureContent}>
          <p>Rakeback</p>
          <Image src={FeatureSection3} />
        </div>
      </div>
      <div className={`${styles.featureCard} ${styles.four}`}>
        <span>Free to Play</span>
        <div className={styles.featureContent}>
          <p>Spin to Get Free Crypto</p>
        </div>
      </div>
      <div className={`${styles.featureCard} ${styles.five}`}>
        <span>Free to Play</span>
        <div className={styles.featureContent}>
          <p>Our Charge</p>
          <Image src={FeatureSection5} />
        </div>
      </div>
      <div className={`${styles.featureCard} ${styles.six}`}>
        <div className={styles.featureContent}>
          <p>Our Charge</p>
          <Image src={FeatureSection6} />
        </div>
      </div>
      <div className={`${styles.featureCard} ${styles.seven}`}>
        <div className={styles.featureContent}>
          <p>Mining & Staking up to 100% APY</p> <Image src={FeatureSection7} />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
