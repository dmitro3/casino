import React from 'react';
import Image from 'next/image';

import Blur from 'src/components/Blur';
import FeatureSection1 from 'src/assets/images/FeatureSection1.png';
import FeatureSection2 from 'src/assets/images/FeatureSection2.png';
import FeatureSection3 from 'src/assets/images/FeatureSection3.png';
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
          <Blur color="#ED1D5B" bottom filterRadius={100}>
            <Image src={FeatureSection1} />
          </Blur>
        </div>
      </div>
      <div className={`${styles.featureCard} ${styles.two}`}>
        <div className={styles.featureContent}>
          <p>Cashback up to 25%</p>
          <Blur color="#E9C600" bottom right filterRadius={50}>
            <Image src={FeatureSection2} />
          </Blur>
        </div>
      </div>
      <div className={`${styles.featureCard} ${styles.three}`}>
        <span>Free to Play</span>
        <div className={styles.featureContent}>
          <p>Rakeback</p>
          <Blur color="#4800FF" bottom right filterRadius={40}>
            <Image src={FeatureSection3} />
          </Blur>
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
          <div className={styles.featureImg}>
            <Blur color="#D94D63" right filterRadius={50}>
              <Image src={FeatureSection5} />
            </Blur>
          </div>
        </div>
      </div>
      <div className={`${styles.featureCard} ${styles.six}`}>
        <div className={styles.featureContent}>
          <p>Our Charge</p>
          <div className={styles.featureImg}>
            <Blur color="#2283F6" right filterRadius={50}>
              <Image src={FeatureSection6} />
            </Blur>
          </div>
        </div>
      </div>
      <div className={`${styles.featureCard} ${styles.seven}`}>
        <div className={styles.featureContent}>
          <p>Mining & Staking up to 100% APY</p>
          <Blur color="#C4E277" filterRadius={70}>
            <Image src={FeatureSection7} />
          </Blur>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
