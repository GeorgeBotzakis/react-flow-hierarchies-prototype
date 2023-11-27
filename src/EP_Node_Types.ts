export interface ParentNodeData {
  childNodes:  Array<{ id: string }>
  nodeId: string
}

export interface ChildNodeData {
  id: string
  selected?: boolean

  parentNodeId: string
}
