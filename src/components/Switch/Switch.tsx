import React, { useState } from 'react';

import styles from './Switch.module.scss';

const Switch = () => {
  const [isHandleOn, setIsHandleOn] = useState(true);

  const onSwitch = () => {
    setIsHandleOn(!isHandleOn);
  };

  return (
    <button className={styles.button} onClick={onSwitch}>
      {isHandleOn ? (
        <div className={`${styles.switchBody} ${styles.switchBodyOn}`}>
          <div className={styles.switchHandleOn} />
        </div>
      ) : (
        <div className={`${styles.switchBody} ${styles.switchBodyOff}`}>
          <div className={styles.switchHandleOff} />
        </div>
      )}
    </button>
  );
};

export default Switch;
