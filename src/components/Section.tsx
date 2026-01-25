'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  animate?: boolean
}

export function Section({ children, className = '', animate = true }: SectionProps) {
  if (animate) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className={`section ${className}`}
      >
        {children}
      </motion.section>
    )
  }

  return (
    <section className={`section ${className}`}>
      {children}
    </section>
  )
}
