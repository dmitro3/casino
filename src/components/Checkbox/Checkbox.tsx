/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styles from './Checkbox.module.scss';

type Props = {
  label: React.ReactNode;
  onClick?: () => void;
};

const Checkbox = ({ label, onClick }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label className={styles.root}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <span
        className={`${styles.checkmark} ${
          isChecked ? styles.checkmarkConfirm : ``
        }`}
      />
      {label}
    </label>
  );
};

export default Checkbox;
