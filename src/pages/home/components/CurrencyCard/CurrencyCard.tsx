import React, { FC } from 'react';
import Image from 'next/image';

import { PriceUpIcon } from 'src/assets/svg';
import styles from './CurrencyCard.module.scss';

type Props = {
  imageUrl: any;
  name: string;
  priceChange: string;
  currentPrice: string;
  volume: string;
};

const CurrencyCard: FC<Props> = ({
  imageUrl,
  name,
  priceChange,
  currentPrice,
  volume,
}) => {
  return (
    <div className={styles.currencyCard}>
      <div className={styles.currencyCardHeader}>
        <Image
          src={imageUrl}
          height={46}
          width={46}
          layout="fixed"
          className={styles.currencyCardImage}
        />
        <span className={styles.currencyCardName}>{name}</span>
        <span className={styles.currencyCardPriceChange}>{priceChange}</span>
      </div>
      <div className={styles.currencyCardContent}>
        <span className={styles.currencyCardPriceCurrent}>
          <PriceUpIcon /> {currentPrice}
        </span>
        <span
          className={styles.currencyCardVol}
        >{`24h Volume: ${volume}`}</span>
      </div>
    </div>
  );
};

export default CurrencyCard;
