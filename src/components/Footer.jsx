const footerLinks = [
  { href: '#workflows', label: 'How It Works' },
  { href: '#impact', label: 'Impact' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-secondary text-white px-4">
      <div className="max-w-7xl mx-auto py-14 md:py-16">
        {/* Top section */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold tracking-tight">
              RecruiterAI
            </a>
            <p className="text-dark-muted mt-3 max-w-md mx-auto md:mx-0">
              Every hire, faster and better. AI-powered recruiting for modern teams.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center md:justify-end gap-8 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-dark-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom section */}
        <div className="mt-6 text-center md:text-left">
          <p className="text-dark-muted text-sm">
            © {new Date().getFullYear()} RecruiterAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
