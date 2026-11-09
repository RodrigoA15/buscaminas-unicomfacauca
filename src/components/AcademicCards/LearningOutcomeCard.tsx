import React from 'react';
import { AcademicCardContainer } from './AcademicCardContainer';
import { ACADEMIC_SECTIONS } from '../../constants/academicContent';

export const LearningOutcomeCard: React.FC = () => {
  const { title, body } = ACADEMIC_SECTIONS.learningOutcome;

  return (
    <AcademicCardContainer title={title} badge="Objetivo">
      <div className="space-y-3">
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-3 shadow-inner">
          <p className="font-extrabold text-emerald-950 text-sm sm:text-base leading-snug">
            "{body}"
          </p>
        </div>

        <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
          <li>Cálculo de frecuencias relativas en tiempo real.</li>
          <li>Comprensión de eventos dependientes y regla del producto.</li>
          <li>Toma de decisiones basada en reducción de incertidumbre.</li>
        </ul>
      </div>
    </AcademicCardContainer>
  );
};
