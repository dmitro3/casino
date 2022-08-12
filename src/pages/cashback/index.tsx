import React from 'react';

import MainLayout from 'src/components/MainLayout';
import BackButton from 'src/components/BackButton';
import Hero from 'src/pages/cashback/components/Hero';
import Tabs from 'src/pages/cashback/components/Tabs';
import Cards from 'src/pages/cashback/components/Cards';
import About from 'src/pages/rank/components/About';
import Button from 'src/components/Button';
import styles from './index.module.scss';

const index = () => {
  return (
    <MainLayout>
      <BackButton />
      <div className={styles.mainHeader}>
        <span>Cashback</span>
      </div>
      <Hero />
      <section>
        <div className={styles.mainHeader}>
          <span>How does it work?</span>
        </div>
        <div className={styles.subText}>
          <p>
            You play - BetFury returns some lost coins back. This feature is
            available for everyone from the beginning of using the platform.
          </p>
          <Tabs />
        </div>
        <div className={styles.mainHeader}>
          <span>Cashback for rank</span>
        </div>
        <div className={styles.rankText}>
          <p>
            The more you play on BetFury - the higher Rank and Cashback amount
            you will get. The most active users may get 25% back and enjoy the
            excellent gaming experience with the best advantages
          </p>
          <Button label="Read more" customStyles={styles.button} />
        </div>
        <section>
          <Cards />
        </section>
        <About />
      </section>
    </MainLayout>
  );
};

export default index;
