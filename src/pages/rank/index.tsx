import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Hero from 'src/pages/rank/components/Hero';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/rank/index.module.scss';
import HowDoesItWork from 'src/pages/rank/components/HowDoesItWork';
import Levels from 'src/pages/rank/components/Levels';
import About from 'src/pages/rank/components/About';

const Rank: NextPage = () => {
  const router = useRouter();

  return (
    <MainLayout hasMaxWidth>
      <main className={styles.container}>
        <button
          type="button"
          className={styles.backButton}
          onClick={() => router.back()}
        >{`< Back`}</button>
        <Hero />
        <HowDoesItWork />
        <Levels />
        <About />
      </main>
    </MainLayout>
  );
};

export default Rank;
