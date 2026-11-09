import React from 'react';

/**
 * Textura base y gradiente de fondo:
 * Gradiente vertical de azul cielo vibrante en la parte superior a azul rey profundo en la base,
 * con sutil viñeta radial y patrón de píxeles/cuadrícula para dar profundidad sin restar legibilidad.
 */
export const PixelBackgroundTexture: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Gradiente vertical principal: Azul cielo vibrante -> Azul rey profundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-blue-600 to-blue-900" />

      {/* Viñeta radial suave para profundidad */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 25%, rgba(255, 255, 255, 0.18) 0%, transparent 60%, rgba(10, 25, 55, 0.55) 100%)',
        }}
      />

      {/* Sutil cuadrícula pixelada / dot-grid estilo arcade */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};

/**
 * Nubes decorativas semi-pixeladas a los lados del encabezado
 */
export const PixelHeaderClouds: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Nube izquierda (cerca del título) */}
      <div className="absolute top-16 left-4 sm:left-12 lg:left-20 opacity-60 transition-transform duration-1000">
        <div className="relative">
          {/* Bloques de nube estilo pixel/semi-redondeados */}
          <div className="flex items-end">
            <div className="w-10 h-7 bg-white/90 rounded-t-lg" />
            <div className="w-16 h-11 bg-white rounded-t-xl -ml-3 shadow-sm" />
            <div className="w-12 h-8 bg-white/90 rounded-t-lg -ml-2" />
          </div>
          <div className="w-32 h-5 bg-white rounded-b-xl -mt-1 shadow-md shadow-blue-950/20" />
          {/* Sombra de la nube */}
          <div className="w-28 h-1.5 bg-blue-200/50 rounded-full mx-auto mt-0.5" />
        </div>
      </div>

      {/* Nube derecha (cerca del título) */}
      <div className="absolute top-20 right-4 sm:right-12 lg:right-20 opacity-60 transition-transform duration-1000">
        <div className="relative">
          <div className="flex items-end justify-end">
            <div className="w-12 h-8 bg-white/90 rounded-t-lg" />
            <div className="w-20 h-12 bg-white rounded-t-2xl -ml-3 shadow-sm" />
            <div className="w-10 h-7 bg-white/90 rounded-t-lg -ml-2" />
          </div>
          <div className="w-36 h-5 bg-white rounded-b-xl -mt-1 shadow-md shadow-blue-950/20" />
          <div className="w-30 h-1.5 bg-blue-200/50 rounded-full mx-auto mt-0.5" />
        </div>
      </div>

      {/* Nube flotante más pequeña en media altura */}
      <div className="absolute top-80 -left-6 hidden xl:block opacity-40">
        <div className="w-24 h-6 bg-white rounded-full shadow-inner" />
      </div>
      <div className="absolute top-96 -right-6 hidden xl:block opacity-40">
        <div className="w-28 h-7 bg-white rounded-full shadow-inner" />
      </div>
    </div>
  );
};

/**
 * Ícono de Bomba clásica pixelada con mecha encendida y chispas
 * Diseñado en vector SVG puro de 64x64 con acabado arcade
 */
