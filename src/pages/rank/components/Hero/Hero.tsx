import React from 'react';
import Image from 'next/image';

import Blur from 'src/components/Blur';
import RankHero from 'src/assets/images/RankHero.png';
import rankCrown from 'src/assets/images/rankCrown.png';
import rankGift from 'src/assets/images/rankGift.png';
import rankRecycle from 'src/assets/images/rankRecycle.png';
import rankTrophy from 'src/assets/images/rankTrophy.png';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInfo}>
        <h3 className={styles.heroInfoTitle}>
          A lot of benefits with rank system
        </h3>
        <div className={styles.heroInfoBlock}>
          <Image src={rankTrophy} width={60} height={60} />
          <div>
            <p>Levels & Rewards</p>
            <p>The more you play - the more you gain</p>
          </div>
        </div>
        <div className={styles.heroInfoBlock}>
          <Image src={rankRecycle} width={60} height={60} />
          <div>
            <p>Levels & Rewards</p>
            <p>The more you play - the more you gain</p>
          </div>
        </div>
        <div className={styles.heroInfoBlock}>
          <Image src={rankGift} width={60} height={60} />
          <div>
            <p>Levels & Rewards</p>
            <p>The more you play - the more you gain</p>
          </div>
        </div>
        <div className={styles.heroInfoBlock}>
          <Image src={rankCrown} width={60} height={60} />
          <div>
            <p>Levels & Rewards</p>
            <p>The more you play - the more you gain</p>
          </div>
        </div>
      </div>
      <div className={styles.heroImage}>
        <div className={styles.heroImageContainer}>
          <Blur color="fcd535" filterRadius={150} width="50%" height="40%">
            <Image src={RankHero} width={322} height={406} />
          </Blur>
        </div>
      </div>
    </section>
  );
};

export default Hero;
