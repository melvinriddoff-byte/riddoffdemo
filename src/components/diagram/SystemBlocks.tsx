import { Block } from './Block'
import type { SystemBlocksData } from './types'

interface SystemBlocksProps {
  data: SystemBlocksData
}

export function SystemBlocks({ data }: SystemBlocksProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Core */}
      <div className="flex justify-center mb-8">
        <Block title={data.core} highlighted />
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {data.modules.map((module) => (
          <Block key={module} title={module} />
        ))}
      </div>
    </div>
  )
}
