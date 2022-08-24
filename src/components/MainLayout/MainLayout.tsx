import React, { FC, useEffect, useState } from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { SignInFormData } from 'src/types/formData';
import {
  RegistrationModal,
  SignInModal,
  StatusModal,
  UserModal,
} from 'src/components/Modal/Modals';
import styles from './MainLayout.module.scss';

type Props = {
  children: React.ReactNode;
  hasMaxWidth?: boolean;
};

const MainLayout: FC<Props> = ({ children, hasMaxWidth }) => {
  const [registrationModalVisible, setRegistrationModalVisible] =
    useState(false);
  const [signInModalVisible, setSignInModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userModalVisible, setUserModalVisible] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleRegistrationModal = () => {
    setRegistrationModalVisible(!registrationModalVisible);
  };

  const toggleSignInModal = () => {
    setSignInModalVisible(!signInModalVisible);
  };

  const toggleStatusModal = () => {
    setStatusModalVisible(!statusModalVisible);
  };

  const toggleIsAuthenticated = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const toggleUserModal = () => {
    setUserModalVisible(!userModalVisible);
  };

  return (
    <>
      <Header
        toggleRegistrationModal={toggleRegistrationModal}
        toggleSignInModal={toggleSignInModal}
        isAuthenticated={isAuthenticated}
        toggleIsAuthenticated={toggleIsAuthenticated}
        toggleUserModal={toggleUserModal}
      />
      {registrationModalVisible && (
        <RegistrationModal
          toggleModal={toggleRegistrationModal}
          onSuccess={() => {
            toggleRegistrationModal();
            toggleStatusModal();
          }}
        />
      )}
      {signInModalVisible && (
        <SignInModal
          toggleModal={toggleSignInModal}
          onSuccess={() => {
            toggleSignInModal();
            setIsAuthenticated(true);
          }}
        />
      )}
      {statusModalVisible && (
        <StatusModal toggleModal={toggleStatusModal} isSuccessful={false} />
      )}
      {userModalVisible && <UserModal toggleModal={toggleUserModal} />}
      <div
        className={styles.root}
        style={hasMaxWidth ? { maxWidth: `100%` } : {}}
      >
        {children}
        {` `}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
