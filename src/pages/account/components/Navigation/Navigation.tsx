import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AccountImage from 'src/assets/images/AccountImage.png';
import History from 'src/assets/images/History.png';
import Sessions from 'src/assets/images/Sessions.png';
import Transactions from 'src/assets/images/Transactions.png';
import Blur from 'src/components/Blur';
import { useRouter } from 'next/router';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const router = useRouter();
  return (
    <section className={styles.accountNavBar}>
      <Link passHref href="/account">
        <a href="/#">
          <div className={styles.navTab}>
            {router.pathname === `/account` ? (
              <Blur color="#FCD535" bottom filterRadius={50}>
                <Image src={AccountImage} height={45} width={45} />
              </Blur>
            ) : (
              <Image src={AccountImage} height={45} width={45} />
            )}

            <span>My Account</span>
          </div>
        </a>
      </Link>
      <Link passHref href="/account/transactions">
        <a href="/#">
          <div className={styles.navTab}>
            {router.pathname === `/account/transactions` ? (
              <Blur color="#FCD535" bottom filterRadius={50}>
                <Image src={Transactions} height={45} width={45} />
              </Blur>
            ) : (
              <Image src={Transactions} height={45} width={45} />
            )}
            <span>Transactions</span>
          </div>
        </a>
      </Link>
      <Link passHref href="/account/gameHistory">
        <a href="/#">
          <div className={styles.navTab}>
            {router.pathname === `/account/gameHistory` ? (
              <Blur color="#FCD535" bottom filterRadius={50}>
                <Image src={History} height={45} width={45} />
              </Blur>
            ) : (
              <Image src={History} height={45} width={45} />
            )}
            <span>Game History</span>
          </div>
        </a>
      </Link>
      <Link passHref href="/account/sessions">
        <a href="/#">
          <div className={styles.navTab}>
            {router.pathname === `/account/sessions` ? (
              <Blur color="#FCD535" bottom filterRadius={50}>
                <Image src={Sessions} height={45} width={45} />
              </Blur>
            ) : (
              <Image src={Sessions} height={45} width={45} />
            )}
            <span>Sessions</span>
          </div>
        </a>
      </Link>
    </section>
  );
};

export default Navigation;
