import React from 'react';
import type { NextPage } from 'next';

import Hero from 'src/pages/rank/components/Hero';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/rank/index.module.scss';
import HowDoesItWork from 'src/pages/rank/components/HowDoesItWork';
import BackButton from 'src/components/BackButton';
import Levels from 'src/pages/rank/components/Levels';
import About from 'src/pages/rank/components/About';

const Rank: NextPage = () => {
  return (
    <MainLayout hasMaxWidth>
      <main className={styles.container}>
        <BackButton />
        <Hero />
        <HowDoesItWork />
        <Levels />
        <About />
      </main>
    </MainLayout>
  );
};

export default Rank;
