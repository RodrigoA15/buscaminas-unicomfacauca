import React from 'react';

/**
 * Logotipos e insignias institucionales vectoriales de Unicomfacauca,
 * Acreditación de Alta Calidad, 25 Años y EXPLO-RA.
 */

export const UnicomfacaucaLogo: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center gap-2 bg-white/95 px-3 py-1.5 rounded-xl border-2 border-yellow-400 shadow-sm ${className}`}>
      {/* Símbolo Comfacauca estilizado: sol y figuras humanas */}
      <svg className="w-8 h-8 text-blue-700 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#003876" />
        {/* Sol amarillo superior */}
        <circle cx="50" cy="30" r="14" fill="#FFCC00" />
        {/* Figuras unidas */}
        <path
          d="M26 68C26 56 36 50 50 50C64 50 74 56 74 68C74 74 68 78 50 78C32 78 26 74 26 68Z"
          fill="#009A44"
        />
        <path
          d="M36 72C36 64 42 60 50 60C58 60 64 64 64 72C64 76 58 78 50 78C42 78 36 76 36 72Z"
          fill="#FFFFFF"
        />
      </svg>
      <div className="flex flex-col text-left leading-tight">
        <span className="font-extrabold text-blue-900 tracking-wider text-xs md:text-sm">UNICOMFACAUCA</span>
        <span className="text-[9px] text-emerald-700 font-semibold uppercase tracking-tight">
          Corporación Universitaria Comfacauca
        </span>
      </div>
    </div>
  );
};

export const AccreditationBadge: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-xl border-2 border-emerald-500 shadow-sm ${className}`}>
      <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">
        ★
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[10px] uppercase font-bold text-emerald-800">Acreditación</span>
        <span className="text-[9px] font-semibold text-slate-600">Institucional</span>
      </div>
    </div>
  );
};

export const AnniversaryBadge: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center gap-1.5 bg-amber-400 text-amber-950 px-3 py-1.5 rounded-xl border-2 border-amber-600 shadow-sm font-bold ${className}`}>
      <span className="text-base font-black">25</span>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[10px] uppercase tracking-wide">Años</span>
        <span className="text-[8px] font-semibold text-amber-900">de Excelencia</span>
      </div>
    </div>
  );
};

export const ExploraBadge: React.FC<{ className?: string }> = ({ className = 'h-10' }) => {
  return (
    <div className={`flex items-center gap-1.5 bg-blue-900 text-yellow-300 px-3 py-1.5 rounded-xl border-2 border-yellow-400 shadow-sm ${className}`}>
      <span className="text-sm font-pixel text-yellow-400">⚡</span>
      <div className="flex flex-col text-left leading-none">
        <span className="text-xs font-black tracking-widest text-white">EXPLO-RA</span>
        <span className="text-[8px] font-medium text-yellow-300">Ciencia &amp; Datos</span>
      </div>
    </div>
  );
};
