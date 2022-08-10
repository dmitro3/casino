import React from 'react';
import Image from 'next/image';
import ProgressBar from '@ramonak/react-progress-bar';
import Link from 'next/link';

import Lightning from 'src/assets/images/Lightning.png';
import Bucket from 'src/assets/images/Bucket.png';
import Button from 'src/components/Button';
import { ArrowBackIcon } from 'src/assets/svg';
import styles from './ProfileCards.module.scss';

const ProfileCards = () => {
  return (
    <div className={styles.rootCardsContainer}>
      <section className={styles.cardsContainer}>
        <div className={styles.userRank}>
          <div className={styles.rankImage}>
            <Image src={Lightning} height={43} width={43} />
            <div className={styles.level}>
              <span>1</span>
            </div>
          </div>
          <div className={styles.rankStats}>
            <span>
              My rank: <span>Newcomer</span>
            </span>
            <ProgressBar
              bgColor="#FFFFFF1A"
              height="4px"
              className={styles.barContainer}
              isLabelVisible
              customLabel=" "
              completed={0}
            />
            <span className={styles.progressBarEnd}>🎁%</span>
            <Link href="/rank" passHref>
              <a href="/rank">
                <Button
                  label="See all ranks"
                  customStyles={styles.button}
                  rightIcon={<ArrowBackIcon />}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.userRank}>
          <div className={styles.rankImage}>
            <Image src={Bucket} height={43} width={43} />
          </div>
          <div className={styles.rankStats}>
            <span>My cashback</span>
            <p>2%</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileCards;
