import React from 'react';

import { TipIcon } from 'src/assets/svg';
import styles from './TipButton.module.scss';

const TipButton = () => {
  return (
    <button className={styles.tipButton}>
      <TipIcon />
      <span> Leave a tip</span>
    </button>
  );
};

export default TipButton;
