import React from 'react';
import { useMediaQuery } from 'react-responsive';

import StatsTemplate from 'src/pages/account/components/Stats/StatsTemplate';
import { TetherToken } from 'src/assets/svg';
import styles from './StatsActivity.module.scss';

const StatsActivity = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <StatsTemplate
      label="Activity"
      content={
        <div className={styles.statSectionContainer}>
          <div className={styles.statSection}>
            <div className={styles.statSectionLabel}>
              <span>Total Tips</span>
            </div>
            <div className={styles.statSectionBalance}>
              <TetherToken />
              <span>0.000000000</span>
            </div>
          </div>
          <div className={`${styles.statSection} ${styles.statSectionThree}`}>
            <div
              className={`${styles.statSectionLabel} ${styles.statSectionLabelTwo}`}
            >
              <span>Rains & Drops</span>
            </div>
            <div className={styles.statSectionBalance}>
              <span>0</span>
            </div>
          </div>

          {!isMobile && <div className={styles.lineTwo} />}
          <div className={`${styles.statSection} ${styles.statSectionTwo}`}>
            <div className={styles.statSectionLabel}>
              <span>Messages in chat</span>
            </div>
            <div className={styles.statSectionBalance}>
              <span>0</span>
            </div>
          </div>
        </div>
      }
      customStyles={styles.statsContent}
    />
  );
};

export default StatsActivity;
