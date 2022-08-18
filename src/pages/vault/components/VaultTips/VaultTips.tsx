import React from 'react';

import VaultSidebar from 'src/pages/vault/components/VaultSidebar';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { TetherToken, HeaderDownIcon } from 'src/assets/svg';
import Checkbox from 'src/components/Checkbox';
import styles from './VaultTips.module.scss';

const VaultTips = () => {
  return (
    <div className={styles.sidebarContainer}>
      <aside>
        <VaultSidebar />
      </aside>
      <div className={styles.container}>
        <span>Send Tips</span>
        <div className={styles.inputHeaderContainer}>
          <span className={styles.inputHeader}>Username</span>
          <Input
            placeholder="Enter username"
            customStyles={styles.inputUsername}
          />
        </div>
        <div className={styles.input}>
          <div className={`${styles.inputItem} ${styles.inputItemClicked}`}>
            <span>Currency</span>
            <Input
              placeholder="0.00000000"
              icon={<TetherToken height={23} />}
              customStyles={styles.inputItemField}
              customContainerStyles={styles.inputContainer}
              additionalButton={<HeaderDownIcon height="6" />}
              disabled
            />
          </div>
          <div className={styles.inputItem}>
            <span>Amount</span>
            <Input
              placeholder="0.00000000"
              customStyles={`${styles.inputItemField} ${styles.inputItemFieldAmount}`}
            />
          </div>
        </div>
        <div>
          <Checkbox />
          <span className={styles.checkboxText}>
            Make tip public (it will appear in chat)
          </span>
        </div>
        <Button label="Send Tips" customStyles={styles.button} />
      </div>
    </div>
  );
};

export default VaultTips;
