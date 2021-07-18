import React from 'react';
import Confetti from 'react-dom-confetti';

import styles from './Score.module.css';

export const Score = ({ score, hasFinished }) => {
  return (
    <div className={styles.root}>
      <p className={styles.value}>{score}</p>
      <h2 className={styles.header}>Score</h2>
      <Confetti
        active={hasFinished}
        config={{ spread: 360, dragFriction: 0.3 }}
      />
    </div>
  );
};
