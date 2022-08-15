import React, { useState } from 'react';
import leftArrow from 'src/assets/images/leftArrow.png';
import rightArrow from 'src/assets/images/rightArrow.png';
import Image from 'next/image';
import styles from 'src/pages/blog/components/PageCounter/PageCounter.module.scss';

type Props = {
  item: number;
};

export const cardsData = [
  {
    item: 1,
    id: 1,
  },
  {
    item: 2,
    id: 2,
  },
  {
    item: 3,
    id: 3,
  },
  {
    item: 4,
    id: 4,
  },
  {
    item: 5,
    id: 5,
  },
  {
    item: 6,
    id: 6,
  },
  {
    item: 7,
    id: 7,
  },
];

const PageCounter = () => {
  const [isActive, setIsActive] = useState(cardsData[0]);

  const onChoice = (id: number) => {
    const newSelectedPage = cardsData.find((card) => card.id === id);
    setIsActive(newSelectedPage!);
  };
  return (
    <div className={styles.pageCounterContainer}>
      <div>
        <Image src={leftArrow} />
      </div>

      {cardsData.map((card) => (
        <button className={styles.button} onClick={() => onChoice(card.id)}>
          <div
            key={card.id}
            className={`${
              isActive.id === card.id
                ? styles.pageCounterContainerItemActive
                : styles.pageCounterContainerItem
            }`}
          >
            {card.item}
          </div>
        </button>
      ))}
      <div>
        <Image src={rightArrow} />
      </div>
    </div>
  );
};

export default PageCounter;
