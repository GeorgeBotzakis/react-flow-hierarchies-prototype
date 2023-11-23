export interface ParentNodeData {
  childNodes: { id: string }
}

export interface ChildNodeData {
  parentNodeId: string
}
