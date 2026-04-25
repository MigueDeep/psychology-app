import { homeFeatures } from '../../data/home'

export function FeatureGrid() {
  return (
    <section className="mt-8 grid gap-4 md:grid-cols-3">
      {homeFeatures.map((feature) => (
        <article key={feature.title} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
          <h2 className="font-heading text-2xl text-primary">{feature.title}</h2>
          <p className="mt-2 text-slate-700">{feature.description}</p>
        </article>
      ))}
    </section>
  )
}
