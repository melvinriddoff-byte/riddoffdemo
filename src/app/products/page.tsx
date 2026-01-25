import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Operational platforms designed to handle real-world complexity.',
}

const products = [
  {
    slug: 'riddoff-erp',
    name: 'Riddoff ERP',
    tagline: 'Enterprise resource planning built for operational clarity.',
    description: 'A modular ERP system designed for businesses that need control over inventory, finance, procurement, and operations — without the complexity of legacy systems.',
  },
  {
    slug: 'fleetx',
    name: 'FleetX',
    tagline: 'Fleet management for modern logistics.',
    description: 'Real-time tracking, route optimization, driver management, and maintenance scheduling — unified in a single platform built for scale.',
  },
  {
    slug: 'gryndup',
    name: 'GRYNDUP',
    tagline: 'Fitness technology that powers gyms and trainers.',
    description: 'Membership management, scheduling, payments, and member engagement — designed for fitness businesses that want to grow without friction.',
  },
  {
    slug: 'enterprise-systems',
    name: 'Enterprise Systems',
    tagline: 'Custom platforms for complex operations.',
    description: 'Purpose-built software for organizations with unique operational requirements. Multi-tenant, scalable, and designed for long-term maintainability.',
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 md:pt-30">
        <div className="container-narrow">
          <h1 className="text-headline font-semibold text-primary mb-4">
            Products
          </h1>
          <p className="text-title text-secondary font-normal">
            Operational platforms designed to handle real-world complexity.
          </p>
        </div>
      </Section>

      {/* Products List */}
      <Section>
        <div className="container-content">
          <div className="space-y-16 md:space-y-20">
            {products.map((product, index) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
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
                      {product.name}
                      <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-150">
                        →
                      </span>
                    </h2>
                    <p className="text-body text-primary mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-body text-secondary max-w-2xl">
                      {product.description}
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
