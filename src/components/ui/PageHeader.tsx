type PageHeaderProps = {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
      <h1 className="font-heading text-3xl text-primary md:text-4xl">{title}</h1>
      <p className="mt-3 max-w-5xl text-base text-slate-700">{description}</p>
    </header>
  )
}
