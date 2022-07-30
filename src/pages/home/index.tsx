import React, { FC } from 'react';

import { currencyData } from 'src/utils/mockData';
import CurrencyCard from 'src/pages/home/components/CurrencyCard';
import MainHero from './components/MainHero';
import styles from './index.module.scss';

const HomeContainer: FC = () => {
  return (
    <>
      <MainHero />
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
    </>
  );
};

export default HomeContainer;
