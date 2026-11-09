import React from 'react';
import { AcademicCardContainer } from './AcademicCardContainer';
import { ACADEMIC_SECTIONS } from '../../constants/academicContent';

export const ConclusionCard: React.FC = () => {
  const { title, body, footerTag } = ACADEMIC_SECTIONS.conclusion;

  return (
    <AcademicCardContainer title={title} badge="Cierre">
      <div className="space-y-3">
        <div className="bg-gradient-to-br from-amber-100 to-yellow-100 border-2 border-yellow-400 rounded-xl p-3 shadow-sm">
          <p className="font-extrabold text-amber-950 text-sm sm:text-base leading-snug">
            "{body}"
          </p>
        </div>

        <p className="text-xs text-slate-700 leading-relaxed">
          En cada turno, la información recopilada mediante los números contiguos y el cálculo de la
          probabilidad condicional permite discernir entre movimientos de alto riesgo y jugadas
          estadísticamente seguras.
        </p>

        {/* Banner inferior de la tarjeta */}
        <div className="bg-blue-900 text-yellow-300 font-bold text-center py-1.5 px-3 rounded-lg text-xs uppercase tracking-wider border border-yellow-400">
          {footerTag}
        </div>
      </div>
    </AcademicCardContainer>
  );
};
