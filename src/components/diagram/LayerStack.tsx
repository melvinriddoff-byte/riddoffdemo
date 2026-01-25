import { Block } from './Block'
import type { LayerStackData } from './types'

interface LayerStackProps {
  data: LayerStackData
}

export function LayerStack({ data }: LayerStackProps) {
  return (
    <div className="space-y-3 max-w-2xl mx-auto">
      {data.layers.map((layer) => (
        <div
          key={layer}
          className="w-full rounded-lg border border-border bg-background px-6 py-4 text-center"
        >
          <span className="text-sm font-medium text-primary">{layer}</span>
        </div>
      ))}
    </div>
  )
}
