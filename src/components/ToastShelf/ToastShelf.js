import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ setIsHidden, toasts, variantRadioInput }) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast toasts={toasts} variantRadioInput={variantRadioInput} />
      </li>
    </ol>
  );
}

export default ToastShelf;
