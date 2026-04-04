import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Section, Divider } from '@/components'
import { DiagramRenderer } from '@/components/diagram'
import { productDiagrams } from '@/content/diagrams'

interface ProductData {
  name: string
  tagline: string
  description: string
  features: string[]
  audience: string[]
  modules?: string[]
}

const productsData: Record<string, ProductData> = {
  'riddoff-erp': {
    name: 'Riddoff ERP',
    tagline: 'Enterprise resource planning built for operational clarity.',
    description: 'A modular ERP system designed for businesses that need control over inventory, finance, procurement, and operations — without the complexity of legacy systems. Built for companies that have outgrown spreadsheets but don\'t need the overhead of traditional enterprise software.',
    features: [
      'Real-time inventory tracking and management',
      'Financial reporting and accounting integration',
      'Procurement and vendor management',
      'Multi-location support',
      'Role-based access control',
      'API-first architecture for integrations',
    ],
    audience: [
      'Mid-size manufacturing companies',
      'Distribution and wholesale businesses',
      'Multi-location retail operations',
      'Growing companies with complex operations',
    ],
    modules: [
      'Inventory Management',
      'Financial Accounting',
      'Procurement',
      'Sales & CRM',
      'HR & Payroll',
      'Reporting & Analytics',
    ],
  },
  'fleetx': {
    name: 'FleetX',
    tagline: 'Fleet management for modern logistics.',
    description: 'Real-time tracking, route optimization, driver management, and maintenance scheduling — unified in a single platform built for scale. FleetX handles everything from small delivery fleets to enterprise logistics operations.',
    features: [
      'Real-time GPS tracking and geofencing',
      'AI-powered route optimization',
      'Driver performance monitoring',
      'Predictive maintenance scheduling',
      'Fuel management and cost tracking',
      'Compliance and documentation management',
    ],
    audience: [
      'Logistics and delivery companies',
      'Transportation businesses',
      'Field service organizations',
      'Enterprise fleet operators',
    ],
  },
  'gryndup': {
    name: 'GRYNDUP',
    tagline: 'Fitness technology that powers gyms and trainers.',
    description: 'Membership management, scheduling, payments, and member engagement — designed for fitness businesses that want to grow without friction. From boutique studios to multi-location gym chains.',
    features: [
      'Membership and subscription management',
      'Class scheduling and booking',
      'Payment processing and billing automation',
      'Member engagement and retention tools',
      'Trainer and staff management',
      'Performance analytics and reporting',
    ],
    audience: [
      'Gyms and fitness centers',
      'Boutique fitness studios',
      'Personal trainers and coaches',
      'Multi-location fitness chains',
    ],
  },
  'enterprise-systems': {
    name: 'Enterprise Systems',
    tagline: 'Custom platforms for complex operations.',
    description: 'Purpose-built software for organizations with unique operational requirements. When off-the-shelf solutions don\'t fit, we design and build systems that do — multi-tenant, scalable, and designed for long-term maintainability.',
    features: [
      'Custom workflow automation',
      'Multi-tenant architecture',
      'Enterprise-grade security',
      'Scalable infrastructure',
      'API integrations',
      'Long-term support and maintenance',
    ],
    audience: [
      'Organizations with unique operational needs',
      'Companies requiring custom integrations',
      'Businesses scaling beyond SaaS limitations',
      'Enterprises needing dedicated systems',
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({ product: slug }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ product: string }> 
}): Promise<Metadata> {
  const { product } = await params
  const productData = productsData[product]
  
  if (!productData) {
    return { title: 'Product Not Found' }
  }

  return {
    title: productData.name,
    description: productData.tagline,
  }
}

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ product: string }> 
}) {
  const { product } = await params
  const productData = productsData[product]

  if (!productData) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 md:pt-30">
        <div className="container-narrow">
          <Link 
            href="/products"
            className="text-small text-secondary hover:text-primary transition-colors duration-150 mb-8 inline-block"
          >
            ← Products
          </Link>
          <h1 className="text-headline font-semibold text-primary mb-4">
            {productData.name}
          </h1>
          <p className="text-title text-secondary font-normal">
            {productData.tagline}
          </p>
        </div>
      </Section>

      <Divider />

      {/* Description */}
      <Section>
        <div className="container-narrow">
          <p className="text-body text-secondary leading-relaxed">
            {productData.description}
          </p>
        </div>
      </Section>

      {/* System Diagram */}
      {productDiagrams[product] && (
        <Section>
          <div className="container-content">
            <DiagramRenderer config={productDiagrams[product]} />
          </div>
        </Section>
      )}

      <Divider />

      {/* Features & Audience */}
      <Section>
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Features */}
            <div>
              <h2 className="text-title font-semibold text-primary mb-6">
                Capabilities
              </h2>
              <ul className="space-y-3">
                {productData.features.map((feature) => (
                  <li key={feature} className="text-body text-secondary flex items-start">
                    <span className="text-accent mr-3 mt-1.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Audience */}
            <div>
              <h2 className="text-title font-semibold text-primary mb-6">
                Built For
              </h2>
              <ul className="space-y-3">
                {productData.audience.map((item) => (
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

      {/* Modules (if applicable) */}
      {productData.modules && (
        <>
          <Divider />
          <Section>
            <div className="container-content">
              <h2 className="text-title font-semibold text-primary mb-8">
                Modules
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {productData.modules.map((module) => (
                  <div 
                    key={module}
                    className="p-4 border border-border rounded-sm"
                  >
                    <span className="text-body text-primary">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </>
      )}

      {/* CTA */}
      <Section>
        <div className="container-narrow text-center">
          <p className="text-body text-secondary mb-6">
            Ready to discuss {productData.name} for your organization?
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
