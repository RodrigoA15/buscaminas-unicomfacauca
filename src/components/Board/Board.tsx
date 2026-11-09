import React from 'react';
import type { Board as BoardType, FaceState } from '../../types/game';
import { ScoreBoard } from '../ScoreBoard/ScoreBoard';
import { Cell } from './Cell';

interface BoardProps {
  board: BoardType;
  minesRemaining: number;
  faceState: FaceState;
  seconds: number;
  isMuted: boolean;
  onCellClick: (row: number, col: number) => void;
  onCellRightClick: (row: number, col: number, e: React.MouseEvent) => void;
  onCellMouseDown: () => void;
  onCellMouseUp: () => void;
  onReset: () => void;
  onToggleMute: () => void;
}

export const Board: React.FC<BoardProps> = ({
  board,
  minesRemaining,
  faceState,
  seconds,
  isMuted,
  onCellClick,
  onCellRightClick,
  onCellMouseDown,
  onCellMouseUp,
  onReset,
  onToggleMute,
}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Contenedor clásico gris Windows 95 con bisel exterior 3D */}
      <div className="bg-slate-300 retro-box-raised p-3 sm:p-4 rounded-sm shadow-2xl border-4 border-slate-400">
        {/* Marcador superior retro */}
        <ScoreBoard
          minesRemaining={minesRemaining}
          faceState={faceState}
          seconds={seconds}
          isMuted={isMuted}
          onReset={onReset}
          onToggleMute={onToggleMute}
        />

        {/* Separador con bisel */}
        <div className="my-2.5 sm:my-3 border-t-2 border-slate-400/80 border-b-2 border-white/80" />

        {/* Cuadrícula de 6 x 6 con bisel interior hundido */}
        <div
          role="grid"
          aria-label="Tablero de Buscaminas de 6 por 6"
          className="retro-box-sunken p-1 bg-slate-350 bg-neutral-400/30 inline-block overflow-hidden"
        >
          <div className="grid grid-cols-6 gap-0 border border-slate-500">
            {board.map((rowArr) =>
              rowArr.map((cell) => (
                <Cell
                  key={cell.id}
                  cell={cell}
                  onClick={onCellClick}
                  onRightClick={onCellRightClick}
                  onMouseDown={onCellMouseDown}
                  onMouseUp={onCellMouseUp}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
