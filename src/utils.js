import { NUM_LINES, STARTING_POINT } from './config';

export const getTargetLine = (current) => {
  const target = Math.floor(Math.random() * NUM_LINES) + 1;

  if (current) {
    if (target !== current) return target;
    return getTargetLine(current);
  }

  if (target !== STARTING_POINT) return target;
  return getTargetLine();
};
