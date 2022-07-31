import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';
import {
  PersonIcon,
  MessageIcon,
  ArrowDownIcon,
  HeaderDownIcon,
  Logo,
} from 'src/assets/svg';
import usaFlag from 'src/assets/images/usaFlag.png';
import Button from 'src/components/Button';
import styles from './Header.module.scss';

const links = [
  {
    url: `/#`,
    label: `Home`,
    id: 1,
  },
  {
    url: `/#`,
    label: `Stuts`,
    id: 2,
    bubble: `new`,
  },
  {
    url: `/#`,
    label: `Adwards`,
    id: 3,
  },
  {
    url: `/#`,
    label: `Earn`,
    id: 4,
    dropdown: true,
  },
  {
    url: `/#`,
    label: `News`,
    id: 5,
  },
  {
    url: `/#`,
    label: `All games`,
    id: 6,
    dropdown: true,
  },
  {
    url: `/#`,
    label: `Boxes`,
    id: 7,
    dropdown: true,
  },
  {
    url: `/#`,
    label: `Activity`,
    id: 8,
    bubble: `soon`,
  },
];

const Header: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <Logo />
          <div className={styles.logoContainerLabel}>Binobi.com</div>
        </div>
        <ul className={styles.navigationContainer}>
          {links.map((link) => (
            <li key={link.id} className={styles.navigationContainerItem}>
              <Link passHref href={link.url}>
                <a href="/#" className={styles.navigationContainerItemLink}>
                  {link.label}
                </a>
              </Link>
              {link.bubble && (
                <div className={styles.speechBubble}>
                  {link.bubble}
                  <div className={styles.speechBubbleBlur} />
                </div>
              )}
              {link.dropdown && <HeaderDownIcon />}
            </li>
          ))}
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
