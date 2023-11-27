import React, { useEffect, useState } from 'react'
import { Node, NodeProps } from 'reactflow'
import { ChildNodeCard } from './ChildNodeCard'
import { ParentNodeData } from './EP_Node_Types'

function ParentNodeCard({ id, data }: NodeProps<ParentNodeData>) {
  const [childNodes, setChildNodes] = useState(
    data.childNodes ? data.childNodes : []
  )
  useEffect(() => {
    // createFakeData(10)
    console.log('props', id, data)
  }, [])
  return (
    <>
      <div className="custom-node__header">PARENT NODE: NONE?</div>
      <div className="border rounded w-10">
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
    </>
  )
}

export default React.memo(ParentNodeCard)
