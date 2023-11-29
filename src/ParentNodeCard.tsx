import React, { useEffect, useState } from 'react'
import { Node, NodeProps } from 'reactflow'
import { ChildNodeCard } from './ChildNodeCard'
import { ParentNodeData } from './EP_Node_Types'

function ParentNodeCard({ id, data, selected }: NodeProps<ParentNodeData>) {
  const [childNodes, setChildNodes] = useState(
    data.childNodes ? data.childNodes : []
  )
  useEffect(() => {
    // createFakeData(10)
    console.log('props', id, data)
  }, [])
  return (
    <div className={`bg-green-500 border rounded border-red-500 ${selected ? 'bg-blue-500': ''}`}>
      <div className="custom-node__header">PARENT NODE: {id}</div>
      <div className="border rounded">
        {childNodes.map((el) => {
          return (
            <ChildNodeCard key={el.id} id={el.id} parentNodeId={data.nodeId} />
          )
        })}
        {/* {Object.keys(data.selects).map((handleId) => (
          <Select
            key={handleId}
            nodeId={id}
            value={data.selects[handleId]}
            handleId={handleId}
          />
        ))} */}
      </div>
    </div>
  )
}

export default React.memo(ParentNodeCard)
