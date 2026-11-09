import React from 'react';
import type { ProbabilityStats } from '../../types/game';
import { AcademicCardContainer } from './AcademicCardContainer';
import { ACADEMIC_SECTIONS } from '../../constants/academicContent';
import { getRiskColorStyles } from '../../utils/probabilityUtils';

interface RealtimeStatsCardProps {
  stats: ProbabilityStats;
}

export const RealtimeStatsCard: React.FC<RealtimeStatsCardProps> = ({ stats }) => {
  const { title, summary, explanation } = ACADEMIC_SECTIONS.results;
  const riskInfo = getRiskColorStyles(stats.riskLevel);

  // Progreso de despeje seguro (30 casillas seguras en total)
  const safeProgress = Math.min(100, (stats.revealedCells / (stats.totalCells - stats.totalMines)) * 100);

  return (
    <AcademicCardContainer
      title={title}
      badge="En Tiempo Real"
      highlightHeader={true}
    >
      <div className="space-y-3">
        {/* Conclusión clave del póster */}
        <div className="bg-amber-100/80 border-l-4 border-amber-600 p-2.5 rounded-r-xl">
          <p className="font-extrabold text-amber-950 text-xs sm:text-sm leading-snug">
            "{summary}"
          </p>
        </div>

        {/* Medidor visual de riesgo probabilístico */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-700">Riesgo del Próximo Clic:</span>
            <span className={`px-2 py-0.5 rounded-full border text-[11px] font-black ${riskInfo.badgeBg} ${riskInfo.badgeText}`}>
              {riskInfo.label} ({stats.currentPercentage}%)
            </span>
          </div>

          {/* Barra de probabilidad dinámica */}
          <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300">
            <div
              className={`h-full rounded-full transition-all duration-500 ${riskInfo.barColor}`}
              style={{ width: `${Math.min(100, Math.max(16.67, stats.currentPercentage))}%` }}
            />
          </div>

          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>Inicio: 16.67%</span>
            <span>50.0%</span>
            <span>100.0%</span>
          </div>
        </div>

        {/* Comparativa cuantitativa: Inicial vs Actual */}
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-2">
            <div className="text-[10px] text-blue-800 font-bold uppercase">P(Mina) Inicial</div>
            <div className="text-lg font-black text-blue-900 font-mono">16.67%</div>
            <div className="text-[10px] text-blue-600">6 / 36 casillas</div>
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-xl p-2">
            <div className="text-[10px] text-rose-800 font-bold uppercase">P(Mina) Actual</div>
            <div className="text-lg font-black text-rose-900 font-mono">
              {stats.currentPercentage}%
            </div>
            <div className="text-[10px] text-rose-600 font-bold">
              {stats.riskMultiplier > 1 ? `x${stats.riskMultiplier} veces más riesgo` : 'Riesgo base'}
            </div>
          </div>
        </div>

        {/* Métricas del espacio muestral */}
        <div className="grid grid-cols-3 gap-1.5 text-center bg-white border border-slate-200 rounded-xl p-2">
          <div>
            <div className="text-[9px] uppercase font-bold text-slate-500">Reveladas</div>
            <div className="text-sm font-black text-emerald-700 font-mono">
              {stats.revealedCells} / 30
            </div>
          </div>
          <div>
            <div className="text-[9px] uppercase font-bold text-slate-500">Ocultas</div>
            <div className="text-sm font-black text-blue-700 font-mono">{stats.hiddenCells}</div>
          </div>
          <div>
            <div className="text-[9px] uppercase font-bold text-slate-500">Minas</div>
            <div className="text-sm font-black text-rose-700 font-mono">{stats.totalMines}</div>
          </div>
        </div>

        {/* Barra de progreso de victoria */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] font-semibold text-slate-600">
            <span>Progreso hacia la Victoria:</span>
            <span>{safeProgress.toFixed(1)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${safeProgress}%` }}
            />
          </div>
        </div>

        <p className="text-[11px] text-slate-600 leading-tight">
          {explanation}
        </p>
      </div>
    </AcademicCardContainer>
  );
};
