import Link from 'next/link';
import React from 'react';
import Cube from 'src/assets/Cube.svg';
import Image from 'next/image';
import Person from 'src/assets/Person';
import Message from 'src/assets/Message';
import Button from '../Button';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <Image src={Cube} width={25} height={25} />
          <div className={styles.logoContainerLabel}>Binobi.com</div>
        </div>
        <ul className={styles.navigationContainer}>
          <li className={styles.navigationContainerItem}>
            <Link href="/">
              <a className={styles.navigationContainerItemLink}>Home</a>
            </Link>
          </li>
          <li className={styles.navigationContainerItem}>
            <Link href="/about">
              <a className={styles.navigationContainerItemLink}>Stuts</a>
            </Link>
          </li>
          <li className={styles.navigationContainerItem}>
            <Link href="/blog/hello-world">
              <a className={styles.navigationContainerItemLink}>Adwards</a>
            </Link>
          </li>
          <li className={styles.navigationContainerItem}>
            <Link href="/blog/hello-world">
              <a className={styles.navigationContainerItemLink}>Earn</a>
            </Link>
          </li>
          <li className={styles.navigationContainerItem}>
            <Link href="/blog/hello-world">
              <a className={styles.navigationContainerItemLink}>News</a>
            </Link>
          </li>
          <li className={styles.navigationContainerItem}>
            <Link href="/blog/hello-world">
              <a className={styles.navigationContainerItemLink}>All games</a>
            </Link>
          </li>
          <li className={styles.navigationContainerItem}>
            <Link href="/blog/hello-world">
              <a className={styles.navigationContainerItemLink}>Boxes</a>
            </Link>
          </li>
          <li className={styles.navigationContainerItem}>
            <Link href="/blog/hello-world">
              <a className={styles.navigationContainerItemLink}>Activity</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.controlContainer}>
        <Button label="Log in" />
        <Button label="Register" icon={<Person />} />
        <div className={styles.selectLanguage}>22</div>
        <Message />
      </div>
    </div>
  );
};

export default Header;
