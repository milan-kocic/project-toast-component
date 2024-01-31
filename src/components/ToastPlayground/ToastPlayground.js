import React, { useContext } from 'react';

import Button from '../Button';

import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const {
    handleSubmit,
    setMessageInput,
    messageInput,

    setVariantRadioInput,
    variantRadioInput
  } = useContext(ToastContext);

  // const [messageInput, setMessageInput] = useState('');
  // const [variantRadioInput, setVariantRadioInput] = useState('notice');
  // const [toasts, setToasts] = useState([]);
  // const [isHidden, setIsHidden] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsHidden(true);
  //   const nextToasts = [
  //     ...toasts,
  //     {
  //       id: crypto.randomUUID(),
  //       messageInput,
  //       variantRadioInput
  //     }
  //   ];
  //   setToasts(nextToasts);
  //   setMessageInput('');
  //   setVariantRadioInput('notice');
  // };
  // const handleDismiss = (id) => {
  //   const nextToasts = toasts.filter((toast) => {
  //     return toast.id !== id;
  //   });
  //   setToasts(nextToasts);
  // };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              value={messageInput}
              onChange={(e) => {
                setMessageInput(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type='radio'
                  name='variant'
                  value={option}
                  checked={variantRadioInput === option}
                  onChange={(e) => {
                    setVariantRadioInput(e.target.value);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
