import React from 'react';
import { ROUND_TIME } from '../../config';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <h1 className={styles.header}>Vim Wack-a-mole</h1>
      <p className={styles.instructions}>
        Use j to move up, and k to move down. Each time you get to a target
        line, your score will increment by 1. You have {ROUND_TIME} seconds to
        get as many target lines as you can. Key:{' '}
        <span className={'current'}>current position</span>,{' '}
        <span className={'target'}>target</span>.
      </p>
      <p></p>
    </>
  );
};
