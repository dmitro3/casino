import React from 'react';
import { useRouter } from 'next/router';

import styles from './BackButton.module.scss';

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className={styles.backButton}
      onClick={() => router.back()}
    >{`< Back`}</button>
  );
};

export default BackButton;
