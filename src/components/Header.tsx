'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/products', label: 'Products' },
  { href: '/platforms', label: 'Platforms' },
  { href: '/industries', label: 'Industries' },
  { 
    href: '/company', 
    label: 'Company',
    children: [
      { href: '/company/about', label: 'About' },
      { href: '/company/philosophy', label: 'Philosophy' },
      { href: '/company/leadership', label: 'Leadership' },
      { href: '/company/team', label: 'Team' },
    ],
  },
  { href: '/connect', label: 'Connect' },
]

const logoLetters = ['R', 'I', 'D', 'D', 'O', 'F', 'F']

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
    setExpandedItem(null)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
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

          {/* Desktop Navigation */}
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background transition-opacity duration-200 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        <nav className="h-full overflow-y-auto px-6 py-8">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href)
              const hasChildren = item.children && item.children.length > 0
              const isExpanded = expandedItem === item.href

              return (
                <li key={item.href}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => setExpandedItem(isExpanded ? null : item.href)}
                        className={`w-full flex items-center justify-between py-4 text-xl font-medium transition-colors ${
                          isActive ? 'text-primary' : 'text-secondary'
                        }`}
                      >
                        {item.label}
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="1.5"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                      <ul 
                        className={`overflow-hidden transition-all duration-200 ${
                          isExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <li>
                          <Link
                            href={item.href}
                            className="block py-3 pl-4 text-lg text-secondary hover:text-primary transition-colors"
                          >
                            Overview
                          </Link>
                        </li>
                        {item.children?.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block py-3 pl-4 text-lg transition-colors ${
                                pathname === child.href ? 'text-primary' : 'text-secondary hover:text-primary'
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-4 text-xl font-medium transition-colors ${
                        isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}
