import React from 'react';
import Blur from 'src/components/Blur';
import styles from 'src/pages/referral/components/ReferralBottomInfo/ReferralBottomInfo.module.scss';
import Image from 'next/image';
import BitcoinUp from 'src/assets/images/BitcoinUp.png';
import Link from 'next/link';

const ReferralBottomInfo = () => {
  return (
    <div className={styles.bottomContainer}>
      <div className={styles.bottomContainerImage}>
        <Blur color="#FCD535" bottom filterRadius={100}>
          <Image src={BitcoinUp} width={206} height={195} />
        </Blur>
      </div>
      <div className={styles.bottomContainerText}>
        <div className={styles.bottomContainerTextOne}>
          Are you a blogger, have a large audience, many followers? We have a
          special offer for you - a unique affiliate program with bigger
          referral rewards. We will compile an individual program with special
          conditions.
          <br /> Contact our manager to discuss the terms -
          <Link passHref href="sad">
            <a className={styles.bottomContainerLink} href="/#">
              affiliate@betfury.io
            </a>
          </Link>
        </div>
        <div className={styles.bottomContainerTextTwo}>
          Important: only those users who have passed the requirements of the
          manager and only after approval with the manager will be able to
          participate in the program.
        </div>
      </div>
    </div>
  );
};

export default ReferralBottomInfo;
