import React from 'react';

import Button from 'src/components/Button';
import StatsTemplate from 'src/pages/account/components/Stats/StatsTemplate';
import { QuestionCircle, ArrowBackIcon, TetherToken } from 'src/assets/svg';
import styles from './StatsGaming.module.scss';

const StatsGaming = () => {
  return (
    <StatsTemplate
      label="Gaming Statictics"
      content={
        <div className={styles.statSectionContainer}>
          <div className={styles.statSection}>
            <div className={styles.statSectionLabel}>
              <span>Total Wagered</span>
              <QuestionCircle />
              <Button
                label="Все валюты"
                customStyles={styles.button}
                rightIcon={<ArrowBackIcon />}
              />
            </div>
            <div className={styles.statSectionBalance}>
              <TetherToken />
              <span>0.000000000</span>
            </div>
          </div>
          <div className={`${styles.statSection} ${styles.statSectionTwo}`}>
            <div className={styles.statSectionLabel}>
              <span>Total Wins</span>
            </div>
            <div className={styles.statSectionBalance}>
              <span>0</span>
            </div>
          </div>

          <div className={styles.line} />
          <div className={`${styles.statSection} ${styles.statSectionTwo}`}>
            <div className={styles.statSectionLabel}>
              <span>Total Bets</span>
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

export default StatsGaming;
