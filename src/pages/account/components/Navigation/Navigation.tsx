import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AccountImage from 'src/assets/images/AccountImage.png';
import History from 'src/assets/images/History.png';
import Sessions from 'src/assets/images/Sessions.png';
import Transactions from 'src/assets/images/Transactions.png';
import Blur from 'src/components/Blur';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <section className={styles.accountNavBar}>
      <Link passHref href="aa">
        <a href="/#">
          <div className={styles.navTab}>
            <Blur color="#FCD535" bottom filterRadius={50}>
              <Image src={AccountImage} height={45} width={45} />
            </Blur>
            <span>My Account</span>
          </div>
        </a>
      </Link>
      <Link passHref href="aa">
        <a href="/#">
          <div className={styles.navTab}>
            <Image src={Transactions} height={45} width={45} />
            <span>Transactions</span>
          </div>
        </a>
      </Link>
      <Link passHref href="aa">
        <a href="/#">
          <div className={styles.navTab}>
            <Image src={History} height={45} width={45} />
            <span>Game History</span>
          </div>
        </a>
      </Link>
      <Link passHref href="aa">
        <a href="/#">
          <div className={styles.navTab}>
            <Image src={Sessions} height={45} width={45} />
            <span>Sessions</span>
          </div>
        </a>
      </Link>
    </section>
  );
};

export default Navigation;