export const PixelBombIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative inline-block select-none pointer-events-none ${className}`}>
      {/* Chispas y resplandor animado */}
      <div className="absolute -top-3 -right-2 w-6 h-6 animate-pulse">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-[0_0_8px_#facc15]">
          {/* Destello de chispas pixel */}
          <rect x="11" y="0" width="2" height="4" fill="#FACC15" />
          <rect x="11" y="8" width="2" height="4" fill="#FACC15" />
          <rect x="7" y="4" width="4" height="2" fill="#F97316" />
          <rect x="13" y="4" width="4" height="2" fill="#F97316" />
          <rect x="9" y="2" width="2" height="2" fill="#EF4444" />
          <rect x="13" y="2" width="2" height="2" fill="#EF4444" />
          <rect x="9" y="6" width="2" height="2" fill="#FFFFFF" />
          <circle cx="12" cy="5" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Cuerpo de la bomba pixelada */}
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full filter drop-shadow-[3px_4px_0_rgba(15,23,42,0.8)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mecha curva */}
        <path
          d="M36 18C36 12 42 10 46 8"
          stroke="#D97706"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 1"
        />

        {/* Cuello metálico superior */}
        <rect x="30" y="16" width="10" height="5" rx="1" fill="#71717A" stroke="#27272A" strokeWidth="1.5" />
        <rect x="32" y="15" width="6" height="2" fill="#D4D4D8" />

        {/* Esfera de la bomba negra */}
        <circle cx="35" cy="38" r="21" fill="#18181B" stroke="#09090B" strokeWidth="2" />

        {/* Gradiente de volumen / sombra inferior */}
        <path
          d="M17 45C20 54 29 59 39 58C49 57 55 49 56 42C52 52 42 57 33 56C24 55 18 49 17 45Z"
          fill="#09090B"
        />

        {/* Brillo 3D blanco pixelado en la parte superior izquierda */}
        <rect x="23" y="26" width="4" height="4" fill="#FFFFFF" />
        <rect x="27" y="24" width="6" height="3" fill="#FFFFFF" />
        <rect x="22" y="30" width="3" height="6" fill="#FFFFFF" />
        <rect x="25" y="30" width="2" height="2" fill="#E4E4E7" />
        <rect x="29" y="27" width="3" height="3" fill="#E4E4E7" />
      </svg>
    </div>
  );
};

/**
 * Ícono de Bandera Roja clásica con asta de madera sobre base gris
 * Diseñado en vector SVG puro de 64x64 estilo arcade
 */
export const PixelFlagIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <div className={`relative inline-block select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full filter drop-shadow-[3px_4px_0_rgba(15,23,42,0.8)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base de piedra gris biselada Windows 95 / arcade */}
        {/* Sombra de la base */}
        <rect x="14" y="55" width="36" height="5" fill="#1E293B" />
        {/* Escalón inferior */}
        <rect x="16" y="53" width="32" height="4" fill="#475569" stroke="#0F172A" strokeWidth="1.5" />
        <rect x="16" y="53" width="32" height="1" fill="#94A3B8" />
        {/* Escalón superior */}
        <rect x="22" y="49" width="20" height="4" fill="#64748B" stroke="#0F172A" strokeWidth="1.5" />
        <rect x="22" y="49" width="20" height="1" fill="#CBD5E1" />

        {/* Asta de madera */}
        <rect x="30" y="10" width="4" height="40" fill="#78350F" stroke="#451A03" strokeWidth="1" />
        <rect x="31" y="10" width="1.5" height="40" fill="#B45309" />

        {/* Pomo dorado superior del asta */}
        <circle cx="32" cy="9" r="3" fill="#FACC15" stroke="#78350F" strokeWidth="1" />
        <circle cx="31" cy="8" r="1" fill="#FEF08A" />

        {/* Bandera roja triangular con ondas y sombra */}
        <path
          d="M34 12L58 22L34 32V12Z"
          fill="#DC2626"
          stroke="#7F1D1D"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Brillo superior en la tela de la bandera */}
        <path d="M34 13L54 21.5L34 23V13Z" fill="#EF4444" />
        {/* Pliegue oscuro inferior */}
        <path d="M34 27L50 22L34 31V27Z" fill="#991B1B" />
      </svg>
    </div>
  );
};

/**
 * Zócalo inferior de bloques pixelados en tonos de piedra y tierra azulada oscura/grisácea
 * (Estilo bloques de terreno de videojuego/Minecraft / adoquín)
 */
export const PixelStoneGroundBorder: React.FC = () => {
  return (
    <div className="w-full relative z-10 select-none">
      {/* Borde superior de roca clara / bisel */}
      <div className="h-2 w-full bg-slate-400 border-t-2 border-slate-200" />

      {/* Capa de bloques de piedra y adoquín azulado oscuro */}
      <div className="h-14 w-full bg-slate-800 border-t-2 border-slate-900 relative overflow-hidden">
        {/* Patrón de ladrillos / bloques pixelados de piedra */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0f172a 2px, transparent 2px),
              linear-gradient(to bottom, #0f172a 2px, transparent 2px)
            `,
            backgroundSize: '24px 14px',
          }}
        />

        {/* Textura de motas de piedra y relieve en tonos azulados y pizarra */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(#334155 20%, transparent 20%),
              radial-gradient(#475569 20%, transparent 20%)
            `,
            backgroundSize: '12px 12px',
            backgroundPosition: '0 0, 6px 6px',
          }}
        />

        {/* Fila superior con reflejo en bisel para simular cubos de roca 3D */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 opacity-50"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #64748b 0, #64748b 22px, #0f172a 22px, #0f172a 24px)',
          }}
        />
      </div>

      {/* Capa de tierra profunda azulada oscura */}
      <div className="h-6 w-full bg-slate-950 border-t-2 border-slate-900" />
    </div>
  );
};
