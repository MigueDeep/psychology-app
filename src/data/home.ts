import type { FeatureCard, HeroContent } from '../types/content'

export const homeHero: HeroContent = {
  eyebrow: 'Plataforma educativa de México',
  title: 'CONOCE MEXICO Y SU RIQUEZA CULTURAL.',
  description:
    'Promover el reconocimiento, la valoración y el respeto hacia la diversidad cultural que existe en México, mediante una experiencia interactiva, dinámica y accesible que permita a los usuarios explorar las distintas regiones del país. A través de recursos audiovisuales, actividades lúdicas, lecturas breves e interacciones digitales, la plataforma busca acercar a las personas a las tradiciones, costumbres, lenguas, gastronomía, expresiones artísticas y formas de vida que caracterizan al norte, centro y sur de México, fomentando el aprendizaje significativo y el interés por la identidad cultural nacional. Asimismo, la plataforma pretende fortalecer la comprensión de México como un país multicultural y diverso, en el que las diferencias culturales representan una riqueza social e histórica que contribuye a la construcción de la identidad y el patrimonio del país',
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

export const RegionsCardsData = [
  {
    name: 'Norte',
    hoverColor: 'hover:bg-[#3d5169]',
    sound: '/sounds/norte.mp3',
    navigateTo: '/region/norte',
  },
  {
    name: 'Centro',
    hoverColor: 'hover:bg-[#5c718f]',
    sound: '/sounds/centro.mp3',
    navigateTo: '/region/centro',
  },
  {
    name: 'Sur',
    hoverColor: 'hover:bg-[#d5457a]',
    sound: '/sounds/sur.mp3',
    navigateTo: '/region/sur',
  },
]