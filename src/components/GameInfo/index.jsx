import React from 'react';

import { Timer, Score } from '@components';
import styles from './GameInfo.module.css';

export const GameInfo = ({ score, timeLeft, hasFinished }) => {
  return (
    <div className={styles.root}>
      <Score score={score} hasFinished={hasFinished} />
      <Timer timeLeft={timeLeft} />
    </div>
  );
};
