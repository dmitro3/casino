import type { NextPage } from 'next';
import HomeContainer from 'src/pages/home';
import React from 'react';
import MainLayout from '../components/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomeContainer />
    </MainLayout>
  );
};

export default Home;
