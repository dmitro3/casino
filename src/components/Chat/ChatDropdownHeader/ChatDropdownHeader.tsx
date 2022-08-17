import React from 'react';

import { CloseIcon } from 'src/assets/svg';
import styles from './ChatDropdownHeader.module.scss';

const ChatDropdownHeader = () => {
  return (
    <div className={styles.header}>
      <div>
        <span>Chat</span>
        <span>Online: 125</span>
      </div>
      <div className={styles.headerClose}>
        <CloseIcon height={10} />
      </div>
    </div>
  );
};

export default ChatDropdownHeader;
