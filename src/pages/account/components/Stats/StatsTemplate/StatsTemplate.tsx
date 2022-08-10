import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './StatsTemplate.module.scss';

type Props = {
  label: string;
  content?: React.ReactNode;
  customStyles?: any;
};

const StatsTemplate: FC<Props> = ({ label, content, customStyles }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <section className={styles.statsTemplate}>
      {!isMobile && <span>{label}</span>}
      <div className={`${styles.statsContent} ${customStyles || ``}`}>
        {isMobile && (
          <div className={styles.label}>
            <span>{label}</span>
          </div>
        )}
        {content}
      </div>
    </section>
  );
};

export default StatsTemplate;
