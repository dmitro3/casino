import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';
import {
  PersonIcon,
  MessageIcon,
  ArrowDownIcon,
  HeaderDownIcon,
  Logo,
  Wallet,
} from 'src/assets/svg';
import usaFlag from 'src/assets/images/usaFlag.png';
import Button from 'src/components/Button';
import Dropdown from 'src/components/Dropdown';
import UserDropdownButton from 'src/components/Header/components/UserDropDownButton';
import UserDropdownWindow from 'src/components/Header/components/UserDropdownWindow';
import WalletDropdownButton from 'src/components/Header/components/WalletDropdownButton';
import WalletDropdownWindow from 'src/components/Header/components/WalletDropdownWindow';
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

type Props = {
  toggleRegistrationModal: () => void;
  toggleSignInModal: () => void;
  isAuthenticated?: boolean;
  toggleIsAuthenticated?: () => void;
  toggleUserModal: () => void;
};

const Header: FC<Props> = ({
  isAuthenticated,
  toggleRegistrationModal,
  toggleSignInModal,
  toggleIsAuthenticated,
  toggleUserModal,
}) => {
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
        {isAuthenticated ? (
          <>
            <Dropdown
              buttonComponent={<WalletDropdownButton />}
              dropdownComponent={<WalletDropdownWindow />}
              customButtonStyles={styles.walletDropdown}
              customWalletDropdownStyles={styles.windowDropdown}
            />
            <Button
              label="Wallet"
              leftIcon={<Wallet />}
              customStyles={styles.wallet}
            />
            <Dropdown
              buttonComponent={<UserDropdownButton />}
              dropdownComponent={
                <UserDropdownWindow
                  toggleUserModal={toggleUserModal}
                  onLogout={toggleIsAuthenticated}
                />
              }
              customUserDropdownStyles={styles.userWindowDropdown}
            />
          </>
        ) : (
          <>
            <Button
              label="Log in"
              customStyles={styles.loginButton}
              onClick={toggleSignInModal}
            />
            <Button
              label="Register"
              customStyles={styles.registerButton}
              rightIcon={<PersonIcon color="#000" />}
              onClick={toggleRegistrationModal}
            />
          </>
        )}

        <div className={styles.selectLanguage}>
          <Image src={usaFlag} height={24} width={24} />
          <ArrowDownIcon />
        </div>
        <div className={styles.burgerMenuIcon}>
          <div />
          <div />
          <div />
        </div>
        <MessageIcon />
      </div>
    </div>
  );
};

export default Header;
