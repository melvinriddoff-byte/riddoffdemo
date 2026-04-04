import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Where our software runs businesses, not just interfaces.',
}

const industries = [
  {
    slug: 'logistics',
    name: 'Logistics',
    tagline: 'Fleet, delivery, and supply chain operations.',
    description: 'Systems that manage vehicles, routes, drivers, and deliveries. Built for companies where operational efficiency directly impacts profitability.',
  },
  {
    slug: 'fintech',
    name: 'Fintech',
    tagline: 'Payments, transactions, and financial operations.',
    description: 'Secure, compliant systems for financial services. From payment processing to transaction management and financial reporting.',
  },
  {
    slug: 'fitness',
    name: 'Fitness',
    tagline: 'Gyms, studios, and wellness businesses.',
    description: 'Member management, scheduling, and engagement platforms. Technology that helps fitness businesses grow and retain members.',
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    tagline: 'Hotels, restaurants, and service operations.',
    description: 'Operational systems for hospitality businesses. Reservations, staff management, and guest experience optimization.',
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 md:pt-30">
        <div className="container-narrow">
          <h1 className="text-headline font-semibold text-primary mb-4">
            Industries
          </h1>
          <p className="text-title text-secondary font-normal">
            Where our software runs businesses, not just interfaces.
          </p>
        </div>
      </Section>

      {/* Industries List */}
      <Section>
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block"
              >
                <article>
                  <h2 className="text-title font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-150">
                    {industry.name}
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-150">
                      →
                    </span>
                  </h2>
                  <p className="text-body text-primary mb-3">
                    {industry.tagline}
                  </p>
                  <p className="text-body text-secondary">
                    {industry.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
