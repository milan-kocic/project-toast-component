import {
  AlertTriangle,
  CheckCircle,
  Info,
  AlertOctagon,
  X
} from 'react-feather';
import styles from './Toast.module.css';
import VisuallyHidden from '../VisuallyHidden';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon
};

function Toast({ variantRadioInput, handleDismiss, id, children }) {
  const IconComponent = ICONS_BY_VARIANT[variantRadioInput];
  return (
    <div className={`${styles.toast} ${styles[variantRadioInput]}`}>
      <div className={styles.iconContainer}>
        <IconComponent size={24} />
      </div>

      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton}>
        <X
          onClick={() => {
            handleDismiss(id);
          }}
          size={24}
        />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}
export default Toast;
