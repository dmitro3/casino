/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { FC, useEffect } from 'react';

import styles from './Modal.module.scss';

type Props = {
  children: React.ReactNode;
  toggleModal: () => void;
  customStyles?: any;
};

const Modal: FC<Props> = ({ children, toggleModal, customStyles }) => {
  useEffect(() => {
    const body = document.querySelector(`body`);
    // body!.style.overflow = `hidden`;
  }, []);

  const onToggleModal = () => {
    const body = document.querySelector(`body`);
    // body!.style.overflow = `auto`;
    toggleModal();
  };

  return (
    <div className={styles.root}>
      <div className={styles.backdrop} onClick={onToggleModal} />
      <div className={`${styles.modal} ${customStyles}`}>{children}</div>
    </div>
  );
};

export default Modal;
