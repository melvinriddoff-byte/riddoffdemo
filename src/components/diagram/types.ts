// Diagram Type Definitions

export type DiagramType =
  | 'system_blocks'
  | 'flow'
  | 'layer_stack'
  | 'decision_loop'
  | 'mapping'

export interface DiagramConfig {
  id: string
  type: DiagramType
  title?: string
  description?: string
  data: SystemBlocksData | FlowData | LayerStackData | DecisionLoopData | MappingData
}

export interface SystemBlocksData {
  core: string
  modules: string[]
}

export interface FlowData {
  steps: string[]
}

export interface LayerStackData {
  layers: string[]
}

export interface DecisionLoopData {
  inputs: string[]
  engine: string
  outputs: string[]
}

export interface MappingData {
  workflow: string[]
  systems: Record<string, string[]>
}
