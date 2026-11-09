/**
 * Constantes de configuración del juego Buscaminas.
 */

export const BOARD_ROWS = 6;
export const BOARD_COLS = 6;
export const TOTAL_CELLS = BOARD_ROWS * BOARD_COLS; // 36
export const INITIAL_MINES = 6;
export const INITIAL_PROBABILITY = INITIAL_MINES / TOTAL_CELLS; // 6/36 ≈ 0.1667

/**
 * Colores estándar de números clásicos de Buscaminas Windows 95/98
 */
export const NUMBER_STYLES: Record<number, { textClass: string; colorHex: string }> = {
  1: { textClass: 'text-blue-600 font-extrabold', colorHex: '#0000ff' },
  2: { textClass: 'text-emerald-700 font-extrabold', colorHex: '#008000' },
  3: { textClass: 'text-red-600 font-extrabold', colorHex: '#ff0000' },
  4: { textClass: 'text-indigo-900 font-extrabold', colorHex: '#000080' },
  5: { textClass: 'text-amber-900 font-extrabold', colorHex: '#800000' },
  6: { textClass: 'text-teal-600 font-extrabold', colorHex: '#008080' },
  7: { textClass: 'text-neutral-900 font-extrabold', colorHex: '#000000' },
  8: { textClass: 'text-stone-500 font-extrabold', colorHex: '#808080' },
};

export const FACE_ICONS = {
  idle: '🙂',
  scared: '😮',
  won: '😎',
  lost: '😵',
} as const;
