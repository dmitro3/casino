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
  isPositive?: boolean;
};

const TabTemplate: FC<Props> = ({
  label,
  text,
  mainIcon,
  subIcon,
  subIconText,
  tabContent,
  customStyles,
  isPositive,
}) => {
  return (
    <div className={`${styles.root} ${customStyles || ``}`}>
      <div className={`${styles.labelWrapper}`}>
        <div>
          {mainIcon}
          <span className={styles.label}>{label}</span>
        </div>
        <div>
          {subIcon}
          <span
            className={`${styles.subIconText} ${
              isPositive ? styles.subIconTextGreen : styles.subIconTextRed
            }`}
          >
            {subIconText}
          </span>
        </div>
      </div>
      <div>
        <p className={styles.text}>{text}</p>
      </div>
      <div>{tabContent}</div>
    </div>
  );
};

export default TabTemplate;
