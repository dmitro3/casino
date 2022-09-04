import React, { useEffect, useState } from 'react';
import Slider from 'src/pages/blog/components/Slider';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/blog/index.module.scss';
import Card from 'src/pages/blog/components/Card';
import PageCounter from 'src/pages/blog/components/PageCounter';
import SearchBar from 'src/pages/blog/components/SearchBar';
import BackButton from 'src/components/BackButton';
import { article as articleApi } from 'src/api';

const Blog = () => {
  const [mounted, setMounted] = useState(false);
  const [articles, setArticles] = useState(
    [] as {
      id: string;
      title: string;
      subtitle: string;
      text: string;
      imageUrl: string;
      created_at: string;
    }[],
  );
  const [articlesCount, setArticlesCount] = useState(1);

  const getArticles = async (cursor: number, take: number) => {
    const res = await articleApi.getArticles(cursor, take);
    setArticles(res);
  };

  const getAllArticlesCount = async () => {
    const res = await articleApi.getArticlesCount();
    setArticlesCount(res.data);
  };

  useEffect(() => {
    getArticles(0, 9);
    getAllArticlesCount();
  }, []);

  const onPageChange = (pageNumber: number) => {
    getArticles(pageNumber * 9, 9);
  };

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
          {articles &&
            articles.map((article) => (
              <Card
                id={article.id}
                imageUrl={article.imageUrl}
                secondLabel={article.title}
                date={article.created_at}
                text={article.text}
              />
            ))}
        </div>

        <PageCounter
          onPageChange={onPageChange}
          pageCount={articlesCount / 9}
        />
      </section>
    </MainLayout>
  );
};

export default Blog;
