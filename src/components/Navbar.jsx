import { useState, useEffect } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#workflows', label: 'How It Works' },
    { href: '#impact', label: 'Impact' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Glassmorphism Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-white/10 backdrop-blur-2xl shadow-glass border-b border-white/20'
            : 'bg-white/5 backdrop-blur-xl'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <div className="px-4 py-2 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all shadow-glass">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  RecruiterAI
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 transition-colors font-medium group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/15 group-hover:to-indigo-500/10 transition-all duration-300" />
                </a>
              ))}
              <a
                href="#cta"
                onClick={(e) => handleLinkClick(e, '#cta')}
                className="ml-4 px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-glass hover:shadow-glass-lg"
              >
                Start Free Trial
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2.5 rounded-xl text-gray-700 hover:text-gray-900 backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all shadow-glass"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20 backdrop-blur-2xl bg-white/10">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="px-4 py-3 rounded-xl text-gray-700 hover:text-gray-900 transition-all font-medium backdrop-blur-lg bg-white/5 hover:bg-white/10 border border-white/10"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={(e) => handleLinkClick(e, '#cta')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-white text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 mt-2 shadow-glass"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  )
}