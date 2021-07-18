import React, { useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import { Text, CommandLine, Score, Controls, Timer } from '@components';
import { getTargetLine } from '@utils';
import { ROUND_TIME, STARTING_POINT } from '@config';
import './App.css';

export const App = () => {
  const [currentLine, setCurrentLine] = useState(STARTING_POINT);
  const [lastPressed, setLastPressed] = useState([]);
  const [targetLine, setTargetLine] = useState(getTargetLine(5));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_TIME);
  const [isGamePlaying, setIsGamePlaying] = useState(false);

  const handleScore = () => {
    setTargetLine(getTargetLine(currentLine));
    if (isGamePlaying) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleStart = () => {
    setTimeLeft(ROUND_TIME);
    setScore(0);
    setIsGamePlaying(true);
  };

  useEffect(() => {
    if (isGamePlaying) {
      if (timeLeft > 0) {
        setTimeout(() => setTimeLeft((prevTimeLeft) => prevTimeLeft - 1), 1000);
      } else {
        setIsGamePlaying(false);
      }
    }
  }, [isGamePlaying, timeLeft]);

  useEffect(() => {
    if (currentLine === targetLine) {
      handleScore();
    }
  }, [currentLine, targetLine]);

  useHotkeys('j', () => {
    setCurrentLine((prevCurrent) =>
      prevCurrent + 1 > 30 ? 30 : prevCurrent + 1,
    );
    setLastPressed((prevLast) => [...prevLast.slice(-15), 'j']);
  });

  useHotkeys('k', () => {
    setCurrentLine((prevCurrent) =>
      prevCurrent - 1 < 1 ? 1 : prevCurrent - 1,
    );
    setLastPressed((prevLast) => [...prevLast.slice(-15), 'k']);
  });

  return (
    <div>
      <h1>Vim Wack-a-mole</h1>
      <p>
        Key: <span className={'current'}>current position</span>,{' '}
        <span className={'target'}>target</span>
      </p>
      <p>Instructions: "j" for down, "k" for up</p>
      <Score score={score} />
      <Timer timeLeft={timeLeft} />
      <Text currentLine={currentLine} targetLine={targetLine} />
      <Controls handleStart={handleStart} isGamePlaying={isGamePlaying} />
      <CommandLine lastPressed={lastPressed} />
    </div>
  );
};
