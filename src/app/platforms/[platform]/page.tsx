import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Section, Divider } from '@/components'
import { DiagramRenderer } from '@/components/diagram'
import { platformDiagrams } from '@/content/diagrams'

interface PlatformData {
  name: string
  tagline: string
  description: string
  capabilities: string[]
  technologies: string[]
  useCases: string[]
}

const platformsData: Record<string, PlatformData> = {
  'automation': {
    name: 'Automation',
    tagline: 'Workflow orchestration and process automation.',
    description: 'From simple task automation to complex multi-system orchestration. We build automation infrastructure that replaces manual processes, reduces operational friction, and scales with your business. Our automation platforms integrate with existing systems while providing the flexibility to adapt as requirements evolve.',
    capabilities: [
      'Multi-system workflow orchestration',
      'Event-driven automation pipelines',
      'Scheduled task management',
      'Human-in-the-loop workflows',
      'Error handling and retry logic',
      'Monitoring and alerting',
    ],
    technologies: [
      'n8n',
      'Custom workflow engines',
      'Message queues',
      'Webhook integrations',
      'API orchestration',
      'Event streaming',
    ],
    useCases: [
      'Order processing automation',
      'Customer onboarding workflows',
      'Report generation and distribution',
      'System synchronization',
      'Approval and escalation flows',
      'Data pipeline orchestration',
    ],
  },
  'ai-systems': {
    name: 'AI Systems',
    tagline: 'Intelligent decision engines and AI integration.',
    description: 'Practical AI that solves real business problems — from document processing to predictive analytics. We focus on AI systems that integrate into existing workflows and deliver measurable value. No experimental demos, just production-ready intelligence.',
    capabilities: [
      'Document understanding and extraction',
      'Predictive analytics and forecasting',
      'Natural language processing',
      'Computer vision applications',
      'Recommendation engines',
      'Anomaly detection systems',
    ],
    technologies: [
      'Large language models',
      'Custom ML models',
      'Vector databases',
      'RAG architectures',
      'Model fine-tuning',
      'MLOps infrastructure',
    ],
    useCases: [
      'Invoice and receipt processing',
      'Customer inquiry classification',
      'Demand forecasting',
      'Quality control automation',
      'Personalized recommendations',
      'Fraud detection',
    ],
  },
  'analytics': {
    name: 'Analytics',
    tagline: 'Data infrastructure and business intelligence.',
    description: 'Unified data platforms, real-time dashboards, and analytics that inform decisions. Built for organizations that take data seriously. We design data architectures that scale, implement reliable pipelines, and create interfaces that make data accessible to decision-makers.',
    capabilities: [
      'Data warehouse design and implementation',
      'ETL/ELT pipeline development',
      'Real-time streaming analytics',
      'Business intelligence dashboards',
      'Self-service analytics platforms',
      'Data governance frameworks',
    ],
    technologies: [
      'Modern data warehouses',
      'Stream processing',
      'BI tools integration',
      'Data modeling',
      'SQL and dbt',
      'Data quality frameworks',
    ],
    useCases: [
      'Executive dashboards',
      'Operational reporting',
      'Customer analytics',
      'Financial reporting automation',
      'Marketing attribution',
      'Supply chain visibility',
    ],
  },
  'infrastructure': {
    name: 'Infrastructure',
    tagline: 'Scalable cloud and application infrastructure.',
    description: 'Multi-tenant SaaS platforms, microservices architecture, and cloud infrastructure designed for reliability and scale. We build the foundation that applications run on — infrastructure that handles growth, maintains performance, and enables rapid development.',
    capabilities: [
      'Multi-tenant SaaS architecture',
      'Microservices design and implementation',
      'Container orchestration',
      'CI/CD pipeline automation',
      'Infrastructure as Code',
      'Disaster recovery and high availability',
    ],
    technologies: [
      'Kubernetes',
      'Docker',
      'Cloud platforms (AWS, Azure, GCP)',
      'Terraform',
      'Service mesh',
      'Observability stack',
    ],
    useCases: [
      'SaaS platform development',
      'Legacy system modernization',
      'Cloud migration',
      'Performance optimization',
      'Development workflow automation',
      'Multi-region deployment',
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(platformsData).map((slug) => ({ platform: slug }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ platform: string }> 
}): Promise<Metadata> {
  const { platform } = await params
  const platformData = platformsData[platform]
  
  if (!platformData) {
    return { title: 'Platform Not Found' }
  }

  return {
    title: platformData.name,
    description: platformData.tagline,
  }
}

export default async function PlatformPage({ 
  params 
}: { 
  params: Promise<{ platform: string }> 
}) {
  const { platform } = await params
  const platformData = platformsData[platform]

  if (!platformData) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 md:pt-30">
        <div className="container-narrow">
          <Link 
            href="/platforms"
            className="text-small text-secondary hover:text-primary transition-colors duration-150 mb-8 inline-block"
          >
            ← Platforms
          </Link>
          <h1 className="text-headline font-semibold text-primary mb-4">
            {platformData.name}
          </h1>
          <p className="text-title text-secondary font-normal">
            {platformData.tagline}
          </p>
        </div>
      </Section>

      <Divider />

      {/* Description */}
      <Section>
        <div className="container-narrow">
          <p className="text-body text-secondary leading-relaxed">
            {platformData.description}
          </p>
          {platform === 'ai-systems' && (
            <p className="mt-4 text-sm text-neutral-600 max-w-2xl">
              These capabilities are governed by Riddoff&apos;s internal reasoning and automation backbone (RABOS), which ensures consistent decision behavior across platforms.
            </p>
          )}
        </div>
      </Section>

      {/* Platform Diagram */}
      {platformDiagrams[platform] && (
        <Section>
          <div className="container-content">
            <DiagramRenderer config={platformDiagrams[platform]} />
          </div>
        </Section>
      )}

      <Divider />

      {/* Capabilities, Technologies, Use Cases */}
      <Section>
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {/* Capabilities */}
            <div>
              <h2 className="text-title font-semibold text-primary mb-6">
                Capabilities
              </h2>
              <ul className="space-y-3">
                {platformData.capabilities.map((item) => (
                  <li key={item} className="text-body text-secondary flex items-start">
                    <span className="text-accent mr-3 mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-title font-semibold text-primary mb-6">
                Technologies
              </h2>
              <ul className="space-y-3">
                {platformData.technologies.map((item) => (
                  <li key={item} className="text-body text-secondary flex items-start">
                    <span className="text-accent mr-3 mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-title font-semibold text-primary mb-6">
                Use Cases
              </h2>
              <ul className="space-y-3">
                {platformData.useCases.map((item) => (
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

      {/* CTA */}
      <Section>
        <div className="container-narrow text-center">
          <p className="text-body text-secondary mb-6">
            Interested in {platformData.name.toLowerCase()} for your organization?
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
