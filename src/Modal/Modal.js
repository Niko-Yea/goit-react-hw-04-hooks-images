import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss'

const modalRoot = document.querySelector('#modal-root')

const Modal = ({largeImg, onClose}) => {
  useEffect(() => {
    const hanleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', hanleKeyDown);
    
    return () =>  window.removeEventListener('keydown', hanleKeyDown);
  },[onClose])

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

    return createPortal(
      (<div className={styles.Overlay} onClick={handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={largeImg} alt={largeImg} />
        </div>
      </div>), modalRoot
    );
  }

export default Modal;