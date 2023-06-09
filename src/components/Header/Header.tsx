import Link from 'next/link';
import React, { FC } from 'react';
import Image from 'next/image';
import {
  PersonIcon,
  ArrowDownIcon,
  HeaderDownIcon,
  Wallet,
} from 'src/assets/svg';
import usaFlag from 'src/assets/images/usaFlag.png';
import Logotype from 'src/assets/images/Logo.png';
import USflag from 'src/assets/images/USflag.png';
import UAflag from 'src/assets/images/UAflag.png';
import RUflag from 'src/assets/images/RUflag.png';
import Button from 'src/components/Button';
import Dropdown from 'src/components/Dropdown';
import UserDropdownButton from 'src/components/Header/components/UserDropDownButton';
import UserDropdownWindow from 'src/components/Header/components/UserDropdownWindow';
import WalletDropdownButton from 'src/components/Header/components/WalletDropdownButton';
import WalletDropdownWindow from 'src/components/Header/components/WalletDropdownWindow';
import NotificationDropdown from 'src/components/NotificationDropdown';
import MobileHeaderDropdown from 'src/components/MobileHeaderDropdown';
import EarnDropdown from 'src/components/EarnDropdown';
import NotificationWindow from 'src/components/NotificationWindow';
import ChatWindow from 'src/components/Chat/ChatWindow';
import ChatDropdown from 'src/components/Chat/ChatDropdown';
import { useMediaQuery } from 'react-responsive';
import styles from './Header.module.scss';

export const links = [
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
    dropdownIcon: true,
    dropdown: true,
    dropdownContent: <EarnDropdown />,
  },
  {
    url: `/blog`,
    label: `News`,
    id: 5,
  },
  {
    url: `/#`,
    label: `All games`,
    id: 6,
    dropdownIcon: true,
  },
  {
    url: `/#`,
    label: `Boxes`,
    id: 7,
    dropdownIcon: true,
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
  logout: () => void;
  toggleUserModal: () => void;
};

const Header: FC<Props> = ({
  isAuthenticated,
  toggleRegistrationModal,
  toggleSignInModal,
  logout,
  toggleUserModal,
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1160px)` });

  return (
    <div className={styles.root}>
      <div className={styles.contentContainer}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image src={Logotype} width={74} height={15} />
          </div>
        </Link>
        <ul className={styles.navigationContainer}>
          {links.map((link) => {
            if (link.dropdown) {
              return (
                <Dropdown
                  key={link.id}
                  buttonComponent={
                    <li
                      key={link.id}
                      className={styles.navigationContainerItem}
                    >
                      <Link passHref href={link.url}>
                        <a
                          href="/#"
                          className={styles.navigationContainerItemLink}
                        >
                          {link.label}
                        </a>
                      </Link>
                      {link.bubble && (
                        <div className={styles.speechBubble}>
                          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                          {/* @ts-ignore */}
                          {link.bubble}
                          <div className={styles.speechBubbleBlur} />
                        </div>
                      )}
                      {link.dropdownIcon && <HeaderDownIcon />}
                    </li>
                  }
                  dropdownComponent={<EarnDropdown />}
                  customButtonStyles={
                    styles.navigationContainerItemDropdownButton
                  }
                  customDropdownStyles={
                    styles.navigationContainerItemDropdownWindow
                  }
                />
              );
            }

            return (
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
                {link.dropdownIcon && <HeaderDownIcon />}
              </li>
            );
          })}
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
                  onLogout={logout}
                />
              }
              customDropdownContainerStyles={styles.userDropdown}
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
        <Dropdown
          buttonComponent={
            <div className={styles.selectLanguageImage}>
              <Image src={usaFlag} height={24} width={26} />
            </div>
          }
          dropdownComponent={
            <div className={styles.languageDropdownWindowContainer}>
              <Image src={RUflag} height={20} width={20} />
              <Image src={UAflag} height={20} width={20} />
            </div>
          }
          customButtonStyles={styles.languageDropdownButton}
          customDropdownStyles={styles.languageDropdownWindow}
        />
        {isMobile && (
          <Dropdown
            buttonComponent={
              <div className={styles.burgerMenuIcon}>
                <div />
                <div />
                <div />
              </div>
            }
            dropdownComponent={
              <MobileHeaderDropdown
                toggleSignInModal={toggleSignInModal}
                isAuthenticated={isAuthenticated}
                toggleRegistrationModal={toggleRegistrationModal}
                toggleUserModal={toggleUserModal}
                logout={logout}
              />
            }
            customWalletDropdownStyles={styles.windowDropdownHeader}
            customDropdownContainerStyles={styles.windowDropdownContainer}
          />
        )}
        {!isMobile && (
          <>
            <Dropdown
              buttonComponent={<NotificationWindow />}
              dropdownComponent={<NotificationDropdown />}
              customButtonStyles={styles.notificationButton}
              customDropdownStyles={styles.notificationWindow}
            />
            <Dropdown
              buttonComponent={<ChatWindow />}
              dropdownComponent={<ChatDropdown />}
              customButtonStyles={styles.chatButton}
              customDropdownStyles={styles.chatWindow}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
