import type { Activity } from '../types/content'

export const activities: Activity[] = [
  {
    id: 'observacion-contextual',
    title: 'Registro de observacion contextual',
    level: 'Basico',
    objective: 'Identificar conductas, antecedentes y consecuencias en entornos cotidianos.',
    duration: '40 minutos',
  },
  {
    id: 'entrevista-breve',
    title: 'Entrevista breve semiestructurada',
    level: 'Intermedio',
    objective: 'Practicar escucha activa, formulacion de preguntas y sintesis clinica inicial.',
    duration: '60 minutos',
  },
  {
    id: 'diseno-intervencion',
    title: 'Diseno de plan de intervencion',
    level: 'Avanzado',
    objective: 'Construir un plan con metas medibles, tecnicas y criterios de seguimiento.',
    duration: '90 minutos',
  },
]
