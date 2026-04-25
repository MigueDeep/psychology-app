import { activities } from '../data/activities'
import { PageHeader } from '../components/ui/PageHeader'

export function ActivitiesPage() {
  return (
    <div>
      <PageHeader
        title="Actividades"
        description="Banco inicial de actividades con objetivos de aprendizaje y tiempos estimados."
      />
      <section className="grid gap-4 md:grid-cols-2">
        {activities.map((activity) => (
          <article key={activity.id} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-secondary">Nivel: {activity.level}</p>
            <h2 className="mt-2 font-heading text-2xl text-primary">{activity.title}</h2>
            <p className="mt-2 text-slate-700">{activity.objective}</p>
            <p className="mt-3 text-sm text-slate-600">Duracion estimada: {activity.duration}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
