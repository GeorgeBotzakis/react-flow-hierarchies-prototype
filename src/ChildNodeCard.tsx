import { Handle, Position, getMarkerEnd, MarkerType } from 'reactflow'
import { ChildNodeData } from './CustomNodeTypes'
import { cn } from './helper'
import { useState } from 'react'

export const ChildNodeCard = (props: ChildNodeData) => {
  const [childrenExist, setChildrenExist] = useState(false)

  const { id, selected, onClick } = props

  const handleId = `${props.parentNodeId}-handle-${id}`
  return (
    <div
      className={cn(
        'relative z-200 bg-ep-step-up px-2 cursor-pointer nodrag',
        selected && 'bg-ep-hm-dark text-ep-cloud'
      )}
      role="button"
      onClick={async () => {
        if (onClick) {
          const numOfChildNodes = await onClick(id)
          numOfChildNodes !== -1 && setChildrenExist(!!numOfChildNodes)
        }
      }}
    >
      <span>Child object </span>
      <Handle
        id={handleId}
        type="source"
        position={Position.Right}
        className={cn(
          'z-0 bg-ep-light-grey border-ep-light-grey right-[-3px]',
          !childrenExist && 'invisible',
          selected && 'bg-ep-hm-dark border-ep-hm-dark'
        )}
      />
    </div>
  )
}
