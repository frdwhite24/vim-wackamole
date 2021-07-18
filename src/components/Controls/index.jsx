import React from 'react';

import styles from './Controls.module.css';

export const Controls = ({ handleStart, isGamePlaying }) => {
  if (isGamePlaying) return null;
  return (
    <div className={styles.root}>
      <button onClick={handleStart} className={styles.button}>
        Go
      </button>
    </div>
  );
};
