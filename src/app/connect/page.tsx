'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Divider } from '@/components'

const industries = [
  'Logistics & Fleet',
  'Fintech & Payments',
  'Fitness & Wellness',
  'Hospitality',
  'Manufacturing',
  'Retail & E-commerce',
  'Healthcare',
  'Other',
]

const scales = [
  'Startup (1-10 employees)',
  'Small business (11-50 employees)',
  'Mid-market (51-500 employees)',
  'Enterprise (500+ employees)',
]

const timelines = [
  'Exploring options',
  'Planning to start in 1-3 months',
  'Ready to start immediately',
  'Ongoing project needs support',
]

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    building: '',
    industry: '',
    scale: '',
    timeline: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to your API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <Section className="min-h-[60vh] flex items-center">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-headline font-semibold text-primary mb-4">
              Thank you
            </h1>
            <p className="text-body text-secondary">
              We&apos;ve received your message and will be in touch soon.
            </p>
          </motion.div>
        </div>
      </Section>
    )
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-20 md:pt-30">
        <div className="container-narrow">
          <h1 className="text-headline font-semibold text-primary mb-4">
            Start a conversation
          </h1>
          <p className="text-title text-secondary font-normal">
            Tell us what you&apos;re building. We&apos;ll tell you how we can help.
          </p>
        </div>
      </Section>

      <Divider />

      {/* Form */}
      <Section>
        <div className="container-narrow">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-small font-medium text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-sm text-body text-primary bg-background focus:outline-none focus:border-accent transition-colors duration-150"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-small font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-sm text-body text-primary bg-background focus:outline-none focus:border-accent transition-colors duration-150"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-small font-medium text-primary mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-sm text-body text-primary bg-background focus:outline-none focus:border-accent transition-colors duration-150"
              />
            </div>

            {/* What are you building? */}
            <div>
              <label htmlFor="building" className="block text-small font-medium text-primary mb-2">
                What are you building?
              </label>
              <textarea
                id="building"
                name="building"
                rows={4}
                required
                value={formData.building}
                onChange={handleChange}
                placeholder="Describe your project, challenge, or what you're looking to accomplish..."
                className="w-full px-4 py-3 border border-border rounded-sm text-body text-primary bg-background focus:outline-none focus:border-accent transition-colors duration-150 resize-none"
              />
            </div>

            {/* Industry */}
            <div>
              <label htmlFor="industry" className="block text-small font-medium text-primary mb-2">
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-sm text-body text-primary bg-background focus:outline-none focus:border-accent transition-colors duration-150"
              >
                <option value="">Select an industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Scale & Timeline */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="scale" className="block text-small font-medium text-primary mb-2">
                  Scale
                </label>
                <select
                  id="scale"
                  name="scale"
                  value={formData.scale}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-sm text-body text-primary bg-background focus:outline-none focus:border-accent transition-colors duration-150"
                >
                  <option value="">Select company size</option>
                  {scales.map(scale => (
                    <option key={scale} value={scale}>
                      {scale}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-small font-medium text-primary mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-sm text-body text-primary bg-background focus:outline-none focus:border-accent transition-colors duration-150"
                >
                  <option value="">Select timeline</option>
                  {timelines.map(timeline => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white text-body font-medium rounded-sm hover:bg-primary/90 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </Section>

      <Divider />

      {/* Direct Contact */}
      <Section>
        <div className="container-narrow">
          <div className="text-center space-y-8">
            {/* Leadership Contact */}
            <div>
              <p className="text-small text-secondary uppercase tracking-wider mb-3">
                Connect with Leadership
              </p>
              <p className="text-title font-semibold text-primary">
                Razal Rahman
              </p>
              <p className="text-body text-secondary mb-2">
                Director & CEO
              </p>
              <a 
                href="mailto:razalrahmanp@riddoff.com" 
                className="text-body text-primary hover:text-accent transition-colors duration-150 link-hover"
              >
                razalrahmanp@riddoff.com
              </a>
            </div>

            {/* General Contact */}
            <div className="pt-4 border-t border-border">
              <p className="text-body text-secondary">
                General inquiries:{' '}
                <a 
                  href="mailto:hello@riddoff.com" 
                  className="text-primary hover:text-accent transition-colors duration-150 link-hover"
                >
                  hello@riddoff.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
