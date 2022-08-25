import React, { FC } from 'react';
import { Form, Field } from 'react-final-form';

import {
  required,
  composeValidators,
  isEmail,
  minLength,
} from 'src/utils/validation';
import { auth } from 'src/api';
import { SignUpFormData } from 'src/types/formData';
import Modal from 'src/components/Modal/Modal';
import RegistrationSafe from 'src/assets/images/RegistrationSafe.png';
import Image from 'next/image';
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
  onSuccess: () => void;
  onError: (text: string) => void;
};

const RegistrationModal: FC<Props> = ({
  toggleModal,
  onSuccess,
  onError,
}: Props) => {
  const onSignUp = async (values: SignUpFormData) => {
    try {
      const response = await auth.signUp(
        values.email,
        values.password,
        values.username,
      );
      onSuccess();
      if (response.error) {
        throw response.message;
      }
    } catch (error: any) {
      onError(error);
    }
  };

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
        <Form
          onSubmit={onSignUp}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <div className={styles.inputContainerBlock}>
                  <Field
                    name="username"
                    validate={composeValidators(
                      required(`username`),
                      minLength(5),
                    )}
                  >
                    {({ input, meta }) => (
                      <Input
                        password={false}
                        customStyles={styles.inputContainerBlockInput}
                        icon={<PersonIcon color="#8C8D90" />}
                        placeholder="Enter user name"
                        input={input}
                        meta={meta}
                        inputLabel="User name"
                      />
                    )}
                  </Field>
                </div>
                <div className={styles.inputContainerBlock}>
                  <Field
                    name="email"
                    validate={composeValidators(required(`email`), isEmail)}
                  >
                    {({ input, meta }) => (
                      <Input
                        password={false}
                        customStyles={styles.inputContainerBlockInput}
                        icon={<PersonIcon color="#8C8D90" />}
                        placeholder="Enter e-mail"
                        input={input}
                        meta={meta}
                        inputLabel="Your e-mail"
                      />
                    )}
                  </Field>
                </div>
                <div className={styles.inputContainerBlock}>
                  <Field
                    name="password"
                    validate={composeValidators(
                      required(`password`),
                      minLength(6),
                    )}
                  >
                    {({ input, meta }) => (
                      <Input
                        password
                        customStyles={styles.inputContainerBlockInput}
                        icon={<PersonIcon color="#8C8D90" />}
                        placeholder="Enter password"
                        input={input}
                        meta={meta}
                        inputLabel="Your password"
                      />
                    )}
                  </Field>
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
              <Button
                type="submit"
                label="Create an account"
                customStyles={styles.createAccountButton}
                /* onClick={onSuccess} */
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
