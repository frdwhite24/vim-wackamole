import React from 'react';

export const Controls = ({ handleStart, isGamePlaying }) => {
  if (isGamePlaying) return null;
  return <button onClick={handleStart}>Start!</button>;
};
