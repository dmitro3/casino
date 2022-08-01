import React from 'react';
import Image from 'next/image';

import Bucket from 'src/assets/images/Bucket.png';
import User from 'src/assets/images/User.png';
import Safe from 'src/assets/images/Safe.png';
import Lightning from 'src/assets/images/Lightning.png';
import ContentFooterCurrencyCard from 'src/pages/home/components/ContentFooter/ContentFooterCurrencyCard';

import Twelve from 'src/assets/images/Twelve.png';
import FifthyThree from 'src/assets/images/FifthyThree.png';

import CryptoNetworks from 'src/assets/images/CryptoNetworks.png';
import CryptoCurrencies from 'src/assets/images/CryptoCurrencies.png';
import BitcoinTwo from 'src/assets/images/BitcoinTwo.png';
import Ethereum from 'src/assets/images/Ethereum.png';
import BinanceChain from 'src/assets/images/BinanceChain.png';
import Tron from 'src/assets/images/Tron.png';
import Tether from 'src/assets/images/Tether.png';
import Biswap from 'src/assets/images/Biswap.png';
import Message from 'src/assets/images/Message.png';
import MessageTwo from 'src/assets/images/MessageTwo.png';
import Note from 'src/assets/images/Note.png';

import Link from 'next/link';
import ArrowBackIcon from 'src/assets/svg/ArrowBackIcon';
import styles from './ContentFooter.module.scss';

export const currencyCardData = [
  {
    id: 1,
    imageUrl: User,
    label: `PLAYING NOW`,
    price: `310`,
    width: 58,
    height: 40,
  },
  {
    id: 2,
    imageUrl: Safe,
    label: `JACKPOT`,
    price: `$ 11 861`,
    width: 53,
    height: 53,
  },
  {
    id: 3,
    imageUrl: Bucket,
    label: `TOTAL PAID`,
    price: `$ 115 470 792`,
    width: 60,
    height: 60,
  },
  {
    id: 4,
    imageUrl: Lightning,
    label: `BEST PLACED`,
    price: `33 535 175 577`,
    width: 54,
    height: 54,
  },
];

const ContentFooter = () => {
  return (
    <div className={styles.root}>
      <div className={styles.containerCards}>
        {currencyCardData.map((card) => (
          <ContentFooterCurrencyCard
            key={card.id}
            label={card.label}
            price={card.price}
            imageUrl={card.imageUrl}
            width={card.width}
            height={card.height}
          />
        ))}
      </div>
      <div className={styles.labelContainer}>
        <div className={styles.labelContainerImage}>
          <Image src={Twelve} width={30} height={32} layout="fixed" />
        </div>
        <div className={styles.labelContainerImage}>
          <Image src={CryptoNetworks} width={72} height={36} layout="fixed" />
        </div>
        <div className={styles.labelContainerImage}>
          <Image src={FifthyThree} width={36} height={32} layout="fixed" />
        </div>
        <div className={styles.labelContainerImage}>
          <Image src={CryptoCurrencies} width={81} height={42} layout="fixed" />
        </div>
        <div className={styles.labelContainerImage}>
          <Image src={BitcoinTwo} width={70} height={13} layout="fixed" />
        </div>
        <div className={styles.labelContainerImage}>
          <Image src={Ethereum} width={71} height={25} layout="fixed" />
        </div>
        <div className={styles.labelContainerImage}>
          <Image src={BinanceChain} width={135} height={22} layout="fixed" />
        </div>
        <div className={styles.labelContainerImage}>
          <Image src={Tron} width={64} height={21} layout="fixed" />
        </div>
        <div className={styles.labelContainerImage}>
          <Image src={Tether} width={78} height={25} layout="fixed" />
        </div>
        <div className={styles.labelContainerImage}>
          <Image src={Biswap} width={95} height={29} layout="fixed" />
        </div>

        <div className={styles.containerBtn}>
          <Link passHref href="sad">
            <a href="/#" className={styles.containerBtnText}>
              Show all
            </a>
          </Link>
          <ArrowBackIcon />
        </div>
      </div>
      <span className={styles.helpText}>Need help?</span>
      <div className={styles.footerContent}>
        <div className={styles.footerContentCard}>
          <div className={styles.footerContentCardImage}>
            <Image src={Message} width={68} height={51} layout="fixed" />
          </div>
          <div className={styles.footerContentCardDescription}>
            <span className={styles.footerContentCardLabel}>
              Chat help 24/7
            </span>
            <p>24/7 live chat support with our customer service specialists.</p>
            <div className={styles.containerBtn}>
              <Link passHref href="sad">
                <a href="/#" className={styles.containerBtnText}>
                  Start a chat
                </a>
              </Link>
              <ArrowBackIcon />
            </div>
          </div>
        </div>
        <div className={styles.footerContentCard}>
          <div className={styles.footerContentCardImage}>
            <Image src={MessageTwo} width={70} height={64} layout="fixed" />
          </div>
          <div className={styles.footerContentCardDescription}>
            <span className={styles.footerContentCardLabel}>FAQ</span>
            <p>
              Go to the FAQ section to learn more about the features and
              services offered.
            </p>
            <div className={styles.containerBtn}>
              <Link passHref href="sad">
                <a href="/#" className={styles.containerBtnText}>
                  Start a chat
                </a>
              </Link>
              <ArrowBackIcon />
            </div>
          </div>
        </div>
        <div className={styles.footerContentCard}>
          <div className={styles.footerContentCardImage}>
            <Image src={Note} width={56} height={74} layout="fixed" />
          </div>
          <div className={styles.footerContentCardDescription}>
            <span className={styles.footerContentCardLabel}>Blog</span>
            <p>Stay up to date with the latest news and comments.</p>
            <div className={styles.containerBtn}>
              <Link passHref href="sad">
                <a href="/#" className={styles.containerBtnText}>
                  Start a chat
                </a>
              </Link>
              <ArrowBackIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFooter;
