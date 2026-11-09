import React from 'react';
import type { FaceState } from '../../types/game';
import { FACE_ICONS } from '../../constants/gameConfig';

interface FaceButtonProps {
  faceState: FaceState;
  onReset: () => void;
}

export const FaceButton: React.FC<FaceButtonProps> = ({ faceState, onReset }) => {
  const icon = FACE_ICONS[faceState] || '🙂';

  return (
    <button
      type="button"
      onClick={onReset}
      title="Reiniciar partida"
      aria-label="Reiniciar partida"
      className="w-11 h-11 bg-slate-200 retro-box-raised active:retro-box-sunken flex items-center justify-center text-2xl transition-transform active:scale-95 shadow-sm hover:bg-slate-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
    >
      <span className="select-none filter drop-shadow-sm">{icon}</span>
    </button>
  );
};
