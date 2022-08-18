import React, { FC, useState } from 'react';
import Image from 'next/image';

import { DepositDropdown } from 'src/pages/vault/components/VaultWithdraw/VaultWithdraw';
import Input from 'src/components/Input';
import VaultSidebar from 'src/pages/vault/components/VaultSidebar';
import { AttentionIcon } from 'src/assets/svg';
import QrCode from 'src/assets/images/QrCode.png';
import styles from './VaultDeposit.module.scss';

type Props = {
  onClick?: () => void;
};

const VaultDeposit: FC<Props> = ({ onClick }) => {
  const [isCurtainOn, setIsCurtainOn] = useState(true);

  const toggleFrontdrop = () => {
    setIsCurtainOn(false);
  };

  return (
    <section className={styles.root}>
      <aside>
        <VaultSidebar />
      </aside>
      <div className={styles.depositWindow}>
        <div className={styles.header}>
          <span>Deposit</span>
          <DepositDropdown />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <div>
              <span>Ваш USDT адрес депозита</span>
            </div>
            {isCurtainOn && (
              <div
                className={styles.frontdrop}
                onClick={toggleFrontdrop}
                role="button"
                tabIndex={-1}
                onKeyDown={toggleFrontdrop}
              >
                To continue, select network
              </div>
            )}
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
                The minimum deposit amount is 25 USDT. Sending any amount below
                the minimum will result in funds loss and not refundable
              </p>
            </div>
            <Image src={QrCode} height={70} width={70} />
          </div>
          <div className={styles.subText}>
            <p>
              Sending any amount below the minimum will result in funds loss and
              refundable. Maximum deposit amount is not limited. Binobi.com
              doesn’t have anyfree for USDT deposits. USDT deposits may take
              some time related to the network hash rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaultDeposit;
