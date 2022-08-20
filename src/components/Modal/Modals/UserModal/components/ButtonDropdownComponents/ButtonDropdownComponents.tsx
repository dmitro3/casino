import React from 'react';
import { ArrowDownIcon, TetherToken } from 'src/assets/svg';
import styles from './ButtonDropdownComponents.module.scss';

const ButtonDropdownComponents = () => {
  return (
    <div className={styles.container}>
      <div>
        <TetherToken width={22} height={22} />
        <span>USDT</span>
      </div>
      <div>
        <ArrowDownIcon />
      </div>
    </div>
  );
};

export default ButtonDropdownComponents;
