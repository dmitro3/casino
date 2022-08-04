import React, { FC } from 'react';

import styles from './TabTemplate.module.scss';

type Props = {
  label: string;
  text: string;
  mainIcon: React.ReactNode;
  subIcon?: React.ReactNode;
  subIconText?: string;
  tabContent: React.ReactNode;
  customStyles?: any;
  positive?: boolean;
};

const TabTemplate: FC<Props> = ({
  label,
  text,
  mainIcon,
  subIcon,
  subIconText,
  tabContent,
  customStyles,
  positive,
}) => {
  return (
    <div className={`${styles.root} ${customStyles || ``}`}>
      <div className={styles.labelWrapper}>
        {mainIcon}
        <span className={styles.label}>{label}</span>
        {subIcon}
        <span
          className={`${styles.subIconText} ${
            positive ? styles.subIconTextGreen : styles.subIconTextRed
          }`}
        >
          {subIconText}
        </span>
      </div>
      <div>
        <p className={styles.text}>{text}</p>
      </div>
      <div>{tabContent}</div>
    </div>
  );
};

export default TabTemplate;
