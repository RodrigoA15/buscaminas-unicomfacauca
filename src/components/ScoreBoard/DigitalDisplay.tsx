import React from 'react';

interface DigitalDisplayProps {
  value: number;
  ariaLabel: string;
}

/**
 * Visualizador digital LED retro estilo 7 segmentos de 3 dígitos.
 * Utiliza números de ancho fijo y fondo atenuado de segmentos '888' para autenticidad.
 */
export const DigitalDisplay: React.FC<DigitalDisplayProps> = ({ value, ariaLabel }) => {
  // Formateo clásico: 3 dígitos con signo o ceros a la izquierda (-99 a 999)
  const formatValue = (num: number): string => {
    if (num < 0) {
      const absVal = Math.min(Math.abs(num), 99);
      return `-${absVal.toString().padStart(2, '0')}`;
    }
    const clamped = Math.min(num, 999);
    return clamped.toString().padStart(3, '0');
  };

  const formatted = formatValue(value);

  return (
    <div
      className="relative bg-black px-2 py-1 rounded border-2 border-neutral-700 shadow-inner flex items-center justify-center select-none overflow-hidden"
      aria-label={`${ariaLabel}: ${value}`}
      style={{ minWidth: '72px', height: '42px' }}
    >
      {/* Segmentos atenuados en el fondo (efecto 888) */}
      <span
        aria-hidden="true"
        className="font-digital text-3xl tracking-widest text-red-950/40 absolute select-none pointer-events-none"
      >
        888
      </span>
      {/* Dígitos LED activos en rojo brillante */}
      <span
        className="font-digital text-3xl tracking-widest text-red-500 relative z-10 font-bold drop-shadow-[0_0_4px_rgba(239,68,68,0.8)]"
      >
        {formatted}
      </span>
    </div>
  );
};
