import React, { FC } from 'react';

import styles from './StatsTemplate.module.scss';

type Props = {
  label: string;
  content?: React.ReactNode;
  customStyles?: any;
};

const StatsTemplate: FC<Props> = ({ label, content, customStyles }) => {
  return (
    <section className={styles.statsTemplate}>
      <span>{label}</span>
      <div className={`${styles.statsContent} ${customStyles || ``}`}>
        {content}
      </div>
    </section>
  );
};

export default StatsTemplate;
