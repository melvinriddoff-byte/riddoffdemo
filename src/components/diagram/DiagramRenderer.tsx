'use client'

import { DiagramContainer } from './DiagramContainer'
import { Flow } from './Flow'
import { LayerStack } from './LayerStack'
import { DecisionLoop } from './DecisionLoop'
import { SystemBlocks } from './SystemBlocks'
import { Mapping } from './Mapping'
import type { 
  DiagramConfig, 
  FlowData, 
  LayerStackData, 
  DecisionLoopData, 
  SystemBlocksData,
  MappingData 
} from './types'

interface DiagramRendererProps {
  config: DiagramConfig
}

export function DiagramRenderer({ config }: DiagramRendererProps) {
  return (
    <DiagramContainer
      title={config.title}
      description={config.description}
    >
      {config.type === 'flow' && (
        <Flow data={config.data as FlowData} />
      )}

      {config.type === 'layer_stack' && (
        <LayerStack data={config.data as LayerStackData} />
      )}

      {config.type === 'decision_loop' && (
        <DecisionLoop data={config.data as DecisionLoopData} />
      )}

      {config.type === 'system_blocks' && (
        <SystemBlocks data={config.data as SystemBlocksData} />
      )}

      {config.type === 'mapping' && (
        <Mapping data={config.data as MappingData} />
      )}
    </DiagramContainer>
  )
}
