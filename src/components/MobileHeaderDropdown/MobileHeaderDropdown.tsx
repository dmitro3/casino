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
          <MessageIcon />
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
