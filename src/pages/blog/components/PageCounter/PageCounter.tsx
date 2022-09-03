import React, { FC, useState } from 'react';
import leftArrow from 'src/assets/images/leftArrow.png';
import rightArrow from 'src/assets/images/rightArrow.png';
import Image from 'next/image';
import styles from 'src/pages/blog/components/PageCounter/PageCounter.module.scss';

type Props = {
  pageCount: number;
  onPageChange: () => void;
};

const PageCounter: FC<Props> = ({ pageCount, onPageChange }) => {
  const [isActive, setIsActive] = useState(0);

  const onChoice = (id: number) => {
    setIsActive(id!);
    onPageChange(id);
  };
  pageCount = Math.ceil(pageCount);
  return (
    <div className={styles.pageCounterContainer}>
      <div>
        <Image src={leftArrow} />
      </div>

      {[...Array(pageCount).keys()].map((card) => (
        <button className={styles.button} onClick={() => onChoice(card)}>
          <div
            key={card}
            className={`${
              isActive === card
                ? styles.pageCounterContainerItemActive
                : styles.pageCounterContainerItem
            }`}
          >
            {card + 1}
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
