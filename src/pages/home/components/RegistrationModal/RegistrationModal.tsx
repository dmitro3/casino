import React, { FC } from 'react';
import Modal from 'src/components/Modal/Modal';
import RegistrationSafe from 'src/assets/images/RegistrationSafe.png';
import Image from 'next/image';
import Blur from 'src/components/Blur';
import Input from 'src/components/Input';
import {
  ArrowBackIcon,
  BigGoogleIcon,
  BigTelegramIcon,
  BinanceChain,
  MetaMaskFox,
  PersonIcon,
  TronLogo,
} from 'src/assets/svg';
import Checkbox from 'src/components/Checkbox';
import Link from 'next/link';
import Button from 'src/components/Button';
import styles from './RegistrationModal.module.scss';

type Props = {
  toggleModal: () => void;
};

const RegistrationModal: FC<Props> = ({ toggleModal }: Props) => {
  return (
    <Modal toggleModal={toggleModal}>
      <div className={styles.root}>
        <div className={styles.imageContainer}>
          <div className={styles.blurWrapper}>
            <div className={styles.blur} />
            <Image
              src={RegistrationSafe}
              width={204}
              height={118}
              layout="fixed"
            />
          </div>
        </div>
        <div className={styles.inputContainers}>
          <div className={styles.inputContainersContainer}>
            <p>User name</p>
            <Input
              customStyles={styles.input}
              icon={<PersonIcon color="#8C8D90" />}
              placeholder="Enter user name"
            />
          </div>
          <div className={styles.inputContainersContainer}>
            <p>Your E-mail</p>
            <Input
              customStyles={styles.input}
              icon={<PersonIcon color="#8C8D90" />}
              placeholder="Enter user name"
            />
          </div>
          <div className={styles.inputContainersContainer}>
            <p>Password</p>
            <Input
              password
              customStyles={styles.input}
              icon={<PersonIcon color="#8C8D90" />}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <Checkbox
          label={
            <p>
              I confirm that I am 18 years old and I have read the{` `}
              <Link passHref href="sad">
                <a href="/#" className={styles.checkboxText}>
                  Terms of service
                </a>
              </Link>
            </p>
          }
        />
        <Checkbox label={<p>Receive Email Promos</p>} />
        <Button label="Create an account" customStyles={styles.btn} />
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

export default RegistrationModal;
