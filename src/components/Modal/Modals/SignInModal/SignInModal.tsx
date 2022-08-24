import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Form, Field } from 'react-final-form';
import Modal from 'src/components/Modal';
import { SignInFormData } from 'src/types/formData';
import { auth } from 'src/api';
import Image from 'next/image';
import {
  required,
  composeValidators,
  isEmail,
  minLenght,
} from 'src/utils/validation';
import LoginBackground from 'src/assets/images/LoginBackground.png';
import Input from 'src/components/Input';

import Link from 'next/link';
import {
  KeyIcon,
  EmailIcon,
  ArrowBackIcon,
  BigGoogleIcon,
  BigTelegramIcon,
  BinanceChain,
  MetaMaskFox,
  TronLogo,
} from 'src/assets/svg';
import Button from 'src/components/Button';
import styles from './SignInModal.module.scss';

type Props = {
  toggleModal: () => void;
  onSuccess?: () => void;
};

const SignInModal: FC<Props> = ({ toggleModal, onSuccess }: Props) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const onSignIn = async (values: SignInFormData) => {
    console.log(values);
    const response = await auth.signIn(values.email, values.password);
    console.log(response);
  };

  return (
    <Modal toggleModal={toggleModal}>
      <div className={styles.root}>
        <div className={styles.imageContainer}>
          <div className={styles.blurWrapper}>
            <div className={styles.blur} />
            {isMobile ? (
              <Image
                src={LoginBackground}
                width={260}
                height={120}
                layout="fixed"
              />
            ) : (
              <Image
                src={LoginBackground}
                width={360}
                height={180}
                layout="fixed"
              />
            )}
          </div>
        </div>
        <Form
          onSubmit={onSignIn}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <div className={styles.inputContainerBlock}>
                  {/* <div className={styles.inputContainerBlockText}>
                    <p>Your E-mail</p>
                    <span>You forgot to enter your email!</span>
                  </div> */}
                  <Field
                    label="Email"
                    name="email"
                    component={Input}
                    password={false}
                    validate={composeValidators(required, isEmail)}
                    customStyles={styles.inputContainerBlockInput}
                    icon={<EmailIcon />}
                    placeholder="Enter Your e-mail"
                    inputLabel="Your e-mail"
                  />
                </div>
                <div className={styles.inputContainerBlock}>
                  <p>Password</p>
                  <Field
                    label="Password"
                    name="password"
                    component={Input}
                    password
                    customStyles={styles.inputContainerBlockInput}
                    icon={<KeyIcon />}
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div>
                <Link passHref href="sad">
                  <a href="/#" className={styles.bottomText}>
                    <span> Forgot your password?</span>
                  </a>
                </Link>
              </div>
              <Button
                type="submit"
                label="Login"
                customStyles={styles.loginButton}
              />
            </form>
          )}
        />
        <span className={styles.containerSignUpText}>Or Sign up with</span>
        <div className={styles.authorizationContainer}>
          <div>
            <Link passHref href="sad">
              <a href="/#">
                <BigTelegramIcon />
              </a>
            </Link>
          </div>
          <div>
            <Link passHref href="sad">
              <a href="/#">
                <BigGoogleIcon />
              </a>
            </Link>
          </div>
          <div>
            <Link passHref href="sad">
              <a href="/#">
                <MetaMaskFox />
              </a>
            </Link>
          </div>
          <div>
            <Link passHref href="sad">
              <a href="/#">
                <TronLogo />
              </a>
            </Link>
          </div>
          <div>
            <Link passHref href="sad">
              <a href="/#">
                <BinanceChain />
              </a>
            </Link>
          </div>
          {!isMobile && (
            <div className={styles.containerBtn}>
              <Link passHref href="sad">
                <a href="/#" className={styles.containerBtnText}>
                  More
                </a>
              </Link>
              <ArrowBackIcon />
            </div>
          )}
        </div>
        <Link passHref href="sad">
          <a href="/#" className={styles.bottomText}>
            Don’t you have an account? <span>Sing Up</span>
          </a>
        </Link>
      </div>
    </Modal>
  );
};

export default SignInModal;
