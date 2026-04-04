'use client'

import { motion } from 'framer-motion'
import { DirectionGrid, Section, TextBlock, Divider } from '@/components'

const directionItems = [
  {
    href: '/products',
    title: 'Products',
    description: 'Operational platforms designed to handle real-world complexity.',
  },
  {
    href: '/platforms',
    title: 'Platforms',
    description: 'The systems that power automation, intelligence, and scale.',
  },
  {
    href: '/industries',
    title: 'Industries',
    description: 'Where our software runs businesses, not just interfaces.',
  },
  {
    href: '/company',
    title: 'Company',
    description: 'Why Riddoff exists and how we think about building technology.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container-narrow text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-display font-semibold text-primary mb-6 text-balance"
          >
            Riddoff Technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-title text-secondary font-normal max-w-xl mx-auto"
          >
            Building operational software and intelligent systems for modern businesses.
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* Directional Gateway */}
      <Section className="bg-background">
        <div className="container-wide">
          <DirectionGrid items={directionItems} />
        </div>
      </Section>

      <Divider />

      {/* Philosophy Section */}
      <Section>
        <div className="container-narrow">
          <TextBlock size="large" className="text-primary font-semibold mb-4">
            We don&apos;t build for demos.
            <br />
            We build for operations.
          </TextBlock>
          <TextBlock className="text-secondary">
            Our work lives behind businesses — not in marketing decks.
          </TextBlock>
        </div>
      </Section>

      <Divider />

      {/* Scale Signal */}
      <Section>
        <div className="container-content">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-body text-secondary"
          >
            Designed for scale. Built for complexity. Deployed across industries.
          </motion.p>
        </div>
      </Section>
    </>
  )
}
