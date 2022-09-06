import React, { FC, useEffect, useState } from 'react';
import { article } from 'src/api';

import styles from 'src/pages/blog/components/Slider/Slider.module.scss';
import Image from 'next/image';

import { cardData } from 'src/utils/articleData';
import { ArticleType } from 'src/types/articles';
import { Props } from 'next/script';
import Link from 'next/link';
import moment from 'moment';

const Slider = () => {
  const [currentCard, setCurrentCard] = useState({} as ArticleType);
  const [articles, setArticles] = useState([] as ArticleType[]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const currentCardIndex = articles.findIndex(
  //       (articleItem) => articleItem.id === currentCard.id,
  //     );
  //     console.log(currentCard, `currentCard`);
  //     if (currentCardIndex !== -1) {
  //       if (currentCardIndex < articles.length) {
  //         setCurrentCard(articles[currentCardIndex + 1]);
  //       } else {
  //         setCurrentCard(articles[0]);
  //       }
  //     }
  //   }, 1000); // in milliseconds
  //   return () => clearInterval(intervalId);
  // }, []);

  const getArticles = async (cursor: number, take: number) => {
    const res = await article.getArticles(cursor, take);
    setArticles(res);
    setCurrentCard(res[0]);
  };

  useEffect(() => {
    getArticles(0, 4);
  }, []);

  console.log(currentCard, `currentCard`);

  console.log(`articles`, articles);
  if (articles.length === 0) {
    return null;
  }

  return (
    // <Link href={`/article/${currentCard.id}`} passHref>
    <div className={styles.sliderContainer}>
      <Link href={`/article/${currentCard.id}`} passHref>
        <Image
          src={currentCard.imageUrl}
          loader={() => currentCard.imageUrl}
          width={580}
          height={260}
        />
      </Link>

      <div className={styles.sliderContainerDescription}>
        <p>{currentCard.title}</p>

        <span>
          {currentCard.text.length > 200
            ? `${currentCard.text.substring(0, 200)}...`
            : currentCard.text}
        </span>

        <div>
          {/* <span>{currentCard.created_at}</span> */}
          <span>{moment(currentCard.created_at).format(`YYYY-MM-DD`)}</span>
          <div>
            {articles.map((articleItem) => (
              <div
                key={articleItem.id}
                tabIndex={-1}
                role="button"
                onKeyDown={() => setCurrentCard(articleItem)}
                onClick={() => setCurrentCard(articleItem)}
              >
                <p
                  className={
                    articleItem.id === currentCard.id ? styles.active : ``
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Slider;
