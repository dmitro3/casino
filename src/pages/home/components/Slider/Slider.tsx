import React, { FC, useEffect, useState } from 'react';
import { ArticleType } from 'src/types/articles';
import Image, { StaticImageData } from 'next/image';
import Carousel from 'react-multi-carousel';
import { useMediaQuery } from 'react-responsive';
import { article } from 'src/api';
import Blur from 'src/components/Blur';
import bitcoinLake from 'src/assets/images/bitcoin-lake.png';
import rocket from 'src/assets/images/rocket.png';
import bitcoinIsland from 'src/assets/images/bitcoinIsland.png';
import ShowButton from 'src/components/ShowButton';
import { ArrowBackIcon, SliderArrow } from 'src/assets/svg';
import styles from './Slider.module.scss';
import 'react-multi-carousel/lib/styles.css';
import { url } from 'inspector';
import Link from 'next/link';

const LeftArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button className={styles.sliderArrowLeft} onClick={onClick}>
      <SliderArrow />
    </button>
  );
};

const RightArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button onClick={onClick} className={styles.sliderArrowRight}>
      <SliderArrow />
    </button>
  );
};

const CustomDot = ({
  onClick,
  active,
}: {
  onClick?: () => void;
  active?: boolean;
}) => {
  return (
    <button
      className={active ? styles.dotActive : styles.dotInactive}
      onClick={onClick}
    >
      {` `}
    </button>
  );
};

type SliderItemProps = {
  imageUrl: string;
  text: React.ReactNode;
  color?: string;
  filterRadius?: number;
  width?: number;
  height?: number;
  subtitle: string;
  id: string;
};

const SliderItem: FC<SliderItemProps> = ({
  id,
  imageUrl,
  text,
  subtitle,
  color,
  filterRadius,
  width,
  height,
}) => {
  return (
    <Link href={`/article/${id}`} passHref>
      <div
        className={styles.item}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={styles.itemTextContainer}>
          {text}
          <p className={styles.itemTextSub}>
            {subtitle.length > 70
              ? `${subtitle.substring(0, 70)}...`
              : subtitle}
          </p>
        </div>
        <div className={styles.itemImage}>
          {/* <Blur color={color} right filterRadius={filterRadius}> */}
          {/* <div>
      {` `}
      <Image
        loader={() => imageUrl}
        src={imageUrl}
        width={427}
        height={182}
      />
    </div> */}
          {/* </Blur> */}
        </div>
      </div>
    </Link>
  );
};

const SliderContainer = () => {
  const [responsive, setResponsive] = useState({
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  });
  const isLaptop = useMediaQuery({ query: `(max-width: 1224px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 1000px)` });

  useEffect(() => {
    if (isTablet) {
      setResponsive({
        desktop: {
          breakpoint: { max: 3000, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      });
    } else if (isLaptop) {
      setResponsive({
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
      });
    } else {
      setResponsive({
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1, // optional, default to 1.
        },
      });
    }
  }, [isLaptop, isTablet]);

  const [articles, setArticles] = useState([] as ArticleType[]);

  const getArticles = async (cursor: number, take: number) => {
    const res = await article.getArticles(cursor, take);
    setArticles(res);
  };

  console.log(articles, `articles`);

  useEffect(() => {
    getArticles(0, 6);
  }, []);

  return (
    <div className={styles.slider}>
      <Carousel
        additionalTransfrom={0}
        arrows
        ssr
        customDot={<CustomDot />}
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass={styles.slider}
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass={styles.sliderItem}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderDotsOutside
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        partialVisbile={false}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {articles.map((articleItem) => (
          <SliderItem
            id={articleItem.id}
            subtitle={articleItem.subtitle}
            key={articleItem.id}
            imageUrl={articleItem.imageUrl}
            text={articleItem.title}
            // color={articles.color}
            // filterRadius={articles.filterRadius}
            // width={articles.width}
            // height={articles.height}
          />
        ))}
      </Carousel>
      <ShowButton
        title="Show all news"
        icon={<ArrowBackIcon />}
        customStyles={styles.showButton}
      />
    </div>
  );
};

export default SliderContainer;
