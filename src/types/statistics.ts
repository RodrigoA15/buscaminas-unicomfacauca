/**
 * Tipos e interfaces para el contenido pedagógico y estadísticas académicas.
 */

export interface AcademicAuthor {
  name: string;
  role?: string;
}

export interface KeyConcept {
  id: string;
  title: string;
  formula?: string;
  description: string;
  highlight?: string;
}

export interface AcademicSection {
  title: string;
  subtitle?: string;
  content: string;
  badge?: string;
}
