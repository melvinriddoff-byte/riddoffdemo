import type { DiagramConfig } from '@/components/diagram'

export const platformDiagrams: Record<string, DiagramConfig> = {
  'automation': {
    id: 'automation-flow',
    type: 'flow',
    title: 'Automation Orchestration',
    description: 'Event-driven workflows across systems.',
    data: {
      steps: [
        'Trigger Event',
        'Validation Rules',
        'Workflow Execution',
        'System Actions',
        'Feedback & Logging',
      ],
    },
  },
  'ai-systems': {
    id: 'ai-decision-loop',
    type: 'decision_loop',
    title: 'AI Decision Engine',
    description: 'Turning data into automated and assisted decisions.',
    data: {
      inputs: [
        'User Actions',
        'System Data',
        'External Signals',
      ],
      engine: 'AI Models & Rules Engine',
      outputs: [
        'Predictions',
        'Recommendations',
        'Automated Actions',
      ],
    },
  },
  'analytics': {
    id: 'analytics-pipeline',
    type: 'flow',
    title: 'Data Analytics Pipeline',
    description: 'From raw data to actionable insights.',
    data: {
      steps: [
        'Data Collection',
        'Processing & Cleaning',
        'Analysis & Modeling',
        'Business Intelligence',
        'Reports & Dashboards',
      ],
    },
  },
  'infrastructure': {
    id: 'infrastructure-stack',
    type: 'layer_stack',
    title: 'Scalable Infrastructure Stack',
    description: 'Built for reliability, security, and scale.',
    data: {
      layers: [
        'Client Applications',
        'APIs & Services',
        'Databases & Storage',
        'Cloud Infrastructure',
        'Monitoring & Security',
      ],
    },
  },
}
