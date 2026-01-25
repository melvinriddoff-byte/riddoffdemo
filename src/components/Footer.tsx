import Link from 'next/link'

const footerLinks = {
  products: [
    { href: '/products/riddoff-erp', label: 'Riddoff ERP' },
    { href: '/products/fleetx', label: 'FleetX' },
    { href: '/products/gryndup', label: 'GRYNDUP' },
    { href: '/products/enterprise-systems', label: 'Enterprise Systems' },
  ],
  platforms: [
    { href: '/platforms/automation', label: 'Automation' },
    { href: '/platforms/ai-systems', label: 'AI Systems' },
    { href: '/platforms/analytics', label: 'Analytics' },
    { href: '/platforms/infrastructure', label: 'Infrastructure' },
  ],
  company: [
    { href: '/company/about', label: 'About' },
    { href: '/company/philosophy', label: 'Philosophy' },
    { href: '/company/leadership', label: 'Leadership' },
    { href: '/company/team', label: 'Team' },
    { href: '/company/rabos', label: 'RABOS' },
    { href: '/connect', label: 'Connect' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-wide py-16 md:py-20">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Products */}
          <div>
            <h4 className="text-small font-medium text-primary mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-small text-secondary hover:text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-small font-medium text-primary mb-4">Platforms</h4>
            <ul className="space-y-3">
              {footerLinks.platforms.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-small text-secondary hover:text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-small font-medium text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-small text-secondary hover:text-primary transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-small font-medium text-primary mb-4">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/industries/logistics" className="text-small text-secondary hover:text-primary transition-colors duration-150">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/industries/fintech" className="text-small text-secondary hover:text-primary transition-colors duration-150">
                  Fintech
                </Link>
              </li>
              <li>
                <Link href="/industries/fitness" className="text-small text-secondary hover:text-primary transition-colors duration-150">
                  Fitness
                </Link>
              </li>
              <li>
                <Link href="/industries/hospitality" className="text-small text-secondary hover:text-primary transition-colors duration-150">
                  Hospitality
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-small text-secondary">
            © 2025 Riddoff Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
