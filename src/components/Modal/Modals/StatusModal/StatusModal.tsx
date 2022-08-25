import React, { FC } from 'react';
import Image from 'next/image';
import Check from 'src/assets/images/Check.png';
import Uncheck from 'src/assets/images/Uncheck.png';

import Modal from 'src/components/Modal';
import Button from 'src/components/Button';
import styles from './StatusModal.module.scss';

type Props = {
  toggleModal: () => void;
  toggleCloseModals: () => void;
  isSuccessful?: boolean;
  statusModalText?: string;
};

const StatusModal: FC<Props> = ({
  toggleModal,
  toggleCloseModals,
  isSuccessful,
  statusModalText = `Try to register again and check the information you entered. Or, before that, try to refresh the page and check the stability of the network connection`,
}: Props) => {
  return (
    <Modal toggleModal={toggleModal}>
      <div className={styles.root}>
        {isSuccessful ? (
          <div className={styles.imageContainer}>
            <div className={styles.blurWrapper}>
              <div className={styles.blur} />
              <Image src={Check} width={105} height={105} layout="fixed" />
            </div>
          </div>
        ) : (
          <div className={styles.imageContainer}>
            <div className={styles.blurWrapper}>
              <div className={styles.redBlur} />
              <Image src={Uncheck} width={105} height={105} layout="fixed" />
            </div>
          </div>
        )}
        <div className={styles.Text}>
          {isSuccessful ? `Registration was successful!` : `An error occurred!`}
        </div>
        <p>
          {isSuccessful
            ? `Then click the continue button and go to your personal account. You can continue your activities there`
            : statusModalText}
        </p>
        {isSuccessful ? (
          <Button
            onClick={toggleCloseModals}
            label="Continue"
            customStyles={styles.successfulButton}
          />
        ) : (
          <Button
            onClick={toggleModal}
            label="Try again"
            customStyles={styles.successfulButton}
          />
        )}
      </div>
    </Modal>
  );
};

export default StatusModal;
