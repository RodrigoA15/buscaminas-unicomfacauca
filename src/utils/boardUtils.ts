/**
 * Funciones puras para manipulación de la matriz del Buscaminas.
 * Arquitectura limpia: funciones deterministas sin efectos secundarios.
 */

import type { Board, Cell } from '../types/game';
import { BOARD_COLS, BOARD_ROWS } from '../constants/gameConfig';

/**
 * Crea un tablero inicial vacío de dimensiones dadas.
 */
export function createEmptyBoard(rows: number = BOARD_ROWS, cols: number = BOARD_COLS): Board {
  const board: Board = [];

  for (let r = 0; r < rows; r++) {
    const row: Cell[] = [];
    for (let c = 0; c < cols; c++) {
      row.push({
        id: `cell-${r}-${c}`,
        row: r,
        col: c,
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborMines: 0,
      });
    }
    board.push(row);
  }

  return board;
}

/**
 * Obtiene las celdas vecinas válidas (hasta 8 direcciones).
 */
export function getNeighborCells(board: Board, row: number, col: number): Cell[] {
  const neighbors: Cell[] = [];
  const rows = board.length;
  const cols = board[0].length;

  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const nr = row + dr;
      const nc = col + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        neighbors.push(board[nr][nc]);
      }
    }
  }

  return neighbors;
}

/**
 * Generación diferida de minas: garantiza que el primer clic nunca sea una mina.
 * Distribuye aleatoriamente `totalMines` en el tablero excluyendo la posición inicial.
 */
export function placeMinesAndCalculateNeighbors(
  initialBoard: Board,
  firstClickRow: number,
  firstClickCol: number,
  totalMines: number
): Board {
  const rows = initialBoard.length;
  const cols = initialBoard[0].length;

  // Clona profundamente el tablero para mantener la pureza
  const board: Board = initialBoard.map((row) => row.map((cell) => ({ ...cell })));

  // Lista de posiciones candidatas disponibles (excluyendo el primer clic)
  const candidateCoords: { r: number; c: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === firstClickRow && c === firstClickCol) continue;
      candidateCoords.push({ r, c });
    }
  }

  // Barajado Fisher-Yates para selección verdaderamente aleatoria e imparcial
  for (let i = candidateCoords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = candidateCoords[i];
    candidateCoords[i] = candidateCoords[j];
    candidateCoords[j] = temp;
  }

  // Coloca las minas en los primeros `totalMines` candidatos
  const placedMines = Math.min(totalMines, candidateCoords.length);
  for (let i = 0; i < placedMines; i++) {
    const { r, c } = candidateCoords[i];
    board[r][c].isMine = true;
  }

  // Calcula las minas contiguas para cada celda
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c].isMine) continue;
      const neighbors = getNeighborCells(board, r, c);
      board[r][c].neighborMines = neighbors.filter((n) => n.isMine).length;
    }
  }

  return board;
}

/**
 * Revela una celda seleccionada.
 * Si es mina, marca detonación.
 * Si neighborMines === 0, propaga en cascada (flood-fill BFS).
 */
export function revealCell(
  board: Board,
  row: number,
  col: number
): { nextBoard: Board; hitMine: boolean; newlyRevealedCount: number } {
  const rows = board.length;
  const cols = board[0].length;
  const target = board[row][col];

  // Si ya está revelada o tiene bandera, no hay cambios
  if (target.isRevealed || target.isFlagged) {
    return { nextBoard: board, hitMine: false, newlyRevealedCount: 0 };
  }

  // Clona profundamente el tablero
  const nextBoard: Board = board.map((rArr) => rArr.map((c) => ({ ...c })));

  // Clic en mina
  if (nextBoard[row][col].isMine) {
    nextBoard[row][col].isRevealed = true;
    nextBoard[row][col].isDetonated = true;
    return { nextBoard, hitMine: true, newlyRevealedCount: 1 };
  }

  // Propagación en cascada mediante cola (BFS)
  let newlyRevealed = 0;
  const queue: { r: number; c: number }[] = [{ r: row, c: col }];
  nextBoard[row][col].isRevealed = true;
  newlyRevealed++;

  while (queue.length > 0) {
    const curr = queue.shift()!;
    const currCell = nextBoard[curr.r][curr.c];

    // Si tiene minas contiguas, nos detenemos en el borde numérico
    if (currCell.neighborMines > 0) {
      continue;
    }

    // Si es vacía (0 minas contiguas), revelamos a los vecinos
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = curr.r + dr;
        const nc = curr.c + dc;

        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          const neighbor = nextBoard[nr][nc];
          if (!neighbor.isRevealed && !neighbor.isFlagged && !neighbor.isMine) {
            neighbor.isRevealed = true;
            newlyRevealed++;
            // Si el vecino también es vacío, continuar la cascada
            if (neighbor.neighborMines === 0) {
              queue.push({ r: nr, c: nc });
            }
          }
        }
      }
    }
  }

  return { nextBoard, hitMine: false, newlyRevealedCount: newlyRevealed };
}

/**
 * Alterna la bandera en una celda no revelada.
 */
export function toggleFlag(board: Board, row: number, col: number): Board {
  const target = board[row][col];
  if (target.isRevealed) {
    return board;
  }

  return board.map((rArr, r) =>
    rArr.map((cell, c) => {
      if (r === row && c === col) {
        return { ...cell, isFlagged: !cell.isFlagged };
      }
      return cell;
    })
  );
}

/**
 * Verifica si el jugador ha ganado:
 * Todas las celdas sin minas han sido reveladas.
 */
export function checkWinCondition(board: Board, totalMines: number): boolean {
  let revealedCount = 0;
  const totalCells = board.length * board[0].length;
  const safeCells = totalCells - totalMines;

  for (const row of board) {
    for (const cell of row) {
      if (cell.isRevealed && !cell.isMine) {
        revealedCount++;
      }
    }
  }

  return revealedCount === safeCells;
}

/**
 * Revela todas las minas al finalizar el juego por derrota.
 * Identifica banderas incorrectas para propósitos pedagógicos.
 */
export function revealAllMines(board: Board, hitRow?: number, hitCol?: number): Board {
  return board.map((row, r) =>
    row.map((cell, c) => {
      const isHit = r === hitRow && c === hitCol;

      if (cell.isMine) {
        return {
          ...cell,
          isRevealed: true,
          isDetonated: isHit,
        };
      }

      // Si el jugador puso bandera en una casilla que NO era mina
      if (cell.isFlagged && !cell.isMine) {
        return {
          ...cell,
          isWrongFlag: true,
        };
      }

      return cell;
    })
  );
}

/**
 * Coloca banderas automáticamente en todas las minas al ganar.
 */
export function flagAllMinesOnWin(board: Board): Board {
  return board.map((row) =>
    row.map((cell) => {
      if (cell.isMine) {
        return {
          ...cell,
          isFlagged: true,
        };
      }
      return cell;
    })
  );
}
