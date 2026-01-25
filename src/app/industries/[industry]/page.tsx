import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Section, Divider } from '@/components'
import { DiagramRenderer } from '@/components/diagram'
import { industryDiagrams } from '@/content/diagrams'

interface IndustryData {
  name: string
  tagline: string
  description: string
  challenges: string[]
  solutions: string[]
  relevantProducts: { name: string; href: string }[]
}

const industriesData: Record<string, IndustryData> = {
  'logistics': {
    name: 'Logistics',
    tagline: 'Fleet, delivery, and supply chain operations.',
    description: 'Logistics companies operate in an environment where every minute matters. Route efficiency, driver utilization, vehicle maintenance, and delivery accuracy directly impact margins. We build systems that give logistics operators real-time visibility and control over their operations.',
    challenges: [
      'Real-time visibility across distributed operations',
      'Route optimization for fuel and time efficiency',
      'Driver management and compliance tracking',
      'Maintenance scheduling to prevent breakdowns',
      'Customer communication and delivery tracking',
      'Integration with warehouse and inventory systems',
    ],
    solutions: [
      'GPS tracking with geofencing and alerts',
      'AI-powered route optimization',
      'Digital driver logs and compliance documentation',
      'Predictive maintenance scheduling',
      'Customer-facing delivery tracking',
      'API integrations with existing systems',
    ],
    relevantProducts: [
      { name: 'FleetX', href: '/products/fleetx' },
      { name: 'Automation', href: '/platforms/automation' },
      { name: 'Analytics', href: '/platforms/analytics' },
    ],
  },
  'fintech': {
    name: 'Fintech',
    tagline: 'Payments, transactions, and financial operations.',
    description: 'Financial technology demands security, compliance, and reliability. Whether processing payments, managing transactions, or building financial products, we understand the regulatory requirements and technical standards that fintech companies must meet.',
    challenges: [
      'Security and fraud prevention',
      'Regulatory compliance across jurisdictions',
      'High-availability and transaction reliability',
      'Real-time processing at scale',
      'Audit trails and reporting requirements',
      'Integration with banking and payment networks',
    ],
    solutions: [
      'Secure, encrypted transaction processing',
      'Compliance monitoring and reporting',
      'High-availability infrastructure design',
      'Real-time analytics and fraud detection',
      'Comprehensive audit logging',
      'API-first integration architecture',
    ],
    relevantProducts: [
      { name: 'Enterprise Systems', href: '/products/enterprise-systems' },
      { name: 'AI Systems', href: '/platforms/ai-systems' },
      { name: 'Infrastructure', href: '/platforms/infrastructure' },
    ],
  },
  'fitness': {
    name: 'Fitness',
    tagline: 'Gyms, studios, and wellness businesses.',
    description: 'Fitness businesses succeed when members stay engaged. From membership management to class scheduling to payment processing, we build technology that removes friction from gym operations and helps fitness businesses focus on their members.',
    challenges: [
      'Member acquisition and onboarding',
      'Retention and engagement tracking',
      'Class and appointment scheduling',
      'Payment processing and billing automation',
      'Multi-location management',
      'Staff and trainer scheduling',
    ],
    solutions: [
      'Streamlined digital member signup',
      'Engagement analytics and retention tools',
      'Online booking and scheduling systems',
      'Automated recurring billing',
      'Centralized multi-location management',
      'Staff scheduling and payroll integration',
    ],
    relevantProducts: [
      { name: 'GRYNDUP', href: '/products/gryndup' },
      { name: 'Automation', href: '/platforms/automation' },
      { name: 'Analytics', href: '/platforms/analytics' },
    ],
  },
  'hospitality': {
    name: 'Hospitality',
    tagline: 'Hotels, restaurants, and service operations.',
    description: 'Hospitality is about experience, and great experiences require smooth operations. We build systems that help hospitality businesses manage reservations, coordinate staff, and optimize their operations — so teams can focus on guests.',
    challenges: [
      'Reservation and booking management',
      'Staff scheduling across shifts',
      'Inventory and supply management',
      'Guest experience personalization',
      'Multi-property coordination',
      'Revenue management and pricing',
    ],
    solutions: [
      'Centralized reservation systems',
      'Dynamic staff scheduling',
      'Inventory tracking and reordering',
      'Guest preference tracking',
      'Multi-property management platforms',
      'Revenue analytics and pricing tools',
    ],
    relevantProducts: [
      { name: 'Riddoff ERP', href: '/products/riddoff-erp' },
      { name: 'Enterprise Systems', href: '/products/enterprise-systems' },
      { name: 'Automation', href: '/platforms/automation' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ industry: slug }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ industry: string }> 
}): Promise<Metadata> {
  const { industry } = await params
  const industryData = industriesData[industry]
  
  if (!industryData) {
    return { title: 'Industry Not Found' }
  }

  return {
    title: industryData.name,
    description: industryData.tagline,
  }
}

export default async function IndustryPage({ 
  params 
}: { 
  params: Promise<{ industry: string }> 
}) {
  const { industry } = await params
  const industryData = industriesData[industry]

  if (!industryData) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 md:pt-30">
        <div className="container-narrow">
          <Link 
            href="/industries"
            className="text-small text-secondary hover:text-primary transition-colors duration-150 mb-8 inline-block"
          >
            ← Industries
          </Link>
          <h1 className="text-headline font-semibold text-primary mb-4">
            {industryData.name}
          </h1>
          <p className="text-title text-secondary font-normal">
            {industryData.tagline}
          </p>
        </div>
      </Section>

      <Divider />

      {/* Description */}
      <Section>
        <div className="container-narrow">
          <p className="text-body text-secondary leading-relaxed">
            {industryData.description}
          </p>
        </div>
      </Section>

      {/* Industry Operations Mapping */}
      {industryDiagrams[industry] && (
        <Section>
          <div className="container-content">
            <DiagramRenderer config={industryDiagrams[industry]} />
          </div>
        </Section>
      )}

      <Divider />

      {/* Challenges & Solutions */}
      <Section>
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Challenges */}
            <div>
              <h2 className="text-title font-semibold text-primary mb-6">
                Challenges
              </h2>
              <ul className="space-y-3">
                {industryData.challenges.map((item) => (
                  <li key={item} className="text-body text-secondary flex items-start">
                    <span className="text-secondary mr-3 mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-title font-semibold text-primary mb-6">
                How We Solve Them
              </h2>
              <ul className="space-y-3">
                {industryData.solutions.map((item) => (
                  <li key={item} className="text-body text-secondary flex items-start">
                    <span className="text-accent mr-3 mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Relevant Products */}
      <Section>
        <div className="container-content">
          <h2 className="text-title font-semibold text-primary mb-8">
            Relevant Products & Platforms
          </h2>
          <div className="flex flex-wrap gap-4">
            {industryData.relevantProducts.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="px-4 py-2 border border-border rounded-sm text-body text-primary hover:border-accent hover:text-accent transition-colors duration-150"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container-narrow text-center">
          <p className="text-body text-secondary mb-6">
            Building something in {industryData.name.toLowerCase()}?
          </p>
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
