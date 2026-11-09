/**
 * Contenido pedagógico y textos académicos del proyecto Buscaminas.
 * Basado en el póster académico de Probabilidad y Estadística de Unicomfacauca.
 */

import type { AcademicAuthor, KeyConcept } from '../types/statistics';

export const AUTHORS: AcademicAuthor[] = [
  { name: 'Valentina Anacona' },
  { name: 'Rodrigo Papamija' },
  { name: 'Alex Tenorio' },
  { name: 'Carlos Ojeda' },
];

export const INSTITUTION = {
  name: 'Unicomfacauca',
  fullName: 'Corporación Universitaria Comfacauca',
  faculty: 'Facultad de Ingeniería',
  accreditation: 'Acreditación Institucional',
  anniversary: '25 Años',
  event: 'EXPLO-RA',
  subject: 'Probabilidad y Estadística',
  title: 'BUSCAMINAS',
  subtitle: 'Probabilidad y Estadística',
};

export const ACADEMIC_SECTIONS = {
  introduction: {
    title: 'Introducción y Justificación',
    body: 'Buscaminas es un juego interactivo que nos permite entender la probabilidad de forma práctica y divertida. Porque convierte las matemáticas en un reto real.',
  },
  learningOutcome: {
    title: 'Resultado de Aprendizaje',
    body: 'Aplicar conceptos de probabilidad y estadística mediante el juego.',
  },
  keyConcepts: {
    title: 'Conceptos Clave',
    items: [
      {
        id: 'initial_prob',
        title: 'Probabilidad Inicial',
        formula: 'P(mina) = 6 / 36 = 16.67%',
        description: 'Al iniciar la partida, 6 de las 36 casillas contienen minas.',
        highlight: '16.67%',
      },
      {
        id: 'sample_space',
        title: 'Espacio Muestral (S)',
        formula: 'n(S) = 36 casillas',
        description: 'El conjunto total de todos los resultados posibles en el tablero.',
        highlight: '36 casillas',
      },
      {
        id: 'conditional_prob',
        title: 'Probabilidad Condicional',
        formula: 'P(Mina | Casillas Reveladas)',
        description: 'La probabilidad cambia dinámicamente con cada jugada al reducir el espacio de casillas ocultas.',
        highlight: 'Dinámica',
      },
    ] as KeyConcept[],
  },
  results: {
    title: 'Resultados y Análisis',
    summary: 'La probabilidad de encontrar una mina aumenta al descubrir más casillas.',
    explanation: 'A medida que el jugador despeja casillas seguras, el denominador (casillas ocultas) disminuye, concentrando las 6 minas en un espacio muestral cada vez más pequeño.',
  },
  formula: {
    title: 'Fórmula de Probabilidad',
    latex: 'P(mina) = \\frac{\\text{Minas restantes}}{\\text{Casillas ocultas}}',
    numeratorLabel: 'Minas restantes',
    denominatorLabel: 'Casillas ocultas',
    note: 'Cada casilla descubierta sin mina incrementa el riesgo de detonación para el siguiente clic.',
  },
  conclusion: {
    title: 'Conclusión',
    body: 'Buscaminas nos muestra cómo la probabilidad nos ayuda a tomar mejores decisiones.',
    footerTag: 'Facultad de Ingeniería • Unicomfacauca',
  },
};
