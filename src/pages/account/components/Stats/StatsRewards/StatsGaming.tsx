import React from 'react';

import StatsTemplate from 'src/pages/account/components/Stats/StatsTemplate';
import styles from './StatsGaming.module.scss';

const StatsGaming = () => {
  return (
    <>
      <div className={styles.label}>
        <span>TOP Battle Rewards</span>
      </div>

      <StatsTemplate
        label=""
        customStyles={styles.container}
        content={
          <div>
            <span>There is no information yet</span>
          </div>
        }
      />
    </>
  );
};

export default StatsGaming;
