import React from 'react';
import Link from 'next/link';

import { CardIcon, PeopleIcon, BankIcon, WalletIcon } from 'src/assets/svg';
import styles from './EarnDropdown.module.scss';

const EarnDropdown = () => {
  return (
    <div className={styles.container}>
      <Link passHref href="/aaa">
        <a href="/aaa">
          <div className={styles.rowContainer}>
            <div className={styles.iconContainer}>
              <BankIcon />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.textContainerHeader}>
                <span>Bank Deposit</span>
                <div className={styles.speechBubble}>
                  hot
                  <div className={styles.speechBubbleBlur} />
                </div>
              </div>
              <p>Deposit EUR via SEPA or card</p>
            </div>
          </div>
          {` `}
        </a>
      </Link>
      <Link passHref href="/aaa">
        <a href="/aaa">
          <div className={styles.rowContainer}>
            <div className={styles.iconContainer}>
              <CardIcon />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.textContainerHeader}>
                <span>Credit/Debit Card</span>
                <div className={styles.speechBubble}>
                  hot
                  <div className={styles.speechBubbleBlur} />
                </div>
              </div>
              <p>Buy crypto via card</p>
            </div>
          </div>
        </a>
      </Link>
      <Link passHref href="/aaa">
        <a href="/aaa">
          <div className={styles.rowContainer}>
            <div className={styles.iconContainer}>
              <WalletIcon />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.textContainerHeader}>
                <span>Cash Balance</span>
              </div>
              <p>Buy crypto with your EUR balance</p>
            </div>
          </div>
        </a>
      </Link>
      <Link passHref href="/aaa">
        <a href="/aaa">
          <div className={styles.rowContainer}>
            <div className={styles.iconContainer}>
              <PeopleIcon />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.textContainerHeader}>
                <span>P2P Trading</span>
              </div>
              <p>Bank transfer and 100+ options</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default EarnDropdown;
