import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import MainLayout from 'src/components/MainLayout';
import BackButton from 'src/components/BackButton';
import VaultWindow from 'src/pages/vault/components/VaultWindow';
import styles from './index.module.scss';

const Vault = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <MainLayout hasMaxWidth>
      <section className={styles.container}>
        <BackButton />
        <VaultWindow customStyles={styles.vaultWindow} />
      </section>
    </MainLayout>
  );
};

export default Vault;
