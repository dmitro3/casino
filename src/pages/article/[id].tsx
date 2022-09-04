import React, { useEffect, useState } from 'react';
import Card from 'src/pages/blog/components/Card';
import { useMediaQuery } from 'react-responsive';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/article/index.module.scss';
import Image from 'next/image';

import BackButton from 'src/components/BackButton';
import {
  DiscordIcon,
  Eye,
  FacebookIcon,
  InstagramIcon,
  Like,
  TelegramIcon,
  TikTokIcon,
  TwitterIcon,
} from 'src/assets/svg';
import { article as articleApi } from 'src/api';
import { useRouter } from 'next/router';
import moment from 'moment';

const Article = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1100px)` });
  const [articleData, setArticleData] = useState(
    {} as {
      id: string;
      title: string;
      subtitle: string;
      text: string;
      imageUrl: string;
      created_at: string;
      viewsCount: string;
      likesCount: string;
    },
  );
  const [articles, setArticles] = useState(
    [] as {
      id: string;
      title: string;
      subtitle: string;
      text: string;
      imageUrl: string;
      created_at: string;
      viewsCount: string;
      likesCount: string;
    }[],
  );
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const getArticle = async (articleId: string) => {
    const res = await articleApi.getSingleArticle(articleId);
    setArticleData(res);
  };

  const getArticles = async (cursor: number, take: number) => {
    const res = await articleApi.getArticles(cursor, take);
    setArticles(res);
  };

  useEffect(() => {
    if (id && typeof id === `string`) {
      getArticle(id);
    }
    getArticles(0, 4);
  }, [id]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <div className={styles.backButtoncontainer}>
          <BackButton />
          <div className={styles.containerLabel}>Blog BINOBI</div>
        </div>
        {Object.keys(articleData).length !== 0 && (
          <div className={styles.main}>
            <div className={styles.mainContainer}>
              <div className={styles.containerContant}>
                <div className={styles.containerContantFirst}>
                  <div className={styles.containerContantTitle}>
                    <span>{articleData.title}</span>
                    <p>{moment(articleData.created_at).format(`YYYY-MM-DD`)}</p>
                  </div>

                  {isMobile && (
                    <div>
                      <div className={styles.counterContainer}>
                        <div className={styles.counterContainerLikes}>
                          <Like />
                          <div>231</div>
                        </div>
                        <div className={styles.counterContainerViews}>
                          <Eye />
                          <div>231</div>
                        </div>
                      </div>
                      <div className={styles.iconContainer}>
                        <p>Поделиться</p>
                        <div className={styles.iconContainerItems}>
                          <DiscordIcon />
                          <TelegramIcon />
                          <FacebookIcon />
                          <TikTokIcon />
                          <InstagramIcon />
                          <TwitterIcon />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={styles.text}>
                    {articleData.subtitle}
                    <br />
                    <br />
                  </div>
                  {isMobile ? (
                    <Image
                      loader={() => articleData.imageUrl}
                      src={articleData.imageUrl}
                      width={732}
                      height={331}
                    />
                  ) : (
                    <Image
                      loader={() => articleData.imageUrl}
                      src={articleData.imageUrl}
                      width={732}
                      height={331}
                    />
                  )}
                  <div
                    className={styles.text}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: articleData.text }}
                  />
                </div>
                {!isMobile && (
                  <div className={styles.cardContent}>
                    <div>
                      <div className={styles.counterContainer}>
                        <div className={styles.counterContainerLikes}>
                          <Like />
                          <div>231</div>
                        </div>
                        <div className={styles.counterContainerViews}>
                          <Eye />
                          <div>231</div>
                        </div>
                      </div>
                      <div className={styles.iconContainer}>
                        <p>Поделиться</p>
                        <div className={styles.iconContainerItems}>
                          <DiscordIcon />
                          <TelegramIcon />
                          <FacebookIcon />
                          <TikTokIcon />
                          <InstagramIcon />
                          <TwitterIcon />
                        </div>
                      </div>
                    </div>

                    <div className={styles.cardContainer}>
                      {articles &&
                        articles.map((article) => (
                          <Card
                            key={article.id}
                            id={article.id}
                            imageUrl={article.imageUrl}
                            secondLabel={article.title}
                            date={article.created_at}
                            text={article.text}
                          />
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {isMobile && <div className={styles.cardLabel}>Read also</div>}
        {isMobile && (
          <div>
            <div className={styles.cardContainer}>
              {articles &&
                articles.map((article) => (
                  <Card
                    key={article.id}
                    id={article.id}
                    imageUrl={article.imageUrl}
                    secondLabel={article.title}
                    date={article.created_at}
                    text={article.text}
                  />
                ))}
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Article;
