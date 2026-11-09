import React from 'react';

interface AcademicCardContainerProps {
  title: string;
  icon?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
  highlightHeader?: boolean;
}

export const AcademicCardContainer: React.FC<AcademicCardContainerProps> = ({
  title,
  icon,
  badge,
  children,
  className = '',
  highlightHeader = false,
}) => {
  return (
    <div
      className={`bg-white/95 rounded-2xl border-4 border-yellow-400 shadow-[4px_4px_0px_0px_#b45309] overflow-hidden flex flex-col transition-transform hover:-translate-y-0.5 duration-200 ${className}`}
    >
      {/* Encabezado de la tarjeta */}
      <div
        className={`px-4 py-2.5 border-b-2 border-yellow-400 flex items-center justify-between gap-2 ${
          highlightHeader
            ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300'
            : 'bg-amber-300'
        }`}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-lg select-none">{icon}</span>}
          <h2 className="font-extrabold text-amber-950 text-sm sm:text-base tracking-wide uppercase">
            {title}
          </h2>
        </div>
        {badge && (
          <span className="text-[10px] font-bold uppercase bg-amber-950 text-yellow-300 px-2 py-0.5 rounded-full tracking-wider shrink-0">
            {badge}
          </span>
        )}
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-4 flex-1 flex flex-col justify-between text-slate-800 text-xs sm:text-sm">
        {children}
      </div>
    </div>
  );
};
