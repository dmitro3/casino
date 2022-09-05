import React, { FC, useEffect, useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

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
  isLoading?: boolean;
};

const override: CSSProperties = {
  display: `block`,
  margin: `0 auto`,
  borderColor: `red`,
};

const MainLayout: FC<Props> = ({ children, hasMaxWidth, isLoading }) => {
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

  const getAccessToken = () => {
    return localStorage.getItem(`token`);
  };

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setIsAuthenticated(true);
    } else setIsAuthenticated(false);
  }, []);

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

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
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
    setSignInModalVisible(true);
  };

  const onLoginSuccess = () => {
    setSignInModalVisible(false);
    setIsAuthenticated(true);
  };

  return (
    <>
      <Header
        toggleRegistrationModal={toggleRegistrationModal}
        toggleSignInModal={toggleSignInModal}
        isAuthenticated={isAuthenticated}
        logout={logout}
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
          onLoginSuccess={onLoginSuccess}
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
        {isLoading ? (
          <ClipLoader
            color="#fff"
            loading={isLoading}
            cssOverride={override}
            size={150}
          />
        ) : (
          children
        )}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
