import React from 'react';
import cn from 'clsx';

import { useData } from '@hooks/useData';
import styles from './Text.module.css';

export const Text = ({ currentLine, targetLine }) => {
  const { data, loading } = useData();

  if (loading) {
    return <p>loading...</p>;
  }

  const lines = data
    .split('.')
    .filter((paragraph) => paragraph)
    .slice(0, 30);

  return (
    <ul className={styles.lines}>
      {lines.map((line, idx) => {
        const isCurrent = currentLine === idx + 1;
        const isTarget = targetLine === idx + 1;
        const lineNumber = isCurrent
          ? currentLine
          : Math.abs(currentLine - (idx + 1));

        return (
          <li
            key={idx}
            className={cn(styles.line, {
              current: isCurrent,
              target: isTarget,
            })}
          >
            <p className={styles.lineNumber}>{lineNumber}</p>
            <p>{line}</p>
          </li>
        );
      })}
    </ul>
  );
};
