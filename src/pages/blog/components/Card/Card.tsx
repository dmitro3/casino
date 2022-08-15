import React from 'react';
import Blur from 'src/components/Blur';
import Image from 'next/image';
import styles from 'src/pages/blog/components/Card/Card.module.scss';

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
        <div className={styles.cardContainerImageText}>
          <p>{label}</p>
          <p>{percent}</p>
          <span>binobi</span>
        </div>
        <Blur color={color}>
          <Image src={imageUrl} width={width} height={height} layout="fixed" />
        </Blur>
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
