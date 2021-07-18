# Vim Wack-a-mole

## Introduction

Vim Wack-a-mole is a small browser based game intended to help users practice
the up and down movement used in the Vim text editor with the keys "j" for
down, and "k" for up.

The app is very much still in development with styling and functionality
currently fairly limited. As such, numeric prefixes to actions are not
supported, therefore you must move 1 line at a time.

Still to do:

- Tests
- Relative line movements with numeric prefixes to actions
- Global state manager like Zustand
- Improved indicator of your score when a game finishes
- Leaderboard
- Github Actions to host it on Github Pages
- Proper styling with an improved header for the instructions, score and timer
- Variable difficulty
- 2D movement with a cursor position rather than only line position

## Built with

- React
- Snowpack
- react-hotkeys-hook

## Running locally

```bash
# Install dependencies
npm i

# Start the server
npm start

```

## Usage

1. Click start!
2. Use the "j" and "k" keys to travel to the target line
3. Once you reach the target line, your score will tick up 1 point and a new
   line will become the target.
4. Try to get quicker and beat your score for a 15 second round!
5. Clicking start or pressing "enter" will reset the score and timer to go
   again.

   __insert gif here__
