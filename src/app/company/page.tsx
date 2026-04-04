import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, Divider } from '@/components'

export const metadata: Metadata = {
  title: 'Company',
  description: 'Why Riddoff exists and how we think about building technology.',
}

const companyLinks = [
  {
    href: '/company/about',
    title: 'About Riddoff',
    description: 'Who we are and what we do.',
  },
  {
    href: '/company/philosophy',
    title: 'Philosophy',
    description: 'How we think about building software.',
  },
  {
    href: '/company/leadership',
    title: 'Leadership',
    description: 'The team behind Riddoff.',
  },
]

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 md:pt-30">
        <div className="container-narrow">
          <h1 className="text-headline font-semibold text-primary mb-4">
            Company
          </h1>
          <p className="text-title text-secondary font-normal">
            Why Riddoff exists and how we think about building technology.
          </p>
        </div>
      </Section>

      <Divider />

      {/* Company Links */}
      <Section>
        <div className="container-content">
          <div className="space-y-12">
            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block"
              >
                <h2 className="text-title font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-150">
                  {link.title}
                  <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-150">
                    →
                  </span>
                </h2>
                <p className="text-body text-secondary">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Divider />

      {/* Mission Statement */}
      <Section>
        <div className="container-narrow">
          <blockquote className="text-title text-primary font-semibold mb-6">
            &ldquo;We build systems that run businesses.&rdquo;
          </blockquote>
          <p className="text-body text-secondary">
            Not interfaces for presentations. Not demos for pitches. Real software that teams rely on every day to operate, make decisions, and grow.
          </p>
        </div>
      </Section>
    </>
  )
}
