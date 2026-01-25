'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/products', label: 'Products' },
  { href: '/platforms', label: 'Platforms' },
  { href: '/industries', label: 'Industries' },
  { href: '/company', label: 'Company' },
  { href: '/connect', label: 'Connect' },
]

const logoLetters = ['R', 'I', 'D', 'D', 'O', 'F', 'F']

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="container-wide flex items-center justify-between h-16 md:h-18">
        {/* Logo with animation */}
        <Link href="/" className="logo group">
          <span key={pathname} className="logo-text">
            {logoLetters.map((char, i) => (
              <span
                key={i}
                className="logo-letter"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {char}
              </span>
            ))}
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-small font-medium transition-colors duration-150 link-hover ${
                    isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
