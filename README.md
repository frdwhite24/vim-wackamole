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

## Running locally

```bash
# Install dependencies
npm i

# Start the server
npm start

```

