import React, { useEffect, useState } from 'react';
import Slider from 'src/pages/blog/components/Slider';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/blog/index.module.scss';
import Card from 'src/pages/blog/components/Card';
import PageCounter from 'src/pages/blog/components/PageCounter';
import SearchBar from 'src/pages/blog/components/SearchBar';
import BackButton from 'src/components/BackButton';
import { article } from 'src/api';

const Blog = () => {
  const [mounted, setMounted] = useState(false);
  const [articles, setArticles] = useState(
    [] as {
      title: string;
      subtitle: string;
      text: string;
      imageUrl: string;
      id: string;
      created_at: string;
    }[],
  );
  const [articlesCount, setArticlesCount] = useState(1);

  const getAllArticles = async (cursor: number, take: number) => {
    const res = await article.getArticles(cursor, take);
    setArticles(res);
  };

  const getAllArticlesCount = async () => {
    const res = await article.getArticlesCount();
    setArticlesCount(res.data);
  };
  useEffect(() => {
    getAllArticles(0, 9);
    getAllArticlesCount();
  }, []);

  const onPageChange = (pageNumber) => {};

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
          {articles.map((article) => (
            <Card
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
