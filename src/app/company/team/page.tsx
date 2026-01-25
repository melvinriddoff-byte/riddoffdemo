import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Divider } from '@/components'

export const metadata: Metadata = {
  title: 'Team | Riddoff Technologies',
  description: 'Engineers, operators, and system builders behind Riddoff Technologies.',
}

const teamMembers = [
  {
    name: 'Nandu K',
    role: 'Software Engineer',
    focus: 'Systems Development',
    image: '/team/nandu.png',
    imagePosition: 'object-[center_15%]',
    linkedin: 'https://www.linkedin.com/in/nandu-k/',
  },
  {
    name: 'Melvin Maichle',
    role: 'Software Developer',
    focus: 'Platform Engineering',
    image: '/team/melvin.jpg',
    imagePosition: 'object-center',
    linkedin: 'https://www.linkedin.com/in/melvin-maichle/',
  },
]

export default function TeamPage() {
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
            Team
          </h1>
          <p className="text-body text-secondary max-w-xl">
            Engineers, operators, and system builders behind Riddoff.
          </p>
        </div>
      </Section>

      <Divider />

      {/* Team Grid */}
      <Section>
        <div className="container-content">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden bg-neutral-100 mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} – ${member.role} at Riddoff Technologies`}
                    fill
                    className={`object-cover ${member.imagePosition}`}
                    sizes="128px"
                  />
                </div>
                <h3 className="text-body font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-small text-secondary mt-1">
                  {member.role}
                </p>
                <p className="text-small text-tertiary">
                  {member.focus}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-small text-secondary hover:text-primary transition-colors duration-150"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg 
                    className="w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Divider />

      {/* Join */}
      <Section>
        <div className="container-narrow">
          <div className="text-center">
            <h2 className="text-title font-semibold text-primary mb-4">
              Build with us
            </h2>
            <p className="text-body text-secondary mb-6 max-w-lg mx-auto">
              We&apos;re always looking for engineers who want to build systems that matter.
            </p>
            <Link
              href="/connect"
              className="inline-block text-body font-medium text-primary hover:text-accent transition-colors duration-150 link-hover"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
