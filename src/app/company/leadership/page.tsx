import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Divider } from '@/components'

export const metadata: Metadata = {
  title: 'Leadership | Riddoff Technologies',
  description: 'Riddoff is led by technologists focused on building long-term operational systems.',
}

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 md:pt-30">
        <div className="container-narrow">
          <Link 
            href="/company"
            className="text-small text-secondary hover:text-primary transition-colors duration-150 mb-8 inline-block"
          >
            ← Company
          </Link>
          <h1 className="text-headline font-semibold text-primary mb-4">
            Leadership
          </h1>
          <p className="text-body text-secondary max-w-xl">
            Riddoff is led by technologists focused on building long-term operational systems.
          </p>
        </div>
      </Section>

      <Divider />

      {/* Founder */}
      <Section>
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Photo */}
            <div className="relative h-40 w-40 rounded-full overflow-hidden bg-neutral-100 flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/team/razal.jpg"
                alt="Razal Rahman – Founder of Riddoff Technologies"
                fill
                className="object-cover"
                sizes="160px"
                priority
              />
            </div>
            
            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-title font-semibold text-primary mb-1">
                Razal Rahman
              </h2>
              <p className="text-body text-secondary mb-4">
                Director & CEO · Founder & Systems Architect
              </p>
              <p className="text-body text-secondary leading-relaxed mb-4">
                Razal Rahman is a technology entrepreneur and systems architect focused on building operational software, automation platforms, and intelligent business systems across logistics, fintech, fitness, and enterprise domains.
              </p>
              <a
                href="https://www.linkedin.com/in/razal-rahman-92456a162/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-small text-secondary hover:text-primary transition-colors duration-150"
                aria-label="Razal Rahman on LinkedIn"
              >
                <svg 
                  className="w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Leadership Philosophy */}
      <Section>
        <div className="container-content">
          <h2 className="text-title font-semibold text-primary mb-8">
            How We Lead
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-body font-semibold text-primary mb-3">
                Technical depth
              </h3>
              <p className="text-body text-secondary">
                Our leaders are practitioners. They understand the systems we build because they&apos;ve built systems like them before.
              </p>
            </div>
            <div>
              <h3 className="text-body font-semibold text-primary mb-3">
                Operational focus
              </h3>
              <p className="text-body text-secondary">
                We lead with an understanding that software exists to serve business operations, not the other way around.
              </p>
            </div>
            <div>
              <h3 className="text-body font-semibold text-primary mb-3">
                Long-term thinking
              </h3>
              <p className="text-body text-secondary">
                We make decisions for sustainability. Quick fixes that create technical debt are not solutions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Team Link */}
      <Section>
        <div className="container-narrow text-center">
          <p className="text-body text-secondary mb-6">
            Meet the engineers building our systems.
          </p>
          <Link
            href="/company/team"
            className="inline-block text-body font-medium text-primary hover:text-accent transition-colors duration-150 link-hover"
          >
            View Team →
          </Link>
        </div>
      </Section>
    </>
  )
}
