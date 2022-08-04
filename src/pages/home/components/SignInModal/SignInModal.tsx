import React, { FC } from 'react';
import Modal from 'src/components/Modal';
import Image from 'next/image';
import SignInImage from 'src/assets/images/SignInImage.png';
import Input from 'src/components/Input';

import Message from 'src/assets/svg/MessageIcon';
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
};

const SignInModal: FC<Props> = ({ toggleModal }: Props) => {
  return (
    <Modal toggleModal={toggleModal}>
      <div className={styles.root}>
        <div className={styles.imageContainer}>
          <div className={styles.blurWrapper}>
            <div className={styles.blur} />
            <Image src={SignInImage} width={204} height={118} layout="fixed" />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputContainerBlock}>
            <div className={styles.inputContainerBlockText}>
              <p>Your E-mail</p>
              <span>You forgot to enter your email!</span>
            </div>

            <Input
              password={false}
              customStyles={styles.inputContainerBlockInput}
              icon={<EmailIcon />}
              placeholder="Enter Your e-mail"
            />
          </div>
          <div className={styles.inputContainerBlock}>
            <p>Password</p>
            <Input
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
        <Button label="Login" customStyles={styles.loginButton} />
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
          <div className={styles.containerBtn}>
            <Link passHref href="sad">
              <a href="/#" className={styles.containerBtnText}>
                More
              </a>
            </Link>
            <ArrowBackIcon />
          </div>
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
