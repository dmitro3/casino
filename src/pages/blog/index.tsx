import React, { useEffect, useState } from 'react';
import Slider from 'src/pages/blog/components/Slider';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/blog/index.module.scss';
import Card from 'src/pages/blog/components/Card';
import { cardData } from 'src/utils/articleData';
import PageCounter from 'src/pages/blog/components/PageCounter';
import SearchBar from 'src/pages/blog/components/SearchBar';
import BackButton from 'src/components/BackButton';

const Blog = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <div className={styles.backButtoncontainer}>
          <BackButton />
          <div className={styles.containerLabel}>Blog BINOBI</div>
        </div>
        <Slider />
        <SearchBar />
        <div className={styles.cardContainer}>
          {cardData.map((card) => (
            <Card
              imageUrl={card.imageUrl}
              secondLabel={card.secondLabel}
              postData={card.postData}
            />
          ))}
        </div>

        <PageCounter />
      </section>
    </MainLayout>
  );
};

export default Blog;
