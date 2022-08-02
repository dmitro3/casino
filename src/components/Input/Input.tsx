import React, { FC } from 'react';
import { PasswordAyes } from 'src/assets/svg';

import styles from './Input.module.scss';

type Props = {
  placeholder: string;
  icon: React.ReactNode;
  customStyles?: any;
  password: boolean;
};

const Input: FC<Props> = ({ placeholder, icon, customStyles, password }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputIcon}>{icon}</div>
      <input
        placeholder={placeholder}
        className={`${styles.rootInput} ${customStyles}`}
      />
      <div className={styles.inputIconRight}>
        {password && <PasswordAyes />}
      </div>
    </div>
  );
};

export default Input;
