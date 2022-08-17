import React, { FC } from 'react';
import Link from 'next/link';

import styles from './ShowButton.module.scss';

type Props = {
  title: string;
  icon?: React.ReactNode;
  customStyles?: any;
};

const ShowButton: FC<Props> = ({ title, icon, customStyles }) => {
  return (
    <div className={`${styles.navButton} ${customStyles || ``}`}>
      <Link passHref href="sad">
        <a href="/#" className={styles.navButtonText}>
          {title}
        </a>
      </Link>
      {icon}
    </div>
  );
};

export default ShowButton;
