import React, { useEffect, useState } from 'react';
import styles from 'src/pages/blog/components/Slider/Slider.module.scss';
import Image from 'next/image';

import { cardData } from 'src/utils/articleData';

const Slider = () => {
  const [currentCard, setCurrentCard] = useState(cardData[0]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const currentCardId = currentCard.id;
  //     if (currentCardId < 5) {
  //       setCurrentCard(cardData[currentCardId + 1]);
  //     } else {
  //       setCurrentCard(cardData[0]);
  //     }
  //   }, 1000); // in milliseconds
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className={styles.sliderContainer}>
      <Image src={currentCard.imageUrl} />
      <div className={styles.sliderContainerDescription}>
        <p>{currentCard.secondLabel}</p>
        <span>
          За последний год мы прошли долгий путь со взлетами и падениями,
          вызванными пандемией. В то время как большинство отраслей медленно
          востанавливаються, для экосистемы и индустрии блокчейна в целом 2021-й
          стал годом невероятного роста и...
        </span>
        <div>
          <span>{currentCard.postData}</span>

          <div>
            {cardData
              .filter((card) => card.id < 5)
              .map((card) => (
                <div
                  key={card.id}
                  tabIndex={-1}
                  role="button"
                  onKeyDown={() => setCurrentCard(card)}
                  onClick={() => setCurrentCard(card)}
                >
                  <p
                    className={card.id === currentCard.id ? styles.active : ``}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
