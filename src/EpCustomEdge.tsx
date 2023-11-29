import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from 'reactflow'


const onEdgeClick = (evt, id) => {
  evt.stopPropagation();
  alert(`remove ${id}`);
};

export const EpCustomEdge = (props: EdgeProps) => {
  const { id, sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition } =
    props
  const [path, labelX, labelY, offsetX, offsetY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  })

  
  return (<>
  <BaseEdge path={path} />
  <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: 'all',
          }}
          className="nodrag nopan"
        >
          <button className="edgebutton" onClick={(event) => onEdgeClick(event, id)}>
            ×
          </button>
        </div>
      </EdgeLabelRenderer>
  </>)
}
