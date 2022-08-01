import React, { FC } from 'react';

import styles from './Input.module.scss';

type Props = {
  placeholder: string;
  icon: React.ReactNode;
  customStyles?: any;
};

const Input: FC<Props> = ({ placeholder, icon, customStyles }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputIcon}>{icon}</div>
      <input
        placeholder={placeholder}
        className={`${styles.rootInput} ${customStyles}`}
      />
    </div>
  );
};

export default Input;
