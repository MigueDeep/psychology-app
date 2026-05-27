import { PageHeader } from '../components/ui/PageHeader'
import { guidanceCards } from '../data/parentsTeachers'

export function ParentsTeachersPage() {
  return (
    <div>
      <PageHeader
        title="Recursos para el aprendizaje"
        description="Actividades y materiales para apoyar el aprendizaje."
      />
      <section className="grid gap-4 md:grid-cols-2">
        {guidanceCards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <h2 className="font-heading text-2xl text-primary">{card.title}</h2>
            <ul className="mt-3 list-inside list-disc space-y-2 text-slate-700">
              {card.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}
