import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import { useMediaQuery } from 'react-responsive';

import Blur from 'src/components/Blur';
import bitcoinLake from 'src/assets/images/bitcoin-lake.png';
import { SliderArrow } from 'src/assets/svg';
import styles from './Slider.module.scss';
import 'react-multi-carousel/lib/styles.css';

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

const SliderContainer = () => {
  const [responsive, setResponsive] = useState({
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  });
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: 1224px)` });

  useEffect(() => {
    if (isTabletOrMobile) {
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
  }, [isTabletOrMobile]);

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
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Carousel>
    </div>
  );
};

const SliderItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.itemTextContainer}>
        <p className={styles.itemTextMain}>Mining & Staking up to 100% APY</p>
        <p className={styles.itemTextSub}>binobi</p>
      </div>
      <div className={styles.itemImage}>
        <Blur color="#ADDA61" right filterRadius={90}>
          <Image src={bitcoinLake} />
        </Blur>
      </div>
    </div>
  );
};

export default SliderContainer;
