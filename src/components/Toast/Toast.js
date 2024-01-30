import React, { Children, useState } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon
};

function Toast({ setIsHidden, toasts, variantRadioInput }) {
  const IconComponent = ICONS_BY_VARIANT[variantRadioInput];

  console.log(toasts);
  return toasts.map((toast) => (
    <div
      key={toast.id}
      className={`${styles.toast} ${styles[toast.variantRadioInput]}`}
    >
      <div className={styles.iconContainer}>
        <IconComponent size={24} />
      </div>
      <p className={styles.content}>{toast.messageInput}</p>
      <button className={styles.closeButton}>
        <X
          onClick={() => {
            setIsHidden(false);
          }}
          size={24}
        />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  ));
}

export default Toast;
