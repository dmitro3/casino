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
          <div
            className={styles.navTab}
            style={
              router.pathname === `/account`
                ? { borderBottom: `1px solid #FCD535` }
                : {}
            }
          >
            <Image src={AccountImage} height={25} width={25} />

            <span>My Account</span>
          </div>
        </a>
      </Link>
      <Link passHref href="/account/transactions">
        <a href="/#">
          <div
            className={styles.navTab}
            style={
              router.pathname === `/account/transactions`
                ? { borderBottom: `1px solid #FCD535` }
                : {}
            }
          >
            <Image src={Transactions} height={25} width={25} />
            <span>Transactions</span>
          </div>
        </a>
      </Link>
      <Link passHref href="/account/gameHistory">
        <a href="/#">
          <div
            className={styles.navTab}
            style={
              router.pathname === `/account/gameHistory`
                ? { borderBottom: `1px solid #FCD535` }
                : {}
            }
          >
            <Image src={History} height={25} width={25} />
            <span>Game History</span>
          </div>
        </a>
      </Link>
      <Link passHref href="/account/sessions">
        <a href="/#">
          <div
            className={styles.navTab}
            style={
              router.pathname === `/account/sessions`
                ? { borderBottom: `1px solid #FCD535` }
                : {}
            }
          >
            <Image src={Sessions} height={25} width={25} />
            <span>Sessions</span>
          </div>
        </a>
      </Link>
    </section>
  );
};

export default Navigation;
