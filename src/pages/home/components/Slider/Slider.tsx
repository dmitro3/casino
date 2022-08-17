import React, { FC, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Carousel from 'react-multi-carousel';
import { useMediaQuery } from 'react-responsive';

import Blur from 'src/components/Blur';
import bitcoinLake from 'src/assets/images/bitcoin-lake.png';
import rocket from 'src/assets/images/rocket.png';
import bitcoinIsland from 'src/assets/images/bitcoinIsland.png';
import ShowButton from 'src/components/ShowButton';
import { ArrowBackIcon, SliderArrow } from 'src/assets/svg';
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

const sliderItems = [
  {
    image: bitcoinLake,
    text: (
      <p className={styles.itemTextMain}>Mining & Staking up to 100% APY</p>
    ),
    color: `#C4E277`,
    filterRadius: 100,
    id: 1,
    height: 120,
    width: 170,
  },
  {
    image: rocket,
    text: (
      <p className={styles.itemTextMain}>Leading Crypto Casino. Our Charge</p>
    ),
    color: `#D94D63`,
    filterRadius: 90,
    id: 2,
    height: 180,
    width: 210,
  },
  {
    image: bitcoinIsland,
    text: (
      <p className={styles.itemTextMain}>
        Cashback up to <span>25%</span>
      </p>
    ),
    color: `#E9C600`,
    filterRadius: 80,
    id: 3,
    height: 120,
    width: 120,
  },
  {
    image: bitcoinLake,
    text: (
      <p className={styles.itemTextMain}>Mining & Staking up to 100% APY</p>
    ),
    color: `#C4E277`,
    filterRadius: 100,
    id: 4,
    height: 120,
    width: 170,
  },
  {
    image: rocket,
    text: (
      <p className={styles.itemTextMain}>Leading Crypto Casino. Our Charge</p>
    ),
    color: `#D94D63`,
    filterRadius: 90,
    id: 5,
    height: 180,
    width: 210,
  },
  {
    image: bitcoinIsland,
    text: (
      <p className={styles.itemTextMain}>
        Cashback up to <span>25%</span>
      </p>
    ),
    color: `#E9C600`,
    filterRadius: 80,
    id: 6,
    height: 120,
    width: 120,
  },
];

type SliderItemProps = {
  image: StaticImageData;
  text: React.ReactNode;
  color: string;
  filterRadius: number;
  width: number;
  height: number;
};

const SliderItem: FC<SliderItemProps> = ({
  image,
  text,
  color,
  filterRadius,
  width,
  height,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemTextContainer}>
        {text}
        <p className={styles.itemTextSub}>binobi</p>
      </div>
      <div className={styles.itemImage}>
        <Blur color={color} right filterRadius={filterRadius}>
          <Image src={image} width={width} height={height} />
        </Blur>
      </div>
    </div>
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
        {sliderItems.map((item) => (
          <SliderItem
            image={item.image}
            text={item.text}
            color={item.color}
            filterRadius={item.filterRadius}
            width={item.width}
            height={item.height}
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
