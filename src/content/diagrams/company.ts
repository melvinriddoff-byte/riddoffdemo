import { DiagramConfig } from '@/components/diagram/types'

export const companyDiagrams: Record<string, DiagramConfig> = {
  'rabos': {
    id: 'rabos-architecture',
    type: 'layer_stack',
    title: 'Riddoff System Architecture',
    description: 'RABOS operates as a reasoning and automation backbone between platform capabilities and product execution.',
    data: {
      layers: [
        'Industries & Operational Context',
        'Products (ERP, FleetX, GRYNDUP, Enterprise Systems)',
        'Platforms (Automation, AI Systems, Analytics, Infrastructure)',
        'RABOS — Reasoning & Automation Backbone',
        'Core Infrastructure & Services',
      ],
    },
  },
}
