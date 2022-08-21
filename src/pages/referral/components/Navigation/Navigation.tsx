import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import OverviewImage from 'src/assets/images/referral-overview.png';
import BalanceImage from 'src/assets/images/referral-balance.png';
import CampaingsImage from 'src/assets/images/referral-campaings.png';
import RefferalImage from 'src/assets/images/referral-referral.png';
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
      <Link passHref href="/referral">
        <a href="/#">
          <div
            className={styles.navTab}
            style={
              router.pathname === `/referral`
                ? { borderBottom: `1px solid #FCD535` }
                : {}
            }
          >
            <Image src={OverviewImage} height={25} width={25} />
            <span>Overview</span>
          </div>
        </a>
      </Link>
      <Link passHref href="/referral/balance">
        <a href="/#">
          <div
            className={styles.navTab}
            style={
              router.pathname === `/referral/balance`
                ? { borderBottom: `1px solid #FCD535` }
                : {}
            }
          >
            <Image src={BalanceImage} height={25} width={25} />
            <span>My balance</span>
          </div>
        </a>
      </Link>
      <Link passHref href="/referral/campaings">
        <a href="/#">
          <div
            className={styles.navTab}
            style={
              router.pathname === `/referral/campaings`
                ? { borderBottom: `1px solid #FCD535` }
                : {}
            }
          >
            <Image src={CampaingsImage} height={25} width={25} />
            <span>Campaings</span>
          </div>
        </a>
      </Link>
      <Link passHref href="/referral/ref">
        <a href="/#">
          <div
            className={styles.navTab}
            style={
              router.pathname === `/referral/ref`
                ? { borderBottom: `1px solid #FCD535` }
                : {}
            }
          >
            <Image src={RefferalImage} height={17} width={25} />
            <span>Referral</span>
          </div>
        </a>
      </Link>
    </section>
  );
};

export default Navigation;
