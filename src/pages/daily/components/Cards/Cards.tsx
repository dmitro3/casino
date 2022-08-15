import React from 'react';
import Image from 'next/image';

import cardData from 'src/utils/dailyCardData';
import Gift from 'src/pages/daily/components/Cards/images/Gift.png';
import styles from './Cards.module.scss';

const Cards = () => {
  return (
    <section className={styles.container}>
      {cardData.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.cardImage}>
            <Image src={card.image} width={175} height={175} />
          </div>
          <div className={styles.cardText}>
            <span>{card.text}</span>
          </div>
          <div
            className={styles.cardProgressBar}
          >{`0/${card.progressGoal}`}</div>
          <div className={styles.cardTextSmall}>
            <span>Min. bet 0.0002 BTC</span>
          </div>
          <div className={styles.cardButton}>
            <Image src={Gift} width={19} height={19} />
            <span>0.00004 BTC</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
