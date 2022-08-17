import React from 'react';
import Card from 'src/pages/blog/components/Card';
import Text from 'src/pages/article/components/Text';
import { useMediaQuery } from 'react-responsive';
import MainLayout from 'src/components/MainLayout';
import styles from 'src/pages/article/index.module.scss';

import { atricle } from 'src/utils/articleData';
import PageCounter from 'src/pages/blog/components/PageCounter';

import BackButton from 'src/components/BackButton';
import {
  DiscordIcon,
  Eye,
  FacebookIcon,
  InstagramIcon,
  Like,
  SpaceXIcon,
  TelegramIcon,
  TikTokIcon,
  TwitterIcon,
} from 'src/assets/svg';

const index = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 1100px)` });
  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <div className={styles.backButtoncontainer}>
          <BackButton />
          <div className={styles.containerLabel}>Blog BINOBI</div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainContainer}>
            <div className={styles.containerContant}>
              <div className={styles.containerContantFirst}>
                <div className={styles.containerContantTitle}>
                  <span>Поход Binobi к соблюдению требований</span>
                  <p>2022-03-16</p>
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
                <Text />
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
                    {atricle.map((card) => (
                      <Card
                        imageUrl={card.imageUrl}
                        secondLabel={card.secondLabel}
                        postData={card.postData}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {isMobile && <div className={styles.cardLabel}>Read also</div>}
        {isMobile && (
          <div>
            <div className={styles.cardContainer}>
              {atricle.map((card) => (
                <Card
                  imageUrl={card.imageUrl}
                  secondLabel={card.secondLabel}
                  postData={card.postData}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default index;
