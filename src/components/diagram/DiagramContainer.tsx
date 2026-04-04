'use client'

import { motion } from 'framer-motion'

interface DiagramContainerProps {
  title?: string
  description?: string
  children: React.ReactNode
}

export function DiagramContainer({
  title,
  description,
  children
}: DiagramContainerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="mt-12 mb-16 max-w-5xl mx-auto"
    >
      {title && (
        <h3 className="mb-2 text-sm font-medium text-primary">
          {title}
        </h3>
      )}

      {description && (
        <p className="mb-6 text-sm text-secondary">
          {description}
        </p>
      )}

      {children}
    </motion.section>
  )
}
