import React, { useState, useEffect } from 'react';
import { playClick, playError, playSuccess } from '../../../../shared/utils/soundEffects';

const ROWS = 8;
const COLS = 8;
const MINES = 10;

const createInitialBoard = () => {
  const board = Array(ROWS)
    .fill(null)
    .map(() =>
      Array(COLS).fill(null).map(() => ({
        isMine: false,
        revealed: false,
        flagged: false,
        count: 0
      }))
    );

  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (!board[r][c].isMine) {
      board[r][c].isMine = true;
      placed++;
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (!board[r][c].isMine) {
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc].isMine) {
              count++;
            }
          }
        }
        board[r][c].count = count;
      }
    }
  }
  return board;
};

export default function MinesweeperWindow() {
  const [grid, setGrid] = useState(createInitialBoard);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [face, setFace] = useState('🙂');
  const [flagCount, setFlagCount] = useState(MINES);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [touchMode, setTouchMode] = useState('dig');

  // Reset game board
  const initBoard = () => {
    setGrid(createInitialBoard());
    setGameOver(false);
    setGameWon(false);
    setFace('🙂');
    setFlagCount(MINES);
    setTimer(0);
    setIsRunning(false);
  };

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isRunning && !gameOver && !gameWon) {
      interval = setInterval(() => {
        setTimer((t) => Math.min(t + 1, 999));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, gameOver, gameWon]);

  // Handle cell click
  const handleCellClick = (r, c) => {
    if (touchMode === 'flag') {
      doToggleFlag(r, c);
    } else {
      revealCell(r, c);
    }
  };

  // Reveal cell logic
  const revealCell = (r, c) => {
    if (gameOver || gameWon || grid[r][c].revealed || grid[r][c].flagged) return;

    if (!isRunning) setIsRunning(true);
    playClick();

    const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));

    if (newGrid[r][c].isMine) {
      playError();
      setGameOver(true);
      setFace('😵');
      newGrid.forEach((row) =>
        row.forEach((cell) => {
          if (cell.isMine) cell.revealed = true;
        })
      );
      setGrid(newGrid);
      return;
    }

    // Flood fill blank cells
    const queue = [[r, c]];
    newGrid[r][c].revealed = true;

    while (queue.length > 0) {
      const [currR, currC] = queue.shift();
      if (newGrid[currR][currC].count === 0) {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = currR + dr;
            const nc = currC + dc;
            if (
              nr >= 0 &&
              nr < ROWS &&
              nc >= 0 &&
              nc < COLS &&
              !newGrid[nr][nc].revealed &&
              !newGrid[nr][nc].flagged
            ) {
              newGrid[nr][nc].revealed = true;
              if (newGrid[nr][nc].count === 0) {
                queue.push([nr, nc]);
              }
            }
          }
        }
      }
    }

    // Check win condition
    let unrevealedSafe = 0;
    newGrid.forEach((row) =>
      row.forEach((cell) => {
        if (!cell.isMine && !cell.revealed) unrevealedSafe++;
      })
    );

    if (unrevealedSafe === 0) {
      playSuccess();
      setGameWon(true);
      setFace('😎');
    }

    setGrid(newGrid);
  };

  const doToggleFlag = (r, c) => {
    if (gameOver || gameWon || grid[r][c].revealed) return;

    playClick();
    const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
    const currentFlagged = newGrid[r][c].flagged;

    if (!currentFlagged && flagCount <= 0) return;

    newGrid[r][c].flagged = !currentFlagged;
    setFlagCount((prev) => (currentFlagged ? prev + 1 : prev - 1));
    setGrid(newGrid);
  };

  const toggleFlag = (e, r, c) => {
    e.preventDefault();
    doToggleFlag(r, c);
  };

  const getNumberColor = (count) => {
    switch (count) {
      case 1:
        return 'text-blue-700 font-bold';
      case 2:
        return 'text-green-700 font-bold';
      case 3:
        return 'text-red-700 font-bold';
      case 4:
        return 'text-indigo-900 font-bold';
      default:
        return 'text-black font-bold';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-1 sm:p-2 text-xs">
      <div className="win95-raised p-2 sm:p-3 bg-[#c0c0c0] inline-block select-none max-w-full">
        {/* Minesweeper Header Bar */}
        <div className="win95-sunken p-1.5 sm:p-2 bg-[#c0c0c0] flex items-center justify-between mb-2 sm:mb-3">
          <div className="bg-black text-red-600 font-mono-90s text-base sm:text-lg font-bold px-1.5 sm:px-2 py-0.5 border border-gray-600 tracking-widest w-12 sm:w-14 text-center">
            {String(flagCount).padStart(3, '0')}
          </div>

          <button
            onClick={() => {
              playClick();
              initBoard();
            }}
            className="win95-btn w-8 h-8 text-lg flex items-center justify-center active:scale-95"
            title="Reset Game"
          >
            {face}
          </button>

          <div className="bg-black text-red-600 font-mono-90s text-base sm:text-lg font-bold px-1.5 sm:px-2 py-0.5 border border-gray-600 tracking-widest w-12 sm:w-14 text-center">
            {String(timer).padStart(3, '0')}
          </div>
        </div>

        {/* Mobile Mode Toggle (Dig vs Flag) */}
        <div className="flex items-center justify-center gap-1.5 mb-2 sm:hidden">
          <button
            onClick={() => {
              playClick();
              setTouchMode('dig');
            }}
            className={`win95-btn px-2 py-0.5 text-[11px] font-bold ${
              touchMode === 'dig' ? 'bg-[#000080] text-white' : ''
            }`}
          >
            ⛏️ Dig
          </button>
          <button
            onClick={() => {
              playClick();
              setTouchMode('flag');
            }}
            className={`win95-btn px-2 py-0.5 text-[11px] font-bold ${
              touchMode === 'flag' ? 'bg-[#000080] text-white' : ''
            }`}
          >
            🚩 Flag
          </button>
        </div>

        {/* Minesweeper Grid */}
        <div className="win95-sunken p-1 bg-[#808080] inline-grid grid-cols-8 gap-0">
          {grid.map((row, r) =>
            row.map((cell, c) => (
              <button
                key={`${r}-${c}`}
                onClick={() => handleCellClick(r, c)}
                onContextMenu={(e) => toggleFlag(e, r, c)}
                className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs font-mono-90s cursor-pointer select-none active:scale-95 ${
                  cell.revealed
                    ? 'bg-[#c0c0c0] border border-[#808080]'
                    : 'win95-btn'
                }`}
              >
                {cell.revealed ? (
                  cell.isMine ? (
                    '💣'
                  ) : cell.count > 0 ? (
                    <span className={getNumberColor(cell.count)}>
                      {cell.count}
                    </span>
                  ) : (
                    ''
                  )
                ) : cell.flagged ? (
                  '🚩'
                ) : (
                  ''
                )}
              </button>
            ))
          )}
        </div>

        <div className="text-[10px] text-gray-700 text-center mt-2 font-sys">
          <span className="hidden sm:inline">Left-click: Dig • Right-click: Flag 🚩</span>
          <span className="sm:hidden">Mode: {touchMode === 'dig' ? '⛏️ Tap to reveal' : '🚩 Tap to flag'}</span>
        </div>
      </div>
    </div>
  );
}
