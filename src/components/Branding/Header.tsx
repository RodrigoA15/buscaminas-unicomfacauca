import React from 'react';
import { AuthorsBanner } from './AuthorsBanner';
import { PixelBombIcon, PixelFlagIcon } from './PixelDecorations';
import defaultBanner from '../../assets/logo-unicomfa.png';

interface HeaderProps {
  /**
   * Ruta o importación a la imagen del banner institucional (por defecto logo-unicomfa.png)
   */
  bannerSrc?: string;
  bannerAlt?: string;
}

export const Header: React.FC<HeaderProps> = ({
  bannerSrc = defaultBanner,
  bannerAlt = 'Banner Institucional Unicomfacauca',
}) => {
  return (
    <header className="w-full relative z-10 flex flex-col items-center pt-4 pb-2 px-4">
      {/* 
        ========================================================================
        BANNER CENTRAL INSTITUCIONAL (PROTAGONISMO AMPLIO Y CENTRADO)
        ========================================================================
      */}
      <div className="w-full max-w-xl md:max-w-3xl lg:max-w-4xl flex justify-center mb-4">
        <div className="bg-white/95 backdrop-blur-sm p-2 sm:p-3 rounded-2xl shadow-lg border border-white/60 w-full flex justify-center transition-transform hover:scale-[1.01] duration-300">
          <img
            src={bannerSrc}
            alt={bannerAlt}
            className="w-full h-auto max-h-32 sm:max-h-40 md:max-h-48"
          />
        </div>
      </div>

      {/* 
        ========================================================================
        TÍTULO CENTRAL: BUSCAMINAS - PROBABILIDAD Y ESTADÍSTICA
        ========================================================================
      */}
      <div className="relative w-full max-w-5xl flex items-center justify-center my-1 sm:my-2">
        {/* Bomba clásica pixelada en la esquina izquierda cerca del título */}
        <div className="hidden md:flex absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 items-center justify-center filter drop-shadow-lg animate-bounce-short">
          <PixelBombIcon className="w-16 h-16 lg:w-20 lg:h-20" />
        </div>

        {/* Título Principal con Efecto 3D / Retro Arcade */}
        <div className="text-center px-4 z-10">
          {/* Pequeña insignia en móviles con mini íconos */}
          <div className="flex md:hidden items-center justify-center gap-2 mb-1">
            <PixelBombIcon className="w-7 h-7" />
            <span className="font-pixel text-[9px] text-yellow-300 tracking-wider">
              ARCADE • EDUCATIVO
            </span>
            <PixelFlagIcon className="w-7 h-7" />
          </div>

          <div className="inline-block relative">
            <h1
              className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-300 tracking-wider uppercase select-none transition-transform hover:scale-[1.01]"
              style={{
                textShadow:
                  '3px 3px 0 #b45309, 5px 5px 0 #78350f, 7px 7px 0 #0f172a, 9px 9px 14px rgba(0,0,0,0.6)',
                WebkitTextStroke: '2px #78350f',
              }}
            >
              BUSCAMINAS
            </h1>
          </div>

          {/* Subtítulo Académico Destacado */}
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="inline-block bg-blue-950 text-yellow-300 font-extrabold text-xs sm:text-base md:text-lg px-4 py-1 rounded-full border-2 border-yellow-400 shadow-[0_3px_0_0_#78350f] tracking-wide">
              PROBABILIDAD Y ESTADÍSTICA
            </span>
          </div>
        </div>

        {/* Bandera clásica sobre base gris en la esquina derecha cerca del título */}
        <div className="hidden md:flex absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 items-center justify-center filter drop-shadow-lg">
          <PixelFlagIcon className="w-16 h-16 lg:w-20 lg:h-20" />
        </div>
      </div>

      {/* Franja de autores e integrantes centrada */}
      <AuthorsBanner />
    </header>
  );
};
