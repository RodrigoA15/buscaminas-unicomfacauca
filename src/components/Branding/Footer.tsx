import React from 'react';
import { PixelStoneGroundBorder } from './PixelDecorations';
import { INSTITUTION } from '../../constants/academicContent';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-10 flex flex-col items-center">
      {/* Zócalo de bloques de piedra y terreno pixelado azulado oscuro */}
      <PixelStoneGroundBorder />

      {/* Contenido institucional del pie */}
      <div className="w-full bg-slate-950 text-white py-6 px-4 text-center border-t-2 border-slate-700">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="inline-block bg-yellow-400 text-slate-950 font-black px-4 py-1 rounded-full text-xs sm:text-sm uppercase tracking-widest shadow-md">
            {INSTITUTION.faculty}
          </div>

          <h3 className="font-extrabold text-base sm:text-lg text-yellow-300">
            {INSTITUTION.fullName} — {INSTITUTION.name}
          </h3>

          <p className="text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Muestra académica interactiva para el aprendizaje de conceptos de{' '}
            <strong className="text-yellow-400">{INSTITUTION.subject}</strong>. Proyecto presentado en el marco de{' '}
            <strong className="text-white">{INSTITUTION.event}</strong> en conmemoración de los{' '}
            <strong className="text-yellow-300">{INSTITUTION.anniversary}</strong> y{' '}
            <strong className="text-emerald-400">{INSTITUTION.accreditation}</strong>.
          </p>

          <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800 flex flex-wrap justify-center gap-4">
            <span>© {new Date().getFullYear()} Unicomfacauca</span>
            <span>•</span>
            <span>Desarrollo Frontend con React, TypeScript y Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
