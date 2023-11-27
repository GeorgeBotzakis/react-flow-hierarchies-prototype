import { BaseEdge, EdgeProps, getBezierPath } from 'reactflow'

export const EpCustomEdge = (props: EdgeProps) => {
  const { sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition } =
    props
  const [path, labelX, labelY, offsetX, offsetY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  })

  return <BaseEdge path={path} />
}
