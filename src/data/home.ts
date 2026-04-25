import type { FeatureCard, HeroContent } from '../types/content'

export const homeHero: HeroContent = {
  eyebrow: 'Plataforma educativa de psicologia',
  title: 'Aprendizaje aplicado para estudiantes de psicologia',
  description:
    'Explora actividades guiadas, recursos de evaluacion y materiales de acompanamiento para fortalecer competencias academicas y practicas.',
}

export const homeFeatures: FeatureCard[] = [
  {
    title: 'Actividades estructuradas',
    description:
      'Secuencias didacticas con objetivos claros para intervencion, observacion y analisis de casos.',
  },
  {
    title: 'Evaluacion formativa',
    description:
      'Instrumentos iniciales para valorar avances, ajustar metas y documentar progresos en cada etapa.',
  },
  {
    title: 'Guia para familias y docentes',
    description:
      'Recomendaciones sencillas para coordinar acompanamiento en casa y en el entorno escolar.',
  },
]
