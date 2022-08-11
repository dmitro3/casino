import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import MainLayout from 'src/components/MainLayout';
import Blur from 'src/components/Blur';
import VaultBackground from 'src/assets/images/VaultBackground.png';
import VaultWindow from 'src/pages/vault/components/VaultWindow';
import Binance from 'src/assets/images/Binance_coin_perspective_matte.png';
import Coin from 'src/assets/images/Group.png';
import styles from './index.module.scss';

const Vault = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <MainLayout hasMaxWidth>
      {isMobile && (
        <>
          <div className={styles.binance}>
            <Image src={Binance} height={72} width={52} />
          </div>
          <div className={styles.coin}>
            <Image src={Coin} height={49} width={60} />
          </div>
        </>
      )}

      <section className={styles.container}>
        <Blur color="#FCD53533">
          <Image src={VaultBackground} width={873} height={520} />
        </Blur>
        <VaultWindow customStyles={styles.vaultWindow} />
      </section>
    </MainLayout>
  );
};

export default Vault;
