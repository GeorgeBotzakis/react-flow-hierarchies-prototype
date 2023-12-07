import { memo } from 'react'
import {
  Position,
  EdgeProps,
  BaseEdge,
  getBezierPath,
  useStore,
  ReactFlowState
} from 'reactflow'

const edgesListener = (state: ReactFlowState) => {
  return state.edges.length
}

function CustomEdge({
  id,
  data,
  source,
  selected,
  sourceX,
  sourceY,
  targetX,
  targetY,
  markerEnd,
  ...props
}: EdgeProps) {
  const b = useStore(edgesListener)
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition: Position.Right,
    targetPosition: Position.Left
  })

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke:
            data.selected === true || selected === true ? '#092A1A' : '#BDC1C7',
          strokeWidth: 1
        }}
        markerEnd={markerEnd}
      />
    </>
  )
}

export default memo(CustomEdge)
