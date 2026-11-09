import React from 'react';
import { AcademicCardContainer } from './AcademicCardContainer';
import { ACADEMIC_SECTIONS } from '../../constants/academicContent';

export const IntroCard: React.FC = () => {
  const { title, body } = ACADEMIC_SECTIONS.introduction;

  return (
    <AcademicCardContainer title={title} badge="Contexto">
      <div className="space-y-3">
        <p className="font-medium text-slate-700 leading-relaxed text-sm">
          {body}
        </p>

        <div className="bg-sky-50 border-l-4 border-sky-500 p-2.5 rounded-r-xl text-xs text-sky-900 leading-snug">
          <span className="font-bold">Propósito pedagógico:</span> Transformar las fórmulas abstractas
          en decisiones cuantificables con riesgo real durante cada casilla jugada.
        </div>
      </div>
    </AcademicCardContainer>
  );
};
