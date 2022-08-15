import React from 'react';
import Slider from 'src/pages/blog/components/Slider';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/blog/index.module.scss';
import Card from 'src/pages/blog/components/Card';
import { cardData } from 'src/pages/blog/mockData';
import PageCounter from 'src/pages/blog/components/PageCounter';
import SearchBar from 'src/pages/blog/components/SearchBar';

const Blog = () => {
  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <Slider />
        <SearchBar />
        <div className={styles.cardContainer}>
          {cardData.map((card) => (
            <Card
              label={card.label}
              text={card.text}
              imageUrl={card.imageUrl}
              secondLabel={card.secondLabel}
              postData={card.postData}
              color={card.color}
              width={card.width}
              height={card.height}
              // percent={card.percent}
            />
          ))}
        </div>

        <PageCounter />
      </section>
    </MainLayout>
  );
};

export default Blog;
