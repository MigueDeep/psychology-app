import { PageHeader } from '../components/ui/PageHeader'
import { reflectionQuestions } from '../data/selfAssessment'

export function SelfAssessmentPage() {
  return (
    <div>
      <PageHeader
        title="Autoevaluacion"
        description="Preguntas de reflexion para identificar fortalezas y oportunidades de mejora en la practica academica."
      />
      <section className="space-y-4">
        {reflectionQuestions.map((question) => (
          <article key={question.id} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
            <h2 className="font-heading text-2xl text-primary">Pregunta {question.id.toUpperCase()}</h2>
            <p className="mt-2 text-slate-700">{question.prompt}</p>
            <p className="mt-3 text-sm font-semibold text-secondary">Escala sugerida: {question.scaleHint}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
