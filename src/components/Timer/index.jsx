import React from 'react';
import cn from 'clsx';

import styles from './Timer.module.css';

export const Timer = ({ timeLeft }) => {
  return (
    <div className={styles.root}>
      <p
        className={cn(styles.value, {
          [styles.medTime]: timeLeft <= 10,
          [styles.lowTime]: timeLeft <= 5,
        })}
      >
        {timeLeft}s
      </p>
      <h2 className={styles.header}>Timer</h2>
    </div>
  );
};
