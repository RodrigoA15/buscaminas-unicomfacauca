import React from 'react';
import { AUTHORS } from '../../constants/academicContent';

export const AuthorsBanner: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-3 px-4">
      <div className="bg-amber-300 border-2 border-amber-500 rounded-2xl py-2 px-4 shadow-[0_4px_0_0_#b45309] flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-amber-950">
        <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px] sm:text-xs text-amber-900 bg-amber-400/80 px-2.5 py-0.5 rounded-lg border border-amber-600/30">
          Integrantes:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {AUTHORS.map((author, idx) => (
            <React.Fragment key={author.name}>
              <span className="hover:text-blue-900 transition-colors whitespace-nowrap">
                {author.name}
              </span>
              {idx < AUTHORS.length - 1 && (
                <span className="text-amber-600 select-none hidden sm:inline">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
