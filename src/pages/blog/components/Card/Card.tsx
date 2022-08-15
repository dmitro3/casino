import React from 'react';
import Image from 'next/image';
import styles from 'src/pages/blog/components/Card/Card.module.scss';
import BigSpaceX from 'src/assets/images/BigSpaceX.png';

type Props = {
  label: string;
  text: string;
  imageUrl: any;
  secondLabel: string;
  postData: string;
  color: string;
  percent?: string;
  width?: number;
  height?: number;
};

const Card = ({
  label,
  text,
  imageUrl,
  secondLabel,
  postData,
  color,
  percent,
  height,
  width,
}: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContainerImage}>
        <Image src={imageUrl} />
      </div>
      <span>{secondLabel}</span>
      <p>
        Знаетете ли вы, что существует более эффективный, безопасный и простой
        способ получения дохода от криптовалют? В этой статье мы расскажем,
        как...
      </p>
      <p>{postData}</p>
    </div>
  );
};

export default Card;
