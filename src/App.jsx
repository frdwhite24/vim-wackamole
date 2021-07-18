import React, { useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { Text, CommandLine, Controls, Header, GameInfo } from '@components';
import { getTargetLine } from '@utils';
import { ROUND_TIME, STARTING_POINT } from '@config';
import styles from './App.module.css';
import { NUM_LINES } from './config';

export const App = () => {
  // TODO: implement better global state management with context & reducer or a
  // global state store like Zustand
  const [currentLine, setCurrentLine] = useState(STARTING_POINT);
  const [commandEntries, setCommandEntries] = useState();
  const [targetLine, setTargetLine] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_TIME);
  const [isGamePlaying, setIsGamePlaying] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const handleScore = () => {
    setTargetLine(getTargetLine(currentLine));
    if (isGamePlaying) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // This currently handles both cases: start and reset, the UX could be improved
  // here to make clear the functionality that would happen upon click of start
  const handleStart = () => {
    setHasFinished(false);
    setTimeLeft(ROUND_TIME);
    setScore(0);
    setTargetLine(getTargetLine(STARTING_POINT));
    setIsGamePlaying(true);
  };

  useEffect(() => {
    if (isGamePlaying) {
      if (timeLeft > 0) {
        setTimeout(() => setTimeLeft((prevTimeLeft) => prevTimeLeft - 1), 1000);
      } else {
        setIsGamePlaying(false);
        setTargetLine(null);
        setHasFinished(true);
      }
    }
  }, [isGamePlaying, timeLeft]);

  useEffect(() => {
    if (currentLine === targetLine) {
      handleScore();
    }
  }, [currentLine, targetLine]);

  useEffect(() => {
    console.log(commandEntries);
  }, [commandEntries]);

  // Register the hotkeys, I might be tempted to pull this out to a custom hook
  // to clean up the App. Also to register numeric prefixes i could append
  // entries to an array and wipe upon press of j,k or esc
  useHotkeys(
    'j',
    () => {
      setCurrentLine((prevCurrent) => {
        const diff = parseInt(commandEntries) || 1;
        const result = prevCurrent + diff;
        if (result > NUM_LINES) return NUM_LINES;
        return result;
      });
      setCommandEntries('');
    },
    [commandEntries],
  );
  useHotkeys(
    'k',
    () => {
      setCurrentLine((prevCurrent) => {
        const diff = parseInt(commandEntries) || 1;
        const result = prevCurrent - diff;
        if (result < 1) return 1;
        return result;
      });
      setCommandEntries('');
    },
    [commandEntries],
  );
  useHotkeys('enter', () => {
    handleStart();
  });
  useHotkeys('esc', () => {
    setCommandEntries('');
  });
  useHotkeys('1,2,3,4,5,6,7,8,9,0', (event) => {
    setCommandEntries((prevEntries) => {
      // Numeric prefix cannot start with 0 but 0 is allowed as a later entry
      if (!prevEntries && event.key === '0') return;
      return prevEntries ? prevEntries + event.key : event.key;
    });
  });

  return (
    <div className={styles.root}>
      <Header />
      <GameInfo score={score} timeLeft={timeLeft} hasFinished={hasFinished} />
      <Text currentLine={currentLine} targetLine={targetLine} />
      <Controls handleStart={handleStart} isGamePlaying={isGamePlaying} />
      <CommandLine commandEntries={commandEntries} />
    </div>
  );
};
