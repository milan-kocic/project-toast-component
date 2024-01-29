import React from 'react';
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

function Toast({ messageInput, variantRadioInput, setIsHidden }) {
  const IconComponent = ICONS_BY_VARIANT[variantRadioInput];
  return (
    <div className={`${styles.toast} ${styles[variantRadioInput]}`}>
      <div className={styles.iconContainer}>
        <IconComponent size={24} />
      </div>
      <p className={styles.content}>{messageInput}</p>
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
  );
}

export default Toast;
