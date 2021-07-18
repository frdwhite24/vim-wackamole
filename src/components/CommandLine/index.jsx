import React from 'react';

import styles from './CommandLine.module.css';

export const CommandLine = ({ commandEntries }) => {
  return <p className={styles.root}>{commandEntries}</p>;
};
