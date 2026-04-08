import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  const links = [
    { path: '/', name: '[HOME]' },
    { path: '/about', name: '[ABOUT]' },
    { path: '/projects', name: '[PROJECTS]' },
    { path: '/resume', name: '[RESUME]' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-glow/35 bg-[#071a44]/82 backdrop-blur-md shadow-[0_0_24px_rgba(0,212,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="scenario-text text-sky-100 text-2xl hover:text-cyan-glow transition">
          KRISHNA MISHRA
        </Link>

        <div className="flex gap-4 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? 'text-sky-100 border border-cyan-glow/55 px-3 py-1 bg-cyan-glow/12 shadow-[0_0_16px_rgba(0,212,255,0.16)]'
                  : 'text-cyan-glow hover:text-sky-100'
              } scenario-text text-base transition-all duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
