import { PageHeader } from '../components/ui/PageHeader'
import { evaluationTools } from '../data/evaluation'

export function EvaluationPage() {
  return (
    <div>
      <PageHeader
        title="Evaluacion"
        description="Instrumentos de evaluacion formativa para observar avances y tomar decisiones de acompanamiento."
      />
      <section className="grid gap-4 md:grid-cols-3">
        {evaluationTools.map((tool) => (
          <article key={tool.title} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-secondary">Dirigido a: {tool.audience}</p>
            <h2 className="mt-2 font-heading text-xl text-primary">{tool.title}</h2>
            <p className="mt-2 text-slate-700">{tool.description}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
