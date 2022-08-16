import React from 'react';

import styles from './Button.module.scss';

type Props = {
  label: string;
  subText?: string;
  customStyles?: any;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const Button = ({
  label,
  subText,
  customStyles,
  onClick,
  leftIcon,
  rightIcon,
}: Props) => {
  return (
    <button onClick={onClick} className={`${styles.root} ${customStyles}`}>
      {leftIcon}
      <span>{label}</span>
      <p>{subText}</p>
      {rightIcon}
    </button>
  );
};

export default Button;
