import React from 'react';
import { AuthorsBanner } from './AuthorsBanner';
import { PixelBombIcon, PixelFlagIcon } from './PixelDecorations';

interface HeaderProps {
  /**
   * Ruta opcional a la imagen del logo institucional/personalizado.
   * Si no se proporciona, se muestra un placeholder sutil preparado para insertar una etiqueta <img>.
   */
  logoSrc?: string;
  logoAlt?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logoSrc,
  logoAlt = 'Logo Institucional',
}) => {
  return (
    <header className="w-full relative z-10 flex flex-col items-center pt-3 pb-2 px-3 sm:px-6">
      {/* 
        ========================================================================
        ZONA SUPERIOR DERECHA: ESPACIO EXCLUSIVO PARA LOGO PERSONALIZADO
        ========================================================================
      */}
      <div className="w-full max-w-7xl flex items-center justify-end mb-1 sm:mb-2 min-h-[48px] sm:min-h-[64px]">
        {/* Contenedor reservado para logo personalizado */}
        <div
          id="custom-logo-container"
          className="flex items-center justify-end z-20 transition-transform hover:scale-105 duration-200"
          title="Espacio reservado para logotipo"
        >
          {logoSrc ? (
            /* Si se pasa la prop logoSrc se renderiza directamente la imagen */
            <img
              src={logoSrc}
              alt={logoAlt}
              className="max-h-14 sm:max-h-16 w-auto object-contain drop-shadow-md"
            />
          ) : (
            /* 
              ------------------------------------------------------------------
              <!-- INSERTA AQUÍ TU IMAGEN DE LOGO -->
              Para usar tu propia imagen directamente en el código, puedes reemplazar
              este bloque o descomentar la etiqueta <img>:
              ------------------------------------------------------------------
            */
            <div className="flex items-center gap-2 bg-white/95 hover:bg-white border-2 border-sky-400 hover:border-yellow-400 rounded-xl px-3 py-1.5 shadow-md shadow-blue-950/20 backdrop-blur-sm cursor-pointer group">

              <img
                src="/src/assets/logo-unicomfa.png"
                alt="Logo Institucional"
                className="max-h-16 w-auto object-contain"
              />

            </div>
          )}
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
