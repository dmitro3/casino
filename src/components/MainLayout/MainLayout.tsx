import React, { FC, useEffect, useState } from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
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
  const [isStatusModalSuccess, setIsStatusModalSuccess] = useState(false);
  const [statusModalText, setStatusModalText] = useState(
    `` as string | undefined,
  );

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

  const toggleCloseModals = () => {
    setStatusModalVisible(!statusModalVisible);
    setRegistrationModalVisible(!registrationModalVisible);
  };

  const onError = (error: string) => {
    if (typeof error === `object`) {
      setStatusModalText(undefined);
    } else setStatusModalText(error);
    toggleStatusModal();
    setIsStatusModalSuccess(false);
  };

  const onSuccess = () => {
    toggleStatusModal();
    setIsStatusModalSuccess(true);
    setIsAuthenticated(true);
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
          onSuccess={onSuccess}
          onError={onError}
        />
      )}
      {signInModalVisible && (
        <SignInModal
          toggleModal={toggleSignInModal}
          onSuccess={() => {
            toggleSignInModal();
            setIsAuthenticated(true);
          }}
          onError={onError}
        />
      )}
      {statusModalVisible && (
        <StatusModal
          toggleCloseModals={toggleCloseModals}
          toggleModal={toggleStatusModal}
          isSuccessful={isStatusModalSuccess}
          statusModalText={statusModalText}
        />
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
