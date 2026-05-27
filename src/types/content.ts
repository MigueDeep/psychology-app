export type NavItem = {
  label: string
  path: string
}

export type HeroContent = {
  eyebrow: string
  title: string
  description: string
}

export type FeatureCard = {
  title: string
  description: string
}

export type Activity = {
  id: string
  title: string
  level: 'Basico' | 'Intermedio' | 'Avanzado'
  objective: string
  duration: string
}

export type EvaluationTool = {
  title: string
  audience: string
  description: string
}

export type GuidanceCard = {
  title: string
  bullets: string[]
}

export type ReflectionQuestion = {
  id: string
  prompt: string
  scaleHint: string
}

export type AboutContent = {
  mission: string
  vision: string
  principles: string[]
  authors: string[]
}
