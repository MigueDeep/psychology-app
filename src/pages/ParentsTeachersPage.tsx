import { PageHeader } from '../components/ui/PageHeader'
import { MemoPlay } from '../components/MemoPlay'
import { JoinWord } from '../components/JoinWord'

export function ParentsTeachersPage() {
  return (
    <div>
      <PageHeader
        title="Memorama"
        description="Encuentra los pares de imágenes para ejercitar tu memoria."
      />
      <MemoPlay />
      <hr className="my-12 border-blue-200" />
      <PageHeader
        title="Une los paisajes"
        description="Relaciona cada paisaje con su zona (Norte, Sur, Centro) haciendo clic en ellos."
      />
      <JoinWord />
    </div>
  )
}
