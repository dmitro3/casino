import React from 'react';

import chatData from 'src/utils/chatData';
import ChatDropdownHeader from 'src/components/Chat/ChatDropdownHeader';
import styles from './ChatDropdown.module.scss';

const ChatDropdown = () => {
  return (
    <aside className={styles.container}>
      <ChatDropdownHeader />
      <div className={styles.line} />
      {chatData.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.cardImage}>
            <card.userImage />
          </div>
          <div className={styles.cardText}>
            <span>{card.username}</span>
            <p>{card.message}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default ChatDropdown;
