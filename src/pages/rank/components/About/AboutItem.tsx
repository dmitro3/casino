import React, { FC } from 'react';

import styles from './About.module.scss';

type Props = {
  isOpened: boolean;
  title: string;
  text: string;
  onClick: () => void;
};

const AboutItem: FC<Props> = ({ isOpened, title, text, onClick }) => {
  return (
    <div
      className={styles.aboutItem}
      onClick={onClick}
      role="button"
      tabIndex={-1}
      onKeyDown={onClick}
    >
      <p>{title}</p>
      <div
        className={styles.aboutItemIcon}
        style={isOpened ? { transform: `rotate(180deg)` } : {}}
      >
        <ArrowIcon />
      </div>
      {isOpened && <p>{text}</p>}
    </div>
  );
};

const ArrowIcon = () => (
  <svg
    width="18"
    height="11"
    viewBox="0 0 18 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L9 9L17 1"
      stroke="#FCD535"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default AboutItem;
