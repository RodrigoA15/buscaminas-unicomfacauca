import React from 'react';
import type { ProbabilityStats } from '../../types/game';
import { AcademicCardContainer } from './AcademicCardContainer';
import { ACADEMIC_SECTIONS } from '../../constants/academicContent';

interface FormulaCardProps {
  stats: ProbabilityStats;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({ stats }) => {
  const { title, note } = ACADEMIC_SECTIONS.formula;

  return (
    <AcademicCardContainer
      title={title}
      badge="Ecuación Central"
      highlightHeader={true}
    >
      <div className="space-y-3">
        {/* Visualización destacada estilo LaTeX / pizarra */}
        <div className="bg-slate-900 text-yellow-300 rounded-xl p-3 border-2 border-yellow-400 shadow-inner text-center">
          <div className="text-[11px] uppercase tracking-widest text-slate-400 mb-1">
            Fórmula General
          </div>

          <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-black py-1">
            <span className="text-yellow-400">P(mina)</span>
            <span className="text-white">=</span>
            <div className="inline-flex flex-col items-center">
              <span className="text-emerald-400 border-b-2 border-white px-2">
                Minas restantes
              </span>
              <span className="text-sky-300 px-2 pt-0.5">
                Casillas ocultas
              </span>
            </div>
          </div>
        </div>

        {/* Sustitución matemática en tiempo real */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-2.5">
          <div className="text-[10px] font-bold uppercase text-amber-900 mb-1 flex items-center justify-between">
            <span>Sustitución en Vivo:</span>
            <span className="bg-amber-300 text-amber-950 px-2 py-0.5 rounded text-[10px]">
              Actualizado
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-extrabold text-slate-800">
            <span className="text-amber-900">P(mina)</span>
            <span>=</span>
            <div className="inline-flex flex-col items-center">
              <span className="text-emerald-700 font-mono border-b-2 border-slate-700 px-2">
                {stats.totalMines} minas
              </span>
              <span className="text-blue-800 font-mono px-2">
                {stats.hiddenCells} ocultas
              </span>
            </div>
            <span>=</span>
            <span className="text-base sm:text-lg font-black text-rose-600 font-mono bg-white px-2 py-0.5 rounded border border-rose-300 shadow-sm">
              {stats.currentPercentage}%
            </span>
          </div>
        </div>

        <p className="text-[11px] text-slate-600 leading-tight italic">
          {note}
        </p>
      </div>
    </AcademicCardContainer>
  );
};
