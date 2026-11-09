import React from 'react';
import type { Cell as CellType } from '../../types/game';
import { NUMBER_STYLES } from '../../constants/gameConfig';

interface CellProps {
  cell: CellType;
  onClick: (row: number, col: number) => void;
  onRightClick: (row: number, col: number, e: React.MouseEvent) => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
}

export const Cell: React.FC<CellProps> = ({
  cell,
  onClick,
  onRightClick,
  onMouseDown,
  onMouseUp,
}) => {
  const { row, col, isMine, isRevealed, isFlagged, neighborMines, isDetonated, isWrongFlag } = cell;

  // Manejo del clic primario
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(row, col);
  };

  // Manejo del clic derecho para banderas
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    onRightClick(row, col, e);
  };

  // Contenido interno de la casilla
  const renderContent = () => {
    if (isWrongFlag) {
      return (
        <span className="relative inline-flex items-center justify-center text-xs sm:text-sm">
          <span>🚩</span>
          <span className="absolute text-red-600 font-black text-base select-none">✕</span>
        </span>
      );
    }

    if (isFlagged) {
      return <span className="select-none text-base sm:text-lg animate-bounce-short">🚩</span>;
    }

    if (!isRevealed) {
      return null;
    }

    if (isMine) {
      return <span className="select-none text-base sm:text-lg">💣</span>;
    }

    if (neighborMines > 0) {
      const style = NUMBER_STYLES[neighborMines];
      return (
        <span
          className={`font-black select-none text-base sm:text-xl ${style?.textClass || 'text-slate-800'}`}
          style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }}
        >
          {neighborMines}
        </span>
      );
    }

    return null;
  };

  // Estilos de borde y fondo según el estado de la casilla
  const getCellClasses = (): string => {
    const base =
      'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center select-none font-bold transition-colors text-center outline-none focus:ring-1 focus:ring-yellow-400';

    if (isDetonated) {
      return `${base} bg-red-600 border border-red-800 text-white`;
    }

    if (isRevealed) {
      return `${base} bg-slate-200/90 retro-cell-revealed`;
    }

    return `${base} bg-slate-300 retro-cell-unrevealed hover:bg-slate-200 active:retro-cell-revealed cursor-pointer`;
  };

  // Etiqueta accesible para lectores de pantalla
  const getAriaLabel = (): string => {
    if (isWrongFlag) return `Fila ${row + 1}, columna ${col + 1}: Bandera incorrecta`;
    if (isFlagged) return `Fila ${row + 1}, columna ${col + 1}: Marcada con bandera`;
    if (!isRevealed) return `Fila ${row + 1}, columna ${col + 1}: Casilla oculta`;
    if (isDetonated) return `Fila ${row + 1}, columna ${col + 1}: Mina detonada`;
    if (isMine) return `Fila ${row + 1}, columna ${col + 1}: Mina`;
    if (neighborMines > 0)
      return `Fila ${row + 1}, columna ${col + 1}: ${neighborMines} minas contiguas`;
    return `Fila ${row + 1}, columna ${col + 1}: Casilla despejada`;
  };

  return (
    <button
      type="button"
      role="gridcell"
      aria-label={getAriaLabel()}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
      className={getCellClasses()}
    >
      {renderContent()}
    </button>
  );
};
