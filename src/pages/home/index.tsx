import React, { FC } from 'react';

import { currencyData } from 'src/utils/mockData';
import CurrencyCard from 'src/pages/home/components/CurrencyCard';
import MainHero from 'src/pages/home/components/MainHero';
import FeatureSection from 'src/pages/home/components/FeatureSection';
import Slider from 'src/pages/home/components/Slider';
import ContentFooter from 'src/pages/home/components/ContentFooter';
import TabSection from 'src/pages/home/components/TabSection';
import styles from './index.module.scss';

const HomeContainer: FC = () => {
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
      </section>
    </>
  );
};

export default HomeContainer;
