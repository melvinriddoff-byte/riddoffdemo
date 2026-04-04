import { Block } from './Block'
import type { MappingData } from './types'

interface MappingProps {
  data: MappingData
}

export function Mapping({ data }: MappingProps) {
  return (
    <div className="space-y-8">
      {/* Workflow Steps */}
      <div className="flex flex-wrap justify-center gap-6">
        {data.workflow.map((step) => (
          <Block key={step} title={step} />
        ))}
      </div>

      {/* System Mappings */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {Object.entries(data.systems).map(([stage, systems]) => (
          <div key={stage}>
            <div className="mb-2 text-xs text-secondary">
              {stage}
            </div>
            <div className="flex flex-wrap gap-3">
              {systems.map((system) => (
                <span
                  key={system}
                  className="text-xs px-3 py-1.5 bg-muted text-primary rounded border border-border"
                >
                  {system}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
