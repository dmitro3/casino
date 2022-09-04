import React, { FC, useState } from 'react';
import leftArrow from 'src/assets/images/leftArrow.png';
import rightArrow from 'src/assets/images/rightArrow.png';
import Image from 'next/image';
import styles from 'src/pages/blog/components/PageCounter/PageCounter.module.scss';

type Props = {
  pageCount: number;
  onPageChange: (pageNumber: number) => void;
};

const PageCounter: FC<Props> = ({ pageCount, onPageChange }) => {
  const [isActive, setIsActive] = useState(0);

  const onPageClick = (id: number) => {
    setIsActive(id);
    onPageChange(id);
  };

  return (
    <div className={styles.pageCounterContainer}>
      <div>
        <Image src={leftArrow} />
      </div>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {[...Array(Math.ceil(pageCount || 1)).keys()].map((card) => (
        <button className={styles.button} onClick={() => onPageClick(card)}>
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
