import React from 'react';
import Image from 'next/image';

import cardData from 'src/components/NotificationDropdown/Cards/cardData';
import { ArrowDownIcon, MarkCheck } from 'src/assets/svg';
import ShowButton from 'src/components/ShowButton';
import styles from './Cards.module.scss';

const Cards = () => {
  return (
    <aside>
      {cardData.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <span>{card.date}</span>
            <div className={styles.cardHeaderNewTag}>
              <span>new</span>
            </div>
          </div>
          <span>{card.title}</span>
          <div className={styles.cardImage}>
            <Image src={card.image} width={313} height={140} />
          </div>
          <div className={styles.cardText}>
            <p>{card.description}</p>
            <div>
              <ShowButton title="Show all" customStyles={styles.showButton} />
            </div>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.cardFooterShow}>
              <span>Show all</span>
              <ArrowDownIcon color="#FCD535" height={10} width={10} />
            </div>
            <div className={styles.cardFooterMark}>
              <span>Mark as read</span>
              <MarkCheck />
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Cards;
