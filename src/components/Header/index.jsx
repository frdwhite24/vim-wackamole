import React from 'react';
import { ROUND_TIME } from '../../config';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <h1 className={styles.header}>Vim Wack-a-mole</h1>
      <p className={styles.instructions}>
        Use j and k to move up and down 1 line at a time. Prefix with a number
        to move multiple lines. Each time you get to a target line, your score
        will increment by 1. You have {ROUND_TIME} seconds to catch as many
        target lines as you can. Key:{' '}
        <span className={'current'}>current position</span>,{' '}
        <span className={'target'}>target</span>.
      </p>
      <p></p>
    </>
  );
};
