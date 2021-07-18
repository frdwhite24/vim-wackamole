import React from 'react';

export const Header = () => {
  return (
    <>
      <h1>Vim Wack-a-mole</h1>
      <p>
        Key: <span className={'current'}>current position</span>,{' '}
        <span className={'target'}>target</span>
      </p>
      <p>Instructions: "j" for down, "k" for up</p>
    </>
  );
};
