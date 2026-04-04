import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, Divider } from '@/components'
import { DiagramRenderer } from '@/components/diagram'
import { companyDiagrams } from '@/content/diagrams/company'

export const metadata: Metadata = {
  title: 'RABOS',
  description: 'Reasoning & Automation Backbone for Operational Systems.',
}

export default function RabosPage() {
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
            RABOS
          </h1>
          <p className="text-title text-secondary font-normal">
            Reasoning & Automation Backbone for Operational Systems
          </p>
        </div>
      </Section>

      <Divider />

      {/* What RABOS Is */}
      <Section>
        <div className="container-narrow">
          <h2 className="text-title font-semibold text-primary mb-6">
            What RABOS Is
          </h2>
          <div className="space-y-4 text-body text-secondary leading-relaxed">
            <p>
              RABOS is Riddoff&apos;s internal reasoning and automation backbone.
            </p>
            <p>
              It is the system that governs <strong className="text-primary font-medium">how workflows are orchestrated</strong>, <strong className="text-primary font-medium">how decisions are made</strong>, and <strong className="text-primary font-medium">how operational software adapts over time</strong> across all Riddoff platforms and products.
            </p>
            <p>
              RABOS exists <em>beneath</em> user-facing applications. It is not exposed as a tool, a product, or a feature.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Why RABOS Exists */}
      <Section>
        <div className="container-narrow">
          <h2 className="text-title font-semibold text-primary mb-6">
            Why RABOS Exists
          </h2>
          <div className="space-y-4 text-body text-secondary leading-relaxed">
            <p>
              Most operational software struggles at scale because:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                business rules are hardcoded
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                automation becomes brittle
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                intelligence is added late, not designed in
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                systems behave inconsistently across products
              </li>
            </ul>
            <p>
              RABOS was built to solve this foundational problem.
            </p>
            <p>
              Instead of embedding logic separately in every application, Riddoff designed a <strong className="text-primary font-medium">central reasoning layer</strong> that governs behavior consistently across systems.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* What RABOS Does */}
      <Section>
        <div className="container-narrow">
          <h2 className="text-title font-semibold text-primary mb-6">
            What RABOS Does
          </h2>
          <div className="space-y-4 text-body text-secondary leading-relaxed">
            <p>
              At its core, RABOS translates operational intent into executable behavior.
            </p>
            <p>
              It enables Riddoff systems to:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Orchestrate workflows across services and platforms
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Apply rule-based and data-driven decision logic
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                React to events in real time
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Coordinate automation safely and predictably
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Improve behavior through feedback loops
              </li>
            </ul>
            <p>
              RABOS is designed to support both <strong className="text-primary font-medium">deterministic logic</strong> and <strong className="text-primary font-medium">AI-assisted reasoning</strong>, without coupling intelligence directly to user interfaces.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* How RABOS Fits Into Riddoff */}
      <Section>
        <div className="container-narrow">
          <h2 className="text-title font-semibold text-primary mb-6">
            How RABOS Fits Into Riddoff
          </h2>
          <div className="space-y-4 text-body text-secondary leading-relaxed mb-12">
            <p>
              RABOS operates as a <strong className="text-primary font-medium">company-level backbone</strong>, powering multiple layers of the Riddoff ecosystem.
            </p>
            <p>
              Conceptually:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                RABOS governs <em>how systems think and act</em>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Platforms expose <em>capabilities</em>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Products deliver <em>outcomes</em>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Industries define <em>context</em>
              </li>
            </ul>
            <p>
              This separation allows Riddoff to build new platforms and products without re-solving the same reasoning and automation problems.
            </p>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="container-content">
          <DiagramRenderer config={companyDiagrams['rabos']} />
        </div>
      </Section>

      <Divider />

      {/* What RABOS Is Not */}
      <Section>
        <div className="container-narrow">
          <h2 className="text-title font-semibold text-primary mb-6">
            What RABOS Is Not
          </h2>
          <div className="space-y-4 text-body text-secondary leading-relaxed">
            <p>
              To avoid confusion, RABOS is explicitly <strong className="text-primary font-medium">not</strong>:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                A customer-facing automation tool
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                A workflow builder UI
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                A chatbot or single AI model
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                A standalone SaaS product
              </li>
            </ul>
            <p>
              RABOS is infrastructure-level intelligence — designed to remain invisible while shaping system behavior.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Strategic Importance */}
      <Section>
        <div className="container-narrow">
          <h2 className="text-title font-semibold text-primary mb-6">
            Strategic Importance
          </h2>
          <div className="space-y-4 text-body text-secondary leading-relaxed">
            <p>
              RABOS provides Riddoff with long-term structural advantages:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <strong className="text-primary font-medium">Consistency:</strong> Shared logic across products
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <strong className="text-primary font-medium">Scalability:</strong> New systems inherit mature behavior
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <strong className="text-primary font-medium">Adaptability:</strong> Rules and decisions evolve without rewrites
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <strong className="text-primary font-medium">Defensibility:</strong> Deep internal IP that compounds over time
              </li>
            </ul>
            <p>
              This allows Riddoff to operate as a <strong className="text-primary font-medium">platform company</strong>, not a collection of isolated applications.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* RABOS in Practice */}
      <Section>
        <div className="container-narrow">
          <h2 className="text-title font-semibold text-primary mb-6">
            RABOS in Practice
          </h2>
          <div className="space-y-4 text-body text-secondary leading-relaxed">
            <p>
              RABOS powers decision-making and automation across Riddoff systems, including:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Operational orchestration in enterprise platforms
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Intelligent workflow execution
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Data-informed decision loops
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Cross-system coordination
              </li>
            </ul>
            <p>
              While users interact with products like ERP platforms or industry systems, RABOS quietly governs <em>how those systems respond, adapt, and scale</em>.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Long-Term Vision */}
      <Section>
        <div className="container-narrow">
          <h2 className="text-title font-semibold text-primary mb-6">
            Long-Term Vision
          </h2>
          <div className="space-y-4 text-body text-secondary leading-relaxed">
            <p>
              RABOS enables Riddoff to:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Launch new operational systems faster
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Maintain clarity as complexity grows
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Integrate intelligence without architectural churn
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                Evolve platforms without fragmenting logic
              </li>
            </ul>
            <p>
              It is the backbone that allows Riddoff to compound capabilities over time.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Closing Statement */}
      <Section>
        <div className="container-narrow">
          <blockquote className="text-title text-primary font-semibold">
            &ldquo;We don&apos;t ship features in isolation. We design systems that reason, automate, and improve as they operate.&rdquo;
          </blockquote>
          <p className="text-body text-secondary mt-6">
            RABOS exists to make that possible.
          </p>
        </div>
      </Section>
    </>
  )
}
