import React from 'react';
import Image from 'next/image';

import Bingo from 'src/assets/images/Bingo.png';
import Book from 'src/assets/images/Book.png';
import Cat from 'src/assets/images/Cat.png';
import Dice from 'src/assets/images/Dice.png';
import Button from 'src/components/Button';
import StatsTemplate from 'src/pages/account/components/Stats/StatsTemplate';
import { Gamepad } from 'src/assets/svg';
import styles from './StatsTop.module.scss';

const topGames = [
  {
    image: Bingo,
    id: 1,
  },
  {
    image: Book,
    id: 2,
  },
  {
    image: Cat,
    id: 3,
  },
  {
    image: Dice,
    id: 4,
  },
];

const StatsTop = () => {
  return (
    <StatsTemplate
      label="Top Played Games"
      customStyles={styles.root}
      content={
        <div className={styles.wrapper}>
          <div className={styles.cardsContainer}>
            {topGames.map((tabImg) => (
              <div /* className={styles.tabSectionSelectedImage} */>
                <Image
                  src={tabImg.image}
                  key={tabImg.id}
                  width={141}
                  height={192}
                />
              </div>
            ))}
          </div>
          <div className={styles.emptyTab}>
            <Gamepad />
            <Button label="All games" />
          </div>
        </div>
      }
    />
  );
};

export default StatsTop;
