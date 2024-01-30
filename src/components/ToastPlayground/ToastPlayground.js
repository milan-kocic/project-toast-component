import React, { useState } from 'react';

import Button from '../Button';

import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [messageInput, setMessageInput] = useState('');
  const [variantRadioInput, setVariantRadioInput] = useState('notice');
  const [isHidden, setIsHidden] = useState(false);
  const [toasts, setToasts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsHidden(true);
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        messageInput,
        variantRadioInput
      }
    ];
    setToasts(nextToasts);
  };
  console.log(toasts);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      {isHidden && (
        <ToastShelf
          messageInput={messageInput}
          variantRadioInput={variantRadioInput}
          setIsHidden={setIsHidden}
          toasts={toasts}
        />
      )}
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
            <Button type='submit'>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
