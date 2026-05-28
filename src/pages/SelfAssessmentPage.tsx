import { PageHeader } from '../components/ui/PageHeader'

export function SelfAssessmentPage() {
  return (
    <div>
      <PageHeader
        title="Autoevaluación"
        description="Evalúa tu experiencia dentro de la plataforma respondiendo a este breve cuestionario."
      />
      <section className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm flex justify-center">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScDEgAaBc6EC20dgbrH6Q6Ug0g9hOVfy_CnC31_RFM1AJzizw/viewform?embedded=true" 
          width="100%" 
          height="1239" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          className="max-w-[790px] w-full border-0"
        >
          Cargando…
        </iframe>
      </section>
    </div>
  )
}

