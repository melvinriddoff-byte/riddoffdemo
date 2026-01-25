import { Block } from './Block'
import { Arrow } from './Arrow'
import type { FlowData } from './types'

interface FlowProps {
  data: FlowData
}

export function Flow({ data }: FlowProps) {
  return (
    <>
      {/* Desktop: Horizontal */}
      <div className="hidden md:flex flex-wrap items-center justify-center gap-6">
        {data.steps.map((step, i) => (
          <div key={step} className="flex items-center gap-4">
            <Block title={step} />
            {i < data.steps.length - 1 && <Arrow />}
          </div>
        ))}
      </div>

      {/* Mobile: Vertical */}
      <div className="md:hidden flex flex-col items-center gap-3">
        {data.steps.map((step) => (
          <Block key={step} title={step} />
        ))}
      </div>
    </>
  )
}
