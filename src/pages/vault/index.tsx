import React from 'react';
import Image from 'next/image';

import MainLayout from 'src/components/MainLayout';
import Blur from 'src/components/Blur';
import VaultBackground from 'src/assets/images/VaultBackground.png';
import VaultWindow from 'src/pages/vault/components/VaultWindow';
import styles from './index.module.scss';

const Vault = () => {
  return (
    <MainLayout hasMaxWidth>
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
