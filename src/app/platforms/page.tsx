import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components'

export const metadata: Metadata = {
  title: 'Platforms',
  description: 'The systems that power automation, intelligence, and scale.',
}

const platforms = [
  {
    slug: 'automation',
    name: 'Automation',
    tagline: 'Workflow orchestration and process automation.',
    description: 'From simple task automation to complex multi-system orchestration. We build automation that replaces manual processes and reduces operational friction.',
  },
  {
    slug: 'ai-systems',
    name: 'AI Systems',
    tagline: 'Intelligent decision engines and AI integration.',
    description: 'Practical AI that solves real business problems — from document processing to predictive analytics. No hype, just systems that work.',
  },
  {
    slug: 'analytics',
    name: 'Analytics',
    tagline: 'Data infrastructure and business intelligence.',
    description: 'Unified data platforms, real-time dashboards, and analytics that inform decisions. Built for organizations that take data seriously.',
  },
  {
    slug: 'infrastructure',
    name: 'Infrastructure',
    tagline: 'Scalable cloud and application infrastructure.',
    description: 'Multi-tenant SaaS platforms, microservices architecture, and cloud infrastructure designed for reliability and scale.',
  },
]

export default function PlatformsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 md:pt-30">
        <div className="container-narrow">
          <h1 className="text-headline font-semibold text-primary mb-4">
            Platforms
          </h1>
          <p className="text-title text-secondary font-normal">
            The systems that power automation, intelligence, and scale.
          </p>
        </div>
      </Section>

      {/* Platforms List */}
      <Section>
        <div className="container-content">
          <div className="space-y-16 md:space-y-20">
            {platforms.map((platform, index) => (
              <Link
                key={platform.slug}
                href={`/platforms/${platform.slug}`}
                className="group block"
              >
                <article className="grid md:grid-cols-12 gap-6 md:gap-12">
                  <div className="md:col-span-1">
                    <span className="text-small text-secondary font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-11">
                    <h2 className="text-title font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-150">
                      {platform.name}
                      <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-150">
                        →
                      </span>
                    </h2>
                    <p className="text-body text-primary mb-3">
                      {platform.tagline}
                    </p>
                    <p className="text-body text-secondary max-w-2xl">
                      {platform.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
