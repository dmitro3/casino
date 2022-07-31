import Link from 'next/link';
import React from 'react';
import Cube from 'src/assets/svg/Cube.svg';
import Image from 'next/image';
import {
  PersonIcon,
  MessageIcon,
  ArrowDownIcon,
  HeaderDownIcon,
} from 'src/assets/svg';
import usaFlag from 'src/assets/images/usaFlag.png';
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
            <div className={styles.speechBubbleBlur} />
            <div className={styles.speechBubble}>
              new
              <div className={styles.speechBubbleBlur} />
            </div>
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
            <HeaderDownIcon />
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
            <HeaderDownIcon />
          </li>
          <li className={styles.navigationContainerItem}>
            <Link href="/blog/hello-world">
              <a className={styles.navigationContainerItemLink}>Boxes</a>
            </Link>
            <HeaderDownIcon />
          </li>
          <li className={styles.navigationContainerItem}>
            <Link href="/blog/hello-world">
              <a className={styles.navigationContainerItemLink}>Activity</a>
            </Link>
            <div className={styles.speechBubble}>
              soon
              <div className={styles.speechBubbleBlur} />
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.controlContainer}>
        <Button label="Log in" customStyles={styles.loginButton} />
        <Button label="Register" icon={<PersonIcon />} />
        <div className={styles.selectLanguage}>
          <Image src={usaFlag} height={20} width={20} />
          <ArrowDownIcon />
        </div>
        <MessageIcon />
      </div>
    </div>
  );
};

export default Header;
