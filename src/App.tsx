import ELK from 'elkjs/lib/elk.bundled.js'
import React, { useCallback, useEffect, useMemo } from 'react'
import ReactFlow, {
  Node,
  addEdge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Edge,
  EdgeMarker,
  Panel,
  useReactFlow,
  ReactFlowProvider
} from 'reactflow'

import CustomNode from './CustomNode'
import 'reactflow/dist/style.css'
import './overview.scss'
import ParentNodeCard from './ParentNodeCard'
import CustomEdge from './CustomEdge'
import { ParentNodeData } from './CustomNodeTypes'
import { v4 as uuidv4 } from 'uuid'

const nodeTypes = {
  custom: CustomNode,
  epcc_node: ParentNodeCard
}

const edgeTypes = {
  'custom-edge': CustomEdge
}

const connectionLineStyle = { stroke: '#BDC1C7', strokeWidth: 3 }

const initialNode: Node[] = [
  {
    id: 'parent-node-id-1',
    type: 'epcc_node',
    selectable: true,
    position: { x: 0, y: 0 },
    data: {
      nodeId: 'parent-node-id-1',
      childNodes: [
        { id: uuidv4() },
        { id: uuidv4() },
        { id: uuidv4() },
        { id: uuidv4() }
      ],
      selectedChildNode: undefined
    }
  } as Node<ParentNodeData>
]

// Layouting
const elk = new ELK()

export const useLayoutedElements = () => {
  const { getNodes, setNodes, getEdges, fitView } = useReactFlow()
  const defaultOptions = {
    'elk.algorithm': 'layered',
    'elk.layered.spacing.nodeNodeBetweenLayers': 30,
    'elk.spacing.nodeNode': 80
  }

  const getLayoutedElements = useCallback(
    (options, newNodes?: any[], newEdges?: any[]) => {
      const layoutOptions = { ...defaultOptions, ...options }
      const graph = {
        id: 'root',
        layoutOptions: layoutOptions,
        children: newNodes && newNodes.length ? newNodes : getNodes(),
        edges: newEdges && newEdges.length ? newEdges : getEdges()
      } as any

      elk.layout(graph).then(({ children }) => {
        // By mutating the children in-place we saves ourselves from creating a
        // needless copy of the nodes array.
        children.forEach((node: any) => {
          node.position = { x: node.x, y: node.y }
        })
        setNodes(children.reverse() as Node[])
        window.requestAnimationFrame(() => {
          fitView()
        })
      })
    },
    []
  )

  return { getLayoutedElements }
}

const onInit = (reactFlowInstance) =>
  console.log('flow loaded:', reactFlowInstance, initialNode)

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNode)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const onConnect = useCallback((params) => {
    console.log('on connect', params)
    setEdges((eds) => addEdge(params, eds))
  }, [])
  const { getLayoutedElements } = useLayoutedElements()

  useEffect(() => {
    console.log('new nodes and edges', edges, nodes)
  }, [nodes.length, edges.length])

  const onEdgeClick = useCallback(
    (event: React.MouseEvent, edge: Edge) => {
      if (edge.type !== 'custom-edge') return
      setEdges((edges) => {
        return edges.map((el) => {
          if (el.type !== 'custom-edge') return el
          if (el.id === edge.id) {
            return {
              ...el,
              data: { selected: true },
              markerEnd: {
                ...(el.markerEnd as EdgeMarker),
                color: '#092A1A'
              }
            }
          } else {
            return {
              ...el,
              data: { selected: false },
              markerEnd: {
                ...(el.markerEnd as EdgeMarker),
                color: '#BDC1C7'
              }
            }
          }
        })
      })
    },
    [setEdges]
  )

  return (
    <div className="w-full h-full">
      <div className="w-full bg-ep-commerce-light border-black border-2 text-center">
        <h1 className="text-ep-foundation">PROOF OF CONCEPT - REACT FLOW</h1>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onEdgeClick={onEdgeClick}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        panOnScroll
        selectionOnDrag
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        connectionLineStyle={connectionLineStyle}
      >
        <Controls position="top-left" />
        <Background className="bg-ep-lighter-grey" gap={16} />
        <Panel position="top-right">
          <button
            className="bg-ep-off-white border border-ep-foundation p-1 hover:bg-ep-commerce-step-up"
            onClick={(e) =>
              getLayoutedElements({
                'elk.algorithm': 'layered',
                'elk.direction': 'RIGHT'
              })
            }
          >
            Horizontal Layout
          </button>
        </Panel>
      </ReactFlow>
    </div>
  )
}

export default function a() {
  return (
    <ReactFlowProvider>
      <OverviewFlow />
    </ReactFlowProvider>
  )
}
