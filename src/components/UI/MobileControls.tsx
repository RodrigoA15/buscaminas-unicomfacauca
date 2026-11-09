import React from 'react';
import type { GameMode, GameStatus } from '../../types/game';

interface MobileControlsProps {
  gameMode: GameMode;
  status: GameStatus;
  onToggleMode: () => void;
  onReset: () => void;
}

export const MobileControls: React.FC<MobileControlsProps> = ({
  gameMode,
  status,
  onToggleMode,
  onReset,
}) => {
  return (
    <div className="w-full max-w-md mx-auto my-3 px-2 flex flex-col items-center gap-2">
      {/* Botones de acción y modo táctil */}
      <div className="flex items-center gap-3 w-full justify-center">
        <button
          type="button"
          onClick={onToggleMode}
          className={`flex-1 max-w-[200px] flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all border-2 ${
            gameMode === 'reveal'
              ? 'bg-amber-400 text-amber-950 border-amber-600 hover:bg-amber-300'
              : 'bg-rose-500 text-white border-rose-700 hover:bg-rose-400'
          }`}
        >
          <span className="text-base">{gameMode === 'reveal' ? '⛏️' : '🚩'}</span>
          <span>Modo: {gameMode === 'reveal' ? 'Descubrir' : 'Poner Bandera'}</span>
        </button>

        <button
          type="button"
          onClick={onReset}
          className="bg-blue-800 hover:bg-blue-700 text-yellow-300 border-2 border-yellow-400 py-2 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
        >
          <span>🔄</span>
          <span>Reiniciar</span>
        </button>
      </div>

      {/* Banner de estado de juego */}
      {status === 'won' && (
        <div className="w-full bg-emerald-500 text-white font-extrabold text-center py-2 px-4 rounded-xl border-2 border-emerald-700 shadow-md animate-bounce">
          🎉 ¡VICTORIA! Has despejado todas las casillas seguras sin detonar minas.
        </div>
      )}

      {status === 'lost' && (
        <div className="w-full bg-rose-600 text-white font-extrabold text-center py-2 px-4 rounded-xl border-2 border-rose-800 shadow-md">
          💥 ¡GAME OVER! Has detonado una mina. La probabilidad condicional era real.
        </div>
      )}

      {/* Instrucción breve para usuario */}
      <p className="text-[11px] text-blue-950/80 font-medium text-center">
        💡 En PC: <strong className="text-blue-950">Clic izquierdo</strong> para descubrir,{' '}
        <strong className="text-blue-950">clic derecho</strong> para colocar bandera.
      </p>
    </div>
  );
};
