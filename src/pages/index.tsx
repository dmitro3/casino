import type { NextPage } from 'next';
import React from 'react';
import HomeContainer from './home/index';
import MainLayout from '../components/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout hasMaxWidth>
      <HomeContainer />
    </MainLayout>
  );
};

export default Home;
