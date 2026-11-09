/**
 * Tipos e interfaces estrictas para el juego del Buscaminas.
 */

export type GameStatus = 'idle' | 'playing' | 'won' | 'lost';

export type FaceState = 'idle' | 'scared' | 'won' | 'lost';

export type GameMode = 'reveal' | 'flag';

export type RiskLevel = 'safe' | 'low' | 'moderate' | 'high' | 'critical';

export interface CellCoordinates {
  row: number;
  col: number;
}

export interface Cell {
  id: string;
  row: number;
  col: number;
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighborMines: number;
  isDetonated?: boolean;
  isWrongFlag?: boolean;
}

export type Board = Cell[][];

export interface ProbabilityStats {
  totalCells: number;
  revealedCells: number;
  hiddenCells: number;
  totalMines: number;
  flaggedCount: number;
  remainingMinesDisplay: number;
  initialProbability: number;
  currentProbability: number;
  currentPercentage: number;
  riskMultiplier: number;
  riskLevel: RiskLevel;
  safeCellsLeft: number;
  isGameOver: boolean;
}
