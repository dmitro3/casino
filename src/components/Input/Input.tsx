import React, { FC } from 'react';
import { PasswordAyes } from 'src/assets/svg';

import styles from './Input.module.scss';

type Props = {
  placeholder: string;
  icon: React.ReactNode;
  customStyles?: any;
  password?: boolean;
  value?: string;
  disabled?: boolean;
};

const Input: FC<Props> = ({
  placeholder,
  icon,
  customStyles,
  password,
  value,
  disabled,
}) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputIcon}>{icon}</div>
      <input
        placeholder={placeholder}
        className={`${styles.rootInput} ${customStyles}`}
        value={value}
        disabled={disabled}
        /* {{disabled} && disabled} */
      />
      <div className={styles.inputIconRight}>
        {password && <PasswordAyes />}
      </div>
    </div>
  );
};

export default Input;
