import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { PasswordAyes } from 'src/assets/svg';

import styles from './Input.module.scss';

type Props = FieldRenderProps<string, any> & {
  inputLabel?: string;
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
  inputLabel,
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
    <>
      {inputLabel && (
        <div className={styles.inputContainerBlockText}>
          <p>{inputLabel}</p>

          {meta && meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
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
      </div>
      {` `}
    </>
  );
};

export default Input;
