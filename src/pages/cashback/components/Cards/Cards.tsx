import React from 'react';
import Image from 'next/image';

import cards from 'src/pages/cashback/components/Cards/cardData';
import styles from './Cards.module.scss';

const Cards = () => {
  return (
    <section className={styles.container}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.cardImage}>
            <Image src={card.image} height={65} width={65} />
          </div>
          <div className={styles.cardLevel}>{`${card.level} lvl`}</div>
          <div className={styles.cardRank}>{card.rank}</div>
          <div className={styles.cardPercent}>{`${card.percent}%`}</div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
