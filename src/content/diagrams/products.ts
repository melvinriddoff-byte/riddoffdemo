import type { DiagramConfig } from '@/components/diagram'

export const productDiagrams: Record<string, DiagramConfig> = {
  'riddoff-erp': {
    id: 'riddoff-erp-system',
    type: 'system_blocks',
    title: 'Unified Operational Platform',
    description: 'All operational modules connected through a single system core.',
    data: {
      core: 'Riddoff ERP Core',
      modules: [
        'Inventory Management',
        'Financials & Billing',
        'Procurement',
        'CRM',
        'Supply Chain',
        'Reporting & Analytics',
        'Workflow Automation',
        'HR & Payroll',
      ],
    },
  },
  'fleetx': {
    id: 'fleetx-flow',
    type: 'flow',
    title: 'Fleet Operations Flow',
    description: 'From assignment to delivery with real-time control.',
    data: {
      steps: [
        'Job Assigned',
        'Vehicle Dispatched',
        'Live GPS Tracking',
        'Route Optimization',
        'Delivery Completed',
        'Operational Report',
      ],
    },
  },
  'gryndup': {
    id: 'gryndup-system',
    type: 'flow',
    title: 'Fitness Operations Lifecycle',
    description: 'End-to-end management for gyms and trainers.',
    data: {
      steps: [
        'Member Onboarding',
        'Class Scheduling',
        'Trainer Assignment',
        'Session Tracking',
        'Payments & Billing',
        'Performance Insights',
      ],
    },
  },
  'enterprise-systems': {
    id: 'enterprise-stack',
    type: 'layer_stack',
    title: 'Enterprise System Architecture',
    description: 'Custom platforms built on a stable, scalable foundation.',
    data: {
      layers: [
        'User Interfaces',
        'Business Logic',
        'Automation & Workflows',
        'Data & Analytics',
        'Infrastructure & Security',
      ],
    },
  },
}
