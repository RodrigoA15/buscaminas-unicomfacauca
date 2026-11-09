import { useCallback, useMemo, useState } from 'react';
import type { Board, FaceState, GameMode, GameStatus, ProbabilityStats } from '../types/game';
import { BOARD_COLS, BOARD_ROWS, INITIAL_MINES } from '../constants/gameConfig';
import {
  checkWinCondition,
  createEmptyBoard,
  flagAllMinesOnWin,
  placeMinesAndCalculateNeighbors,
  revealAllMines,
  revealCell,
  toggleFlag,
} from '../utils/boardUtils';
import { calculateProbabilityStats } from '../utils/probabilityUtils';
import { soundManager } from '../utils/soundUtils';
import { useTimer } from './useTimer';

export function useMinesweeper() {
  const [board, setBoard] = useState<Board>(() => createEmptyBoard(BOARD_ROWS, BOARD_COLS));
  const [status, setStatus] = useState<GameStatus>('idle');
  const [faceState, setFaceState] = useState<FaceState>('idle');
  const [gameMode, setGameMode] = useState<GameMode>('reveal');
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const { seconds, startTimer, stopTimer, resetTimer } = useTimer();

  // Cálculo memoizado de estadísticas de probabilidad
  const stats: ProbabilityStats = useMemo(() => {
    return calculateProbabilityStats(board, INITIAL_MINES, status);
  }, [board, status]);

  // Restablecer el juego
  const resetGame = useCallback(() => {
    setBoard(createEmptyBoard(BOARD_ROWS, BOARD_COLS));
    setStatus('idle');
    setFaceState('idle');
    resetTimer();
  }, [resetTimer]);

  // Manejar mousedown para la cara sorprendida retro
  const handleCellMouseDown = useCallback(() => {
    if (status === 'playing' || status === 'idle') {
      setFaceState('scared');
    }
  }, [status]);

  // Manejar mouseup para restablecer la cara
  const handleCellMouseUp = useCallback(() => {
    if (status === 'playing' || status === 'idle') {
      setFaceState('idle');
    }
  }, [status]);

  // Alternar el modo de juego (Descubrir / Bandera) para dispositivos táctiles
  const toggleGameMode = useCallback(() => {
    setGameMode((prev) => (prev === 'reveal' ? 'flag' : 'reveal'));
  }, []);

  // Alternar silenciar sonido
  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      soundManager.setMuted(next);
      return next;
    });
  }, []);

  // Clic derecho para colocar/quitar bandera
  const handleCellRightClick = useCallback(
    (row: number, col: number, e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
      }

      if (status === 'won' || status === 'lost') {
        return;
      }

      const cell = board[row][col];
      if (cell.isRevealed) {
        return;
      }

      soundManager.playFlag();
      setBoard((prev) => toggleFlag(prev, row, col));
    },
    [board, status]
  );

  // Clic principal (izquierdo o toque en móvil según el modo)
  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (status === 'won' || status === 'lost') {
        return;
      }

      // Si estamos en modo Bandera (común en móviles), colocar o quitar bandera
      if (gameMode === 'flag') {
        handleCellRightClick(row, col);
        return;
      }

      const currentCell = board[row][col];
      if (currentCell.isFlagged || currentCell.isRevealed) {
        return;
      }

      // Primer clic: Generación diferida para garantizar que nunca sea mina
      if (status === 'idle') {
        startTimer();
        const primedBoard = placeMinesAndCalculateNeighbors(board, row, col, INITIAL_MINES);
        const { nextBoard, hitMine } = revealCell(primedBoard, row, col);

        soundManager.playClick();
        setStatus('playing');
        setFaceState('idle');

        if (hitMine) {
          // Teóricamente imposible debido a la exclusión en placeMinesAndCalculateNeighbors
          stopTimer();
          setStatus('lost');
          setFaceState('lost');
          setBoard(revealAllMines(nextBoard, row, col));
          soundManager.playExplosion();
          return;
        }

        const won = checkWinCondition(nextBoard, INITIAL_MINES);
        if (won) {
          stopTimer();
          setStatus('won');
          setFaceState('won');
          setBoard(flagAllMinesOnWin(nextBoard));
          soundManager.playWin();
        } else {
          setBoard(nextBoard);
        }
        return;
      }

      // Juego en curso
      const { nextBoard, hitMine } = revealCell(board, row, col);

      if (hitMine) {
        stopTimer();
        setStatus('lost');
        setFaceState('lost');
        setBoard(revealAllMines(nextBoard, row, col));
        soundManager.playExplosion();
        return;
      }

      soundManager.playClick();
      const isWon = checkWinCondition(nextBoard, INITIAL_MINES);
      if (isWon) {
        stopTimer();
        setStatus('won');
        setFaceState('won');
        setBoard(flagAllMinesOnWin(nextBoard));
        soundManager.playWin();
      } else {
        setBoard(nextBoard);
        setFaceState('idle');
      }
    },
    [board, gameMode, handleCellRightClick, startTimer, status, stopTimer]
  );

  return {
    board,
    status,
    faceState,
    gameMode,
    stats,
    seconds,
    isMuted,
    handleCellClick,
    handleCellRightClick,
    handleCellMouseDown,
    handleCellMouseUp,
    resetGame,
    toggleGameMode,
    toggleMute,
  };
}
