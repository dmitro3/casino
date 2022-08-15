import Link from 'next/link';
import React, { FC } from 'react';
import { links } from 'src/components/Header/Header';

import Button from 'src/components/Button';
import {
  PersonIcon,
  MessageIcon,
  HeaderDownIcon,
  Wallet,
} from 'src/assets/svg';
import Dropdown from 'src/components/Dropdown';
import UserDropdownButton from 'src/components/Header/components/UserDropDownButton';
import UserDropdownWindow from 'src/components/Header/components/UserDropdownWindow';
import WalletDropdownWindow from 'src/components/Header/components/WalletDropdownWindow';
import NotificationDropdown from 'src/components/NotificationDropdown';
import NotificationWindow from 'src/components/NotificationWindow';
import ChatDropdown from 'src/components/Chat/ChatDropdown';
import ChatWindow from 'src/components/Chat/ChatWindow';
import styles from './MobileHeaderDropdown.module.scss';

type Props = {
  isAuthenticated?: boolean;
  toggleSignInModal: () => void;
  toggleRegistrationModal: () => void;
  toggleUserModal: () => void;
  toggleIsAuthenticated: () => void;
};

const MobileHeaderDropdown: FC<Props> = ({
  isAuthenticated,
  toggleSignInModal,
  toggleRegistrationModal,
  toggleUserModal,
  toggleIsAuthenticated,
}) => {
  return (
    <>
      {isAuthenticated ? (
        <div className={styles.walletButtons}>
          <div className={styles.walletButtonsWallet}>
            <Dropdown
              buttonComponent={
                <Button
                  label="Wallet"
                  leftIcon={<Wallet />}
                  customStyles={styles.wallet}
                />
              }
              dropdownComponent={<WalletDropdownWindow />}
              customWalletDropdownStyles={styles.windowDropdown}
              customDropdownContainerStyles={
                styles.customDropdownContainerStyles
              }
            />
            <Dropdown
              buttonComponent={<UserDropdownButton />}
              dropdownComponent={
                <UserDropdownWindow
                  toggleUserModal={toggleUserModal}
                  onLogout={toggleIsAuthenticated}
                />
              }
              customDropdownContainerStyles={
                styles.customDropdownUserContainerStyles
              }
              customButtonStyles={styles.customButtonStyles}
            />
          </div>
          <div className={styles.walletButtonsNotifications}>
            <Dropdown
              buttonComponent={<NotificationWindow />}
              dropdownComponent={<NotificationDropdown />}
              customButtonStyles={styles.notificationButton}
              customDropdownStyles={styles.notificationWindow}
            />
            <Dropdown
              buttonComponent={<ChatWindow />}
              dropdownComponent={<ChatDropdown />}
              customButtonStyles={styles.notificationButton}
              customDropdownStyles={styles.chatWindow}
            />
          </div>
        </div>
      ) : (
        <div className={styles.loginButtons}>
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
          <MessageIcon />
        </div>
      )}
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
    </>
  );
};

export default MobileHeaderDropdown;
