import React, { FC } from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
