import type { NextPage } from 'next';
import React from 'react';
import HomeContainer from './Home';
import MainLayout from '../components/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeContainer />
    </MainLayout>
  );
};

export default Home;
