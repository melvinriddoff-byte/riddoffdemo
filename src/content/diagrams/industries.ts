import type { DiagramConfig } from '@/components/diagram'

export const industryDiagrams: Record<string, DiagramConfig> = {
  'logistics': {
    id: 'logistics-mapping',
    type: 'mapping',
    title: 'Logistics Operations Mapping',
    description: 'Where Riddoff systems integrate into logistics operations.',
    data: {
      workflow: [
        'Order Created',
        'Fleet Assignment',
        'In Transit',
        'Delivery',
        'Settlement',
      ],
      systems: {
        'Fleet Assignment': ['FleetX'],
        'In Transit': ['Automation', 'Analytics'],
        'Settlement': ['Riddoff ERP'],
      },
    },
  },
  'fintech': {
    id: 'fintech-mapping',
    type: 'mapping',
    title: 'Fintech Operations Mapping',
    description: 'Core financial workflows powered by Riddoff systems.',
    data: {
      workflow: [
        'Transaction Initiated',
        'Validation & Compliance',
        'Processing',
        'Settlement',
        'Reporting',
      ],
      systems: {
        'Validation & Compliance': ['AI Systems'],
        'Processing': ['Automation'],
        'Reporting': ['Analytics', 'Riddoff ERP'],
      },
    },
  },
  'fitness': {
    id: 'fitness-mapping',
    type: 'mapping',
    title: 'Fitness Business Operations',
    description: 'Operational flow for gyms and wellness businesses.',
    data: {
      workflow: [
        'Member Signup',
        'Scheduling',
        'Session Execution',
        'Billing',
        'Insights',
      ],
      systems: {
        'Scheduling': ['GRYNDUP'],
        'Billing': ['Riddoff ERP'],
        'Insights': ['Analytics'],
      },
    },
  },
  'hospitality': {
    id: 'hospitality-mapping',
    type: 'mapping',
    title: 'Hospitality Operations Flow',
    description: 'From guest interaction to backend operations.',
    data: {
      workflow: [
        'Booking',
        'Check-in',
        'Service Management',
        'Billing',
        'Reporting',
      ],
      systems: {
        'Service Management': ['Automation'],
        'Billing': ['Riddoff ERP'],
        'Reporting': ['Analytics'],
      },
    },
  },
}
