import { homeHero } from '../../data/home'

export function HeroSection() {
  return (
    <section className="rounded-2xl bg-primary px-6 py-10 text-white shadow-lg md:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">{homeHero.eyebrow}</p>
      <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-tight md:text-5xl">{homeHero.title}</h1>
      <p className="mt-4 max-w-5xl text-base text-blue-100 md:text-lg text-justify">{homeHero.description}</p>
    </section>
  )
}
