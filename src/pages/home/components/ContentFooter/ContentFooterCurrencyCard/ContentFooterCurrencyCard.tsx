import React from 'react';
import Image from 'next/image';

import Blur from 'src/components/Blur';
import styles from './ContentFooterCurrencyCard.module.scss';

type Props = {
  imageUrl: any;
  label: string;
  price: string;
  width: number;
  height: number;
};

const ContentFooterCurrencyCard = ({
  imageUrl,
  label,
  price,
  width,
  height,
}: Props) => {
  return (
    <div className={styles.root}>
      <Blur color=" #FCD535" bottom filterRadius={60}>
        <Image
          src={imageUrl}
          height={height}
          width={width}
          layout="fixed"
          className={styles.Card}
        />
      </Blur>
      <div>
        <p className={styles.cardLabel}>{label}</p>
        <p className={styles.cardPrice}>{price}</p>
      </div>
    </div>
  );
};

export default ContentFooterCurrencyCard;
