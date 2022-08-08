import React, { useState } from 'react';
import Image from 'next/image';

import { DepositDropdown } from 'src/pages/vault/components/VaultWithdraw/VaultWithdraw';
import { AttentionIcon } from 'src/assets/svg';
import Input from 'src/components/Input';
import QrCode from 'src/assets/images/QrCode.png';
import styles from './VaultDepositProcess.module.scss';

const VaultDepositProcess = () => {
  const [isCurtainOn, setIsCurtainOn] = useState(true);

  const toggleFrontdrop = () => {
    setIsCurtainOn(false);
  };

  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <span>Deposit</span>
        <DepositDropdown />
      </div>
      {isCurtainOn && (
        <div className={styles.frontdrop} onClick={toggleFrontdrop}>
          To continue, select network
        </div>
      )}
      <div className={styles.content}>
        <span>Ваш USDT адрес депозита</span>
        <p>
          This address accepts only ERC-20, transferring here any other coin
          will result in fund loss. Copy USDT address here:
        </p>
        <Input
          customStyles={styles.input}
          value="7435984n5cb7fndjy4735693480857328cuv9"
          additionalButton={
            <button className={styles.buttonAdditional}>copy</button>
          }
        />
      </div>
      <div className={styles.attention}>
        <div className={styles.attentionText}>
          <AttentionIcon />
          <p>
            The minimum deposit amount is 25 USDT. Sending any amount below the
            minimum will result in funds loss and not refundable
          </p>
        </div>
        <Image src={QrCode} height={70} width={70} />
      </div>
      <div className={styles.subText}>
        <p>
          Sending any amount below the minimum will result in funds loss and
          refundable. Maximum deposit amount is not limited. Binobi.com doesn’t
          have anyfree for USDT deposits. USDT deposits may take some time
          related to the network hash rate.
        </p>
      </div>
    </section>
  );
};

export default VaultDepositProcess;
