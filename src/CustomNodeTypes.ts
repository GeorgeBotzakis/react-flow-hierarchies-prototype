import { Node } from "reactflow"


export interface EpNodeData {
  id: string
}
export interface PartialParentNode extends Pick<Node<ParentNodeData>, 'id' | 'data'> {}

export interface ParentNodeData {
  childNodes:  Array<PartialParentNode>
  nodeId: string
  selectedChildNode?: PartialParentNode
}

export interface ChildNodeData {
  id: string
  selected?: boolean
  parentNodeId: string
  onClick?: (id: string) => Promise<number>
}
