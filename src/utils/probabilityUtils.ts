/**
 * Funciones puras para cálculo de probabilidad y estadística del Buscaminas.
 * Modela la Probabilidad Clásica (Laplace) y la Probabilidad Condicional en tiempo real.
 */

import type { Board, GameStatus, ProbabilityStats, RiskLevel } from '../types/game';
import { INITIAL_MINES, TOTAL_CELLS } from '../constants/gameConfig';

/**
 * Calcula la clasificación cualitativa del nivel de riesgo.
 */
export function getRiskLevel(probability: number): RiskLevel {
  if (probability < 0.20) return 'safe';
  if (probability < 0.30) return 'low';
  if (probability < 0.45) return 'moderate';
  if (probability < 0.70) return 'high';
  return 'critical';
}

/**
 * Retorna colores asociados al nivel de riesgo para visualizaciones dinámicas.
 */
export function getRiskColorStyles(level: RiskLevel): {
  badgeBg: string;
  badgeText: string;
  barColor: string;
  label: string;
} {
  switch (level) {
    case 'safe':
      return {
        badgeBg: 'bg-emerald-100 border-emerald-400',
        badgeText: 'text-emerald-800',
        barColor: 'bg-emerald-500',
        label: 'Riesgo Inicial / Seguro',
      };
    case 'low':
      return {
        badgeBg: 'bg-lime-100 border-lime-400',
        badgeText: 'text-lime-800',
        barColor: 'bg-lime-500',
        label: 'Riesgo Bajo',
      };
    case 'moderate':
      return {
        badgeBg: 'bg-amber-100 border-amber-400',
        badgeText: 'text-amber-800',
        barColor: 'bg-amber-500',
        label: 'Riesgo Moderado',
      };
    case 'high':
      return {
        badgeBg: 'bg-orange-100 border-orange-400',
        badgeText: 'text-orange-800',
        barColor: 'bg-orange-500',
        label: 'Riesgo Alto',
      };
    case 'critical':
      return {
        badgeBg: 'bg-rose-100 border-rose-500',
        badgeText: 'text-rose-800',
        barColor: 'bg-rose-600',
        label: 'Riesgo Crítico / Inminente',
      };
  }
}

/**
 * Calcula todas las estadísticas probabilísticas del tablero en tiempo real.
 */
export function calculateProbabilityStats(
  board: Board,
  totalMines: number = INITIAL_MINES,
  gameStatus: GameStatus = 'idle'
): ProbabilityStats {
  const rows = board.length;
  const cols = board[0]?.length || 0;
  const total = rows * cols || TOTAL_CELLS;

  let revealedCount = 0;
  let flaggedCount = 0;

  for (const row of board) {
    for (const cell of row) {
      if (cell.isRevealed && !cell.isMine) {
        revealedCount++;
      }
      if (cell.isFlagged) {
        flaggedCount++;
      }
    }
  }

  const hiddenCells = Math.max(0, total - revealedCount);
  const initialProbability = total > 0 ? totalMines / total : 0;

  let currentProbability: number;

  if (gameStatus === 'idle') {
    currentProbability = initialProbability;
  } else if (gameStatus === 'won') {
    currentProbability = 1.0; // En la victoria, todas las casillas ocultas son minas
  } else if (gameStatus === 'lost') {
    // Si ya perdió, se calcula con base a la última condición
    currentProbability = hiddenCells > 0 ? totalMines / hiddenCells : 1.0;
  } else {
    // Juego en curso: las 6 minas siguen escondidas entre las casillas ocultas
    currentProbability = hiddenCells > 0 ? Math.min(1, totalMines / hiddenCells) : 1;
  }

  const currentPercentage = Number((currentProbability * 100).toFixed(2));
  const riskMultiplier = Number((currentProbability / (initialProbability || 1)).toFixed(2));
  const riskLevel = getRiskLevel(currentProbability);
  const remainingMinesDisplay = totalMines - flaggedCount;
  const safeCellsLeft = Math.max(0, total - totalMines - revealedCount);

  return {
    totalCells: total,
    revealedCells: revealedCount,
    hiddenCells,
    totalMines,
    flaggedCount,
    remainingMinesDisplay,
    initialProbability,
    currentProbability,
    currentPercentage,
    riskMultiplier,
    riskLevel,
    safeCellsLeft,
    isGameOver: gameStatus === 'won' || gameStatus === 'lost',
  };
}

/**
 * Formatea un número flotante a porcentaje legible (ej. 16.67%).
 */
export function formatPercentage(val: number): string {
  return `${(val * 100).toFixed(2)}%`;
}
