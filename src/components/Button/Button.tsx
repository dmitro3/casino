import React from 'react';

import styles from './Button.module.scss';

type Props = {
  label: string;
  customStyles?: any;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const Button = ({
  label,
  customStyles,
  onClick,
  leftIcon,
  rightIcon,
}: Props) => {
  return (
    <button onClick={onClick} className={`${styles.root} ${customStyles}`}>
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  );
};

export default Button;
