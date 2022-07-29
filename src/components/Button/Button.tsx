import React from 'react';

import Image from 'next/image';
import classnames from 'classnames';
import styles from './Button.module.scss';

type Props = {
  label: string;
  icon?: React.ReactNode;
  variant?: `primary` | `transparent`;
};

const Button = ({ label, icon, variant = `primary` }: Props) => {
  return (
    <button className={(classnames({ type: variant }), styles.root)}>
      {label}
      {icon}
    </button>
  );
};

export default Button;
