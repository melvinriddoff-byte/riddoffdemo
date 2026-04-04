import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, Divider } from '@/components'

export const metadata: Metadata = {
  title: 'About',
  description: 'Riddoff Technologies — building operational software and intelligent systems.',
}

export default function AboutPage() {
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
            About Riddoff
          </h1>
        </div>
      </Section>

      <Divider />

      {/* Story */}
      <Section>
        <div className="container-narrow">
          <div className="space-y-6 text-body text-secondary leading-relaxed">
            <p>
              Riddoff Technologies builds operational software for businesses that have outgrown simple tools but don&apos;t want the complexity of enterprise systems.
            </p>
            <p>
              We started because we saw too many companies struggling with software that looked good in demos but failed in production. Systems that required constant workarounds. Platforms that couldn&apos;t handle the edge cases that make up real business operations.
            </p>
            <p>
              Our approach is different. We focus on the operational layer — the systems that actually run your business. Inventory, fleet, scheduling, workflows, data. The parts that don&apos;t make good marketing screenshots but determine whether your business operates smoothly.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* What We Do */}
      <Section>
        <div className="container-content">
          <h2 className="text-title font-semibold text-primary mb-8">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-body font-semibold text-primary mb-3">
                Build Products
              </h3>
              <p className="text-body text-secondary">
                We develop and maintain our own operational platforms — ERP systems, fleet management, fitness technology — that serve specific industries and use cases.
              </p>
            </div>
            <div>
              <h3 className="text-body font-semibold text-primary mb-3">
                Design Platforms
              </h3>
              <p className="text-body text-secondary">
                We architect and build automation systems, AI integrations, analytics infrastructure, and custom platforms for organizations with complex requirements.
              </p>
            </div>
            <div>
              <h3 className="text-body font-semibold text-primary mb-3">
                Solve Hard Problems
              </h3>
              <p className="text-body text-secondary">
                When off-the-shelf solutions don&apos;t fit, we design custom systems. Multi-tenant architectures, complex integrations, high-scale infrastructure.
              </p>
            </div>
            <div>
              <h3 className="text-body font-semibold text-primary mb-3">
                Think Long-Term
              </h3>
              <p className="text-body text-secondary">
                We build for maintainability. Our systems are designed to evolve with your business, not become technical debt that holds you back.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Origin */}
      <Section>
        <div className="container-narrow">
          <h2 className="text-title font-semibold text-primary mb-6">
            Founded by Engineers
          </h2>
          <p className="text-body text-secondary leading-relaxed">
            Riddoff was founded by engineers who spent years building systems for other companies. We started Riddoff to build software the way we believe it should be built — focused on operations, designed for scale, and built to last.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container-narrow text-center">
          <Link
            href="/connect"
            className="inline-block text-body font-medium text-primary hover:text-accent transition-colors duration-150 link-hover"
          >
            Start a conversation →
          </Link>
        </div>
      </Section>
    </>
  )
}
