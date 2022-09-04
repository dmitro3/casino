import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import styles from 'src/pages/blog/components/Card/Card.module.scss';
import moment from 'moment';

type Props = {
  id: string;
  imageUrl: string;
  secondLabel: string;
  date: string;
  text: string;
};

const Card = ({ id, imageUrl, secondLabel, date, text }: Props) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <Link href={`/article/${id}`} passHref>
      <div className={styles.cardContainer}>
        <div className={styles.cardContainerImage}>
          {isMobile ? (
            <Image
              loader={() => imageUrl}
              src={imageUrl}
              width={360}
              height={160}
            />
          ) : (
            <Image
              loader={() => imageUrl}
              src={imageUrl}
              width={400}
              height={180}
            />
          )}
        </div>
        <span>{secondLabel}</span>
        <p>{text.replace(/<[^>]+>/g, ``).substring(0, 145)}</p>
        <p>{moment(date).format(`YYYY-MM-DD`)}</p>
      </div>
    </Link>
  );
};

export default Card;
