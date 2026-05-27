import { PageHeader } from '../components/ui/PageHeader'
import { MemoPlay } from '../components/MemoPlay'

export function ParentsTeachersPage() {
  return (
    <div>
      <PageHeader
        title="Memorama"
        description="Encuentra los pares de imágenes para ejercitar tu memoria."
      />
      <MemoPlay />
      <PageHeader
        title="Une los paisajes"
        description="Relaciona cada paisaje con su nombre para mejorar tu memoria visual."
      />
      <MemoPlay />
    </div>
  )
}
