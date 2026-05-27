import { PageHeader } from '../components/ui/PageHeader'
import { aboutContent } from '../data/about'

export function AboutPage() {
  return (
    <div>
      <PageHeader
        title="Acerca de"
        description="La plataforma educativa “Conoce México y su riqueza cultural” es un espacio interactivo diseñado para promover el aprendizaje sobre la diversidad cultural de México de manera dinámica, accesible y atractiva. A través de recursos audiovisuales, actividades interactivas y contenido educativo, busca fortalecer el reconocimiento y la valoración de las tradiciones, costumbres, lenguas y expresiones culturales de las distintas regiones del país."
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
      <section className="mt-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
        <h2 className="font-heading text-2xl text-primary">Autores</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-slate-700">
          {aboutContent.authors.map((author) => (
            <li key={author}>{author}</li>
          ))}
        </ul>
        <p className="mt-3 text-slate-600">
          Cedemos los derechos reservados para fines académicos a la docente responsable de la actividad.
        </p>
      </section>
    </div>
  )
}
