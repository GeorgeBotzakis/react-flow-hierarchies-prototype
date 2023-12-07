import React, { useCallback, useEffect, useState } from 'react'
import {
  Handle,
  Node,
  NodeProps,
  Position,
  useReactFlow,
  Edge,
  MarkerType,
  useUpdateNodeInternals
} from 'reactflow'
import { ChildNodeCard } from './ChildNodeCard'
import {
  EpNodeData,
  ParentNodeData,
  PartialParentNode
} from './CustomNodeTypes'
import { cn } from './helper'
import { v4 as uuidv4 } from 'uuid'

function ParentNodeCard({
  id,
  data,
  selected,
  xPos,
  yPos
}: NodeProps<ParentNodeData>) {
  const reactFlow = useReactFlow()
  const updateNodeInternals = useUpdateNodeInternals()

  const [childNodes, setChildNodes] = useState(
    data.childNodes ? data.childNodes : []
  )
  const [selectedChildNode, setSelectedChildNode] =
    useState<(typeof childNodes)[number]>(undefined)

  useEffect(() => {
    if (data.selectedChildNode !== undefined) {
      setSelectedChildNode(data.selectedChildNode)
    }
  }, [data.selectedChildNode])

  useEffect(() => {
    if (selected) {
      highlightEdges(undefined, id)
    }
  }, [selected])

  const addChildNode = useCallback(
    async (childNodeId: string, meta: any, ogId?: string) => {
      //1.  api call to selected node's children§
      //2. layouting algorithm to handle exact position
      const childrenLength = Math.ceil(Math.random() * 25)
      const childrenNodes = new Array(childrenLength)
        .fill(undefined)
        .map((el) => ({ id: uuidv4() }) as PartialParentNode)
      const newNode: Node<ParentNodeData>[] = [
        {
          type: 'epcc_node',
          position: { x: xPos + 300, y: yPos + 10 },
          id: childNodeId,
          data: { nodeId: childNodeId, childNodes: childrenNodes }
        }
      ]
      const newEdge: Edge[] = [
        {
          id: `${id}-${childNodeId}`,
          data: { selected: true },
          type: 'custom-edge',
          target: childNodeId,
          source: id,
          sourceHandle: meta.sourceHandleId,
          zIndex: 10000,
          markerEnd: {
            type: MarkerType.Arrow,
            width: 20,
            height: 20,
            color: '#092A1A'
          }
        }
      ]

      reactFlow.addNodes(newNode)
      reactFlow.setEdges((edg) => [
        ...edg.map((el) => {
          if (el.type === 'custom-edge') {
            return {
              ...el,
              data: { selected: false },
              markerEnd: {
                //@ts-ignore
                ...el.markerEnd,
                color: '#BDC1C7'
              }
            }
          }
          return el
        }),
        ...newEdge
      ])
      return newNode.length ?? 0
    },
    [reactFlow]
  )

  const updateSourceNodeState = (sourceHandle, sourceId) => {
    const sourceHandleId = sourceHandle.split('handle-')
    const sourceNode: Node<ParentNodeData> = reactFlow.getNode(sourceId)
    const childObjectIndex = sourceNode.data.childNodes.findIndex(
      (er) => er.id == sourceHandleId[1]
    )
    // update node
    reactFlow.setNodes((oldNodes) =>
      oldNodes.map((el) => {
        if (el.id === sourceId && el.type === 'epcc_node') {
          return {
            ...el,
            data: {
              ...el.data,
              selectedChildNode: el.data.childNodes[childObjectIndex]
            }
          }
        }
        return el
      })
    )
  }

  const highlightEdges = useCallback(
    (sourceHandle?: string, target?: string) => {
      const edgesToUpdate = reactFlow.getEdges().map((el) => {
        if (target) {
          if (el.type === 'custom-edge') {
            if (el.target === target) {
              el.data.selected = true
              //@ts-ignore
              el.markerEnd.color = '#092A1A'
              // extract child object id from source handle id
              updateSourceNodeState(el.sourceHandle, el.source)
              // return el
              return {
                ...el,
                markerEnd: {
                  //@ts-ignore
                  ...el.markerEnd
                }
              }
            } else {
              return {
                ...el,
                data: { selected: false },
                markerEnd: {
                  //@ts-ignore
                  ...el.markerEnd,
                  color: '#BDC1C7'
                }
              }
            }
          }
        }
        if (sourceHandle) {
          if (el.type === 'custom-edge') {
            if (el.sourceHandle === sourceHandle) {
              el.data.selected = true
              //@ts-ignore
              el.markerEnd.color = '#092A1A'
              return {
                ...el,
                data: { selected: true },
                markerEnd: {
                  //@ts-ignore
                  ...el.markerEnd,
                  color: '#092A1A'
                }
              }
            } else {
              //@ts-ignore
              return {
                ...el,
                data: { selected: false },
                markerEnd: {
                  //@ts-ignore
                  ...el.markerEnd,
                  color: '#BDC1C7'
                }
              }
            }
          }
        }
        return el
      })

      reactFlow.setEdges(edgesToUpdate)
    },
    [reactFlow, setSelectedChildNode]
  )

  const onScrollCallback = useCallback(() => {
    updateNodeInternals(id)
  }, [id, updateNodeInternals])

  const onChildNodeCardClick = async (id: string, el: EpNodeData) => {
    const newId = id
    let childNodeNum = -1
    if (reactFlow.getNode(newId) == null)
      childNodeNum = await addChildNode(newId, {
        sourceHandleId: `${data.nodeId}-handle-${id}`
      })
    else {
      highlightEdges(`${data.nodeId}-handle-${id}`)
    }
    //@ts-ignore
    setSelectedChildNode(el)

    return childNodeNum
  }

  return (
    <div
      className={cn(
        `bg-ep-cloud rounded text-ep-dark-grey nowheel`,
        selected && 'shadow-nodeCard text-ep-darker-grey'
      )}
    >
      <div className="custom-node__header">
        PARENT NODE: {id.slice(0, 15)}
        {id.length > 15 ? '...' : ''}
      </div>
      <Handle
        id={`${id}-target`}
        type="target"
        position={Position.Left}
        className="invisible left-0"
      />
      <Handle type="source" position={Position.Right} className="invisible" />
      <div
        className="flex flex-col items-center gap-1.5 py-1.5 bg-neutral-100 max-h-[110px] overflow-scroll"
        onClick={(e) => e.stopPropagation()}
        onScroll={onScrollCallback}
      >
        {childNodes.map((el, i) => {
          const isSelected = selectedChildNode?.id === el.id ?? false
          return (
            <ChildNodeCard
              key={el.id}
              id={el.id}
              parentNodeId={data.nodeId}
              selected={isSelected}
              onClick={(id) => onChildNodeCardClick(id, el)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(ParentNodeCard)
