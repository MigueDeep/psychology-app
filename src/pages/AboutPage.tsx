import { PageHeader } from '../components/ui/PageHeader'
import { aboutContent } from '../data/about'

export function AboutPage() {
  return (
    <div>
      <PageHeader
        title="Acerca de"
        description="Contexto general del proyecto, orientado a una experiencia educativa clara y accesible."
      />
      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
          <h2 className="font-heading text-2xl text-primary">Mision</h2>
          <p className="mt-2 text-slate-700">{aboutContent.mission}</p>
        </article>
        <article className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
          <h2 className="font-heading text-2xl text-primary">Vision</h2>
          <p className="mt-2 text-slate-700">{aboutContent.vision}</p>
        </article>
      </section>
      <section className="mt-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
        <h2 className="font-heading text-2xl text-primary">Principios</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-slate-700">
          {aboutContent.principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
