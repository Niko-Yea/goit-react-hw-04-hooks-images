import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss'

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component{

  componentDidMount() {
    window.addEventListener('keydown', this.hanleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hanleKeyDown)
  }

  hanleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
  }


  render() {
    const largeImg = this.props.item
    return createPortal(
      (<div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={largeImg} alt={largeImg} />
        </div>
      </div>), modalRoot
    );
  }
}

export default Modal;