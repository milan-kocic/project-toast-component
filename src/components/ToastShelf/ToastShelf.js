import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ handleDismiss, toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variantRadioInput={toast.variantRadioInput}
            handleDismiss={handleDismiss}
            id={toast.id}
          >
            {toast.messageInput}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
