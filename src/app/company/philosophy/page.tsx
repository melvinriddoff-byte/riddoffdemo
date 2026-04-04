import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, Divider } from '@/components'

export const metadata: Metadata = {
  title: 'Philosophy',
  description: 'How we think about building software at Riddoff Technologies.',
}

export default function PhilosophyPage() {
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
            How We Build
          </h1>
        </div>
      </Section>

      <Divider />

      {/* Core Philosophy */}
      <Section>
        <div className="container-narrow">
          <div className="space-y-8">
            <div>
              <p className="text-title text-primary font-semibold mb-4">
                Riddoff exists to solve operational problems with software that lasts.
              </p>
            </div>
            <div className="space-y-6 text-body text-secondary leading-relaxed">
              <p>
                We focus on systems — not features — because businesses don&apos;t fail from lack of interfaces, they fail from broken workflows, poor decisions, and fragile infrastructure.
              </p>
              <p>
                Our work prioritizes clarity, scalability, and long-term maintainability. We design software that teams rely on daily, not software that needs explanation.
              </p>
              <p>
                Across all products and platforms, our systems are governed by an internal reasoning and automation backbone (<Link href="/company/rabos" className="text-primary hover:text-accent transition-colors duration-150">RABOS</Link>).
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Principles */}
      <Section>
        <div className="container-content">
          <h2 className="text-title font-semibold text-primary mb-12">
            Principles
          </h2>
          <div className="space-y-12">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-1">
                <span className="text-small text-secondary font-medium">01</span>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-body font-semibold text-primary mb-3">
                  Operations over aesthetics
                </h3>
                <p className="text-body text-secondary">
                  We optimize for how software works, not how it screenshots. Beautiful interfaces matter, but operational reliability matters more.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-1">
                <span className="text-small text-secondary font-medium">02</span>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-body font-semibold text-primary mb-3">
                  Systems thinking
                </h3>
                <p className="text-body text-secondary">
                  Every feature exists within a larger system. We consider how components interact, how data flows, and how changes propagate before we write code.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-1">
                <span className="text-small text-secondary font-medium">03</span>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-body font-semibold text-primary mb-3">
                  Simplicity at scale
                </h3>
                <p className="text-body text-secondary">
                  Complex problems don&apos;t require complex solutions. We look for the simplest architecture that solves the problem and scales with growth.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-1">
                <span className="text-small text-secondary font-medium">04</span>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-body font-semibold text-primary mb-3">
                  Maintainability is a feature
                </h3>
                <p className="text-body text-secondary">
                  We write code that future developers will understand. Clear patterns, documented decisions, and sustainable architecture.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-1">
                <span className="text-small text-secondary font-medium">05</span>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-body font-semibold text-primary mb-3">
                  Measure what matters
                </h3>
                <p className="text-body text-secondary">
                  We instrument systems to understand their behavior. Not vanity metrics, but operational data that informs decisions and reveals problems early.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-1">
                <span className="text-small text-secondary font-medium">06</span>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-body font-semibold text-primary mb-3">
                  Long-term partnerships
                </h3>
                <p className="text-body text-secondary">
                  We build for the long term. Our clients are partners, and our software is designed to grow with their businesses for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Final thought */}
      <Section>
        <div className="container-narrow">
          <blockquote className="text-title text-primary font-semibold">
            &ldquo;We don&apos;t ship features. We ship systems that make businesses work better.&rdquo;
          </blockquote>
        </div>
      </Section>
    </>
  )
}
