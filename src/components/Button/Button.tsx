import React from 'react';

import styles from './Button.module.scss';

type Props = {
  label: string;
  subText?: string;
  customStyles?: any;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: `submit` | `reset` | `button`;
};

const Button = ({
  label,
  subText,
  customStyles,
  onClick,
  leftIcon,
  rightIcon,
  type,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.root} ${customStyles}`}
    >
      {leftIcon}
      <span>{label}</span>
      {subText && <p>{subText}</p>}
      {rightIcon}
    </button>
  );
};

export default Button;
