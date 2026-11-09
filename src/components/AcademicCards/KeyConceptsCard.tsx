import React from 'react';
import { AcademicCardContainer } from './AcademicCardContainer';
import { ACADEMIC_SECTIONS } from '../../constants/academicContent';

export const KeyConceptsCard: React.FC = () => {
  const { title, items } = ACADEMIC_SECTIONS.keyConcepts;

  return (
    <AcademicCardContainer title={title} badge="Teoría">
      <div className="space-y-2.5">
        {items.map((concept) => (
          <div
            key={concept.id}
            className="bg-amber-50/70 border border-amber-200 rounded-xl p-2.5 transition-all hover:bg-amber-100/60"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-extrabold text-xs text-amber-950 uppercase tracking-wide">
                {concept.title}
              </span>
              {concept.highlight && (
                <span className="text-[10px] font-black bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full">
                  {concept.highlight}
                </span>
              )}
            </div>

            {concept.formula && (
              <div className="font-mono text-xs font-bold text-blue-900 bg-white/80 py-1 px-2 rounded border border-blue-200 my-1">
                {concept.formula}
              </div>
            )}

            <p className="text-[11px] text-slate-600 leading-tight">
              {concept.description}
            </p>
          </div>
        ))}
      </div>
    </AcademicCardContainer>
  );
};
