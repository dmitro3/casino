import React, { FC, useState } from 'react';

import { currencyData } from 'src/utils/mockData';
import CurrencyCard from 'src/pages/home/components/CurrencyCard';
import MainHero from 'src/pages/home/components/MainHero';
import FeatureSection from 'src/pages/home/components/FeatureSection';
import Slider from 'src/pages/home/components/Slider';
import ContentFooter from 'src/pages/home/components/ContentFooter';
import TabSection from 'src/pages/home/components/TabSection';

import RegistrationModal from 'src/pages/home/components/RegistrationModal';
import SignInModal from 'src/pages/home/components/SignInModal';
import SuccessfulModal from 'src/pages/home/components/SuccessfulModal';
import styles from './index.module.scss';

const HomeContainer: FC = () => {
  const [registrationModalVisible, setRegistrationModalVisible] =
    useState(false);
  const [signInModalVisible, setSignInModalVisible] = useState(true);
  const [successfulModalVisible, setSuccessfulModalVisible] = useState(false);

  const toggleRegistrationModal = () => {
    setRegistrationModalVisible(!registrationModalVisible);
  };
  const toggleSignInModal = () => {
    setSignInModalVisible(!signInModalVisible);
  };

  const toggleSuccessfulModal = () => {
    setSuccessfulModalVisible(!successfulModalVisible);
  };

  return (
    <>
      <MainHero />
      <section className={styles.container}>
        <Slider />
        <section className={styles.currencyCardsWrapper}>
          {currencyData.map((card) => (
            <CurrencyCard
              key={card.id}
              imageUrl={card.imageUrl}
              name={card.name}
              priceChange={card.priceChange}
              currentPrice={card.currentPrice}
              volume={card.volume}
            />
          ))}
        </section>
        <FeatureSection />
        <TabSection />
        <ContentFooter />
        {registrationModalVisible && (
          <RegistrationModal toggleModal={toggleRegistrationModal} />
        )}
        {signInModalVisible && (
          <SignInModal toggleModal={toggleRegistrationModal} />
        )}
        {successfulModalVisible && (
          <SuccessfulModal toggleModal={toggleSuccessfulModal} />
        )}
      </section>
    </>
  );
};

export default HomeContainer;
