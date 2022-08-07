import React, { FC, useState } from 'react';
import Image from 'next/image';
import Check from 'src/assets/images/Check.png';
import Uncheck from 'src/assets/images/Uncheck.png';

import Modal from 'src/components/Modal';
import Button from 'src/components/Button';
import styles from './SuccessfulModal.module.scss';

type Props = {
  toggleModal: () => void;
};

const SuccessfulModal: FC<Props> = ({ toggleModal }: Props) => {
  const [isSuccessful, setIsSuccessful] = useState(false);

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
          {isSuccessful ? `An error occurred!` : `Registration was successful!`}
        </div>
        <p>
          {isSuccessful
            ? `Then click the continue button and go to your personal account. You can continue your activities there`
            : `Try to register again and check the information you entered. Or, before that, try to refresh the page and check the stability of the network connection`}
        </p>
        {isSuccessful ? (
          <Button label="Continue" customStyles={styles.successfulButton} />
        ) : (
          <Button label="Try again" customStyles={styles.successfulButton} />
        )}
      </div>
    </Modal>
  );
};

export default SuccessfulModal;