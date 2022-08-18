import React from 'react';

import MainLayout from 'src/components/MainLayout';
import BackButton from 'src/components/BackButton';
import VaultWindow from 'src/pages/vault/components/VaultWindow';
import styles from './index.module.scss';

const Vault = () => {
  return (
    <MainLayout hasMaxWidth>
      <BackButton />
      <section className={styles.container}>
        <VaultWindow customStyles={styles.vaultWindow} />
      </section>
    </MainLayout>
  );
};

export default Vault;
