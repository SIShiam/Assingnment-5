import { useState } from 'react'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b12]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Mobile: hamburger left */}
        <button
          className="rounded-md p-2 text-gray-200 hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 md:mr-auto">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient font-bold text-white">
            {'</>'}
          </span>
          <span className="text-lg font-bold text-brand-gradient">Dev Stack</span>
        </a>

        {/* Desktop center links */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:mr-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="transition hover:text-white">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-gray-200 hover:text-white sm:block">
            Sign In
          </button>
          <button className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:opacity-90">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-[#0b0b12] px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block rounded-md px-2 py-2 text-gray-300 hover:bg-white/10 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
