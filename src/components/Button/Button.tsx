import React from 'react';

import styles from './Button.module.scss';

type Props = {
  label: string;
  icon?: React.ReactNode;
  customStyles?: any;
  onClick?: () => void;
};

const Button = ({ label, icon, customStyles, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`${styles.root} ${customStyles}`}>
      {label}
      {icon}
    </button>
  );
};

export default Button;
