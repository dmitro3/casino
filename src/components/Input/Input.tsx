import React, { FC } from 'react';
import { PasswordAyes } from 'src/assets/svg';

import styles from './Input.module.scss';

type Props = {
  placeholder?: string;
  icon?: React.ReactNode;
  customStyles?: any;
  customContainerStyles?: any;
  password?: boolean;
  value?: string;
  disabled?: boolean;
  additionalButton?: React.ReactNode;
};

const Input: FC<Props> = ({
  placeholder,
  icon,
  customStyles,
  customContainerStyles,
  password,
  value,
  disabled,
  additionalButton,
}) => {
  return (
    <div className={`${styles.inputContainer}  ${customContainerStyles}`}>
      <div className={styles.inputIcon}>{icon}</div>
      <input
        placeholder={placeholder}
        className={`${styles.rootInput} ${customStyles}`}
        value={value}
        disabled={disabled}
      />

      <div className={styles.inputIconRight}>
        {password && <PasswordAyes />}
      </div>
      {additionalButton && (
        <div className={styles.additionalButton}>{additionalButton}</div>
      )}
    </div>
  );
};

export default Input;
