import React, { useCallback } from 'react'
import ReactFlow, {
  Node,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  PanOnScrollMode
} from 'reactflow'

import {
  nodes as initialNodes,
  edges as initialEdges
} from './initial-elements'
import CustomNode from './CustomNode'

import 'reactflow/dist/style.css'
import './overview.scss'
import ParentNodeCard from './ParentNodeCard'
import { ParentNodeData } from './EP_Node_Types'

const nodeTypes = {
  custom: CustomNode,
  epcc_node: ParentNodeCard
}

const minimapStyle = {
  height: 50
}

const overrideNodes: Node[] = [...initialNodes, {
  id: 'parent-node-id',
  type: 'epcc_node',
  selectable: true,
  position: {x: 300, y: 300},
  data: {
    nodeId: 'parent-node-id',
    childNodes: [
      {id: '1'}, {id: '2'}, {id: '3'}
    ]
  }
} as Node<ParentNodeData>]

const onInit = (reactFlowInstance) =>
  console.log('flow loaded:', reactFlowInstance)

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(overrideNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect = useCallback((params) => {
    console.log('on connect', params)
    setEdges((eds) => addEdge(params, eds))
  }, [])

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      //@ts-ignore
      const edgeType = nodes.find((node) => node.type === 'custom')?.data
        .selects[edge.sourceHandle]
      //console.log("decided edge type", edgeType, edge.id);
      edge.type = edgeType
    }
    // console.log("edge", edge);

    return edge
  })

  return (
    <>
      <div className="w-full bg-red-600 border-black border-4 text-center">
        <h1 className="text-yellow-200">PROOF OF CONCEPT FOR REACT FLOW</h1>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edgesWithUpdatedTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        panOnScroll
        selectionOnDrag
        // panOnScrollMode={PanOnScrollMode.Vertical}
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
      >
        <MiniMap style={minimapStyle} zoomable pannable />
        <Controls position="top-left" />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </>
  )
}

export default OverviewFlow
