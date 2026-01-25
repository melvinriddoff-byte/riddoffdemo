'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface DirectionItem {
  href: string
  title: string
  description: string
}

interface DirectionGridProps {
  items: DirectionItem[]
}

export function DirectionGrid({ items }: DirectionGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {items.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link 
            href={item.href}
            className="group block"
          >
            <h3 className="text-title font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-150">
              {item.title}
              <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-150">
                →
              </span>
            </h3>
            <p className="text-body text-secondary leading-relaxed">
              {item.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
