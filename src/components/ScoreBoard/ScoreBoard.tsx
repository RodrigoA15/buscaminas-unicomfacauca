import React from 'react';
import type { FaceState } from '../../types/game';
import { DigitalDisplay } from './DigitalDisplay';
import { FaceButton } from './FaceButton';

interface ScoreBoardProps {
  minesRemaining: number;
  faceState: FaceState;
  seconds: number;
  isMuted: boolean;
  onReset: () => void;
  onToggleMute: () => void;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({
  minesRemaining,
  faceState,
  seconds,
  isMuted,
  onReset,
  onToggleMute,
}) => {
  return (
    <div className="w-full bg-slate-300 retro-box-sunken p-2.5 flex items-center justify-between gap-2 select-none">
      {/* Contador de minas restantes */}
      <div className="flex items-center gap-1.5">
        <DigitalDisplay value={minesRemaining} ariaLabel="Minas restantes" />
      </div>

      {/* Cara interactiva central y control de audio */}
      <div className="flex items-center gap-2">
        <FaceButton faceState={faceState} onReset={onReset} />
        <button
          type="button"
          onClick={onToggleMute}
          title={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
          className="w-8 h-8 rounded bg-slate-200 retro-box-raised active:retro-box-sunken text-xs flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-700"
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Temporizador digital de segundos transcurridos */}
      <div className="flex items-center gap-1.5">
        <DigitalDisplay value={seconds} ariaLabel="Tiempo transcurrido en segundos" />
      </div>
    </div>
  );
};
