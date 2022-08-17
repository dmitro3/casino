import React from 'react';

import { MessageIcon } from 'src/assets/svg';
import chatData from 'src/utils/chatData';
import styles from './ChatWindow.module.scss';

const ChatWindow = () => {
  return (
    <div className={styles.root}>
      <MessageIcon />
      <div className={styles.cardCount}>{chatData.length}</div>
    </div>
  );
};

export default ChatWindow;
