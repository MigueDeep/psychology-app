import type { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import logo from '../../assets/logo.png'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mist to-white text-slate-800">
      <header className="border-b border-blue-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6">
          
          <div className="flex w-full flex-col gap-4">
            <div>
              <p className="font-heading text-2xl text-primary">PSYC App</p>
              <p className="text-sm text-slate-600">Recursos educativos para psicologia aplicada</p>
            </div>
            <nav aria-label="Navegacion principal">
              <ul className="flex flex-wrap gap-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        [
                          'inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition',
                          isActive
                            ? 'border-secondary bg-secondary text-white'
                            : 'border-blue-200 bg-white text-primary hover:border-secondary hover:text-secondary',
                        ].join(' ')
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <img src={logo} alt="Logo Derecho" className="h-12 md:h-16 w-auto flex-shrink-0 ml-4" />
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">{children}</main>
    </div>
  )
}
