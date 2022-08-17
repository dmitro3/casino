import React from 'react';
import Image from 'next/image';

import Lightning from 'src/assets/images/Lightning.png';
import styles from './Tabs.module.scss';

const Tabs = () => {
  return (
    <section className={styles.tabRow}>
      <div className={styles.tab}>
        <div className={styles.tabHeader}>
          <Image src={Lightning} />
          <div className={styles.tabHeaderText}>
            <span>01</span>
            <span>Enjoy gaming</span>
          </div>
        </div>
        <div className={styles.tabArrow}>{`>`}</div>
        <p>
          Play your favorite games and raise your cashback accordingly to the
          Rank.
        </p>
      </div>
      <div className={styles.tab}>
        <div className={styles.tabHeader}>
          <Image src={Lightning} />
          <div className={styles.tabHeaderText}>
            <span>01</span>
            <span>Enjoy gaming</span>
          </div>
        </div>
        <div className={styles.tabArrow}>{`>`}</div>
        <p>
          Play your favorite games and raise your cashback accordingly to the
          Rank.
        </p>
      </div>
      <div className={styles.tab}>
        <div className={styles.tabHeader}>
          <Image src={Lightning} />
          <div className={styles.tabHeaderText}>
            <span>01</span>
            <span>Enjoy gaming</span>
          </div>
        </div>
        <div className={styles.tabArrow}>{`>`}</div>
        <p>
          Play your favorite games and raise your cashback accordingly to the
          Rank.
        </p>
      </div>
    </section>
  );
};

export default Tabs;
