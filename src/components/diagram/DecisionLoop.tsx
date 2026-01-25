import { Block } from './Block'
import type { DecisionLoopData } from './types'

interface DecisionLoopProps {
  data: DecisionLoopData
}

export function DecisionLoop({ data }: DecisionLoopProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
      {/* Inputs Column */}
      <div className="space-y-3">
        <div className="text-center mb-4">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">
            Inputs
          </span>
        </div>
        {data.inputs.map((input) => (
          <Block key={input} title={input} />
        ))}
      </div>

      {/* Engine (Center) */}
      <div className="flex items-center justify-center">
        <Block title={data.engine} highlighted />
      </div>

      {/* Outputs Column */}
      <div className="space-y-3">
        <div className="text-center mb-4">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">
            Outputs
          </span>
        </div>
        {data.outputs.map((output) => (
          <Block key={output} title={output} />
        ))}
      </div>
    </div>
  )
}
