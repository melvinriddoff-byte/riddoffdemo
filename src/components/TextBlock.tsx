'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TextBlockProps {
  children: ReactNode
  className?: string
  align?: 'left' | 'center'
  size?: 'normal' | 'large'
}

export function TextBlock({ 
  children, 
  className = '', 
  align = 'left',
  size = 'normal' 
}: TextBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        ${align === 'center' ? 'text-center' : 'text-left'}
        ${size === 'large' ? 'text-title md:text-headline' : 'text-body'}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
