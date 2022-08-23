import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { PasswordAyes } from 'src/assets/svg';

import styles from './Input.module.scss';

type Props = FieldRenderProps<string, any> & {
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
  meta,
  input,
}) => {
  console.log(meta && meta.error);
  return (
    <div className={`${styles.inputContainer}  ${customContainerStyles}`}>
      <div className={styles.inputIcon}>{icon}</div>
      <input
        placeholder={placeholder}
        className={`${styles.rootInput} ${customStyles}`}
        value={value}
        disabled={disabled}
        {...input}
      />
      <div className={styles.inputIconRight}>
        {password && <PasswordAyes />}
      </div>
      {additionalButton && (
        <div className={styles.additionalButton}>{additionalButton}</div>
      )}
      {meta && meta.error && meta.touched && <div>{meta.error}</div>}
    </div>
  );
};

export default Input;
