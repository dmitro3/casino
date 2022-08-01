import React from 'react';

import styles from './Button.module.scss';

type Props = {
  label: any;
  icon?: React.ReactNode;
  customStyles?: any;
  onClick?: () => void;
  isIconFirst?: boolean;
};

const Button = ({ label, icon, customStyles, onClick, isIconFirst }: Props) => {
  return (
    <button onClick={onClick} className={`${styles.root} ${customStyles}`}>
      {/* {label}
      {icon} */}
      {isIconFirst ? (
        <>
          {icon} {label}
        </>
      ) : (
        <>
          {label} {icon}
        </>
      )}
    </button>
  );
};

export default Button;
