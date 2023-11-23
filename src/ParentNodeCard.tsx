import React, { useEffect, useState } from 'react'
import { Node, NodeProps } from 'reactflow'
import { ChildNodeCard } from './ChildNodeCard'

const fakeData = [
  {
    name: 'Test 1'
  },
  {
    name: 'Test 2'
  }
]

function createFakeData(num: number) {
  const arr: Node[] = []
  for (let i = 0; i < num; i++) {
    const data = { label: `Test node ${i + 1}` }
    const position = { x: 100, y: i * 20 }
    const node: Node = {
      id: `test-parent-node-${i}}`,
      // style: { width: 50, fontSize: 11 },
      className: 'w-10 text-sm',
      data,
      position
    }
    arr.push(node)
  }
  return arr
}
function ParentNodeCard({ id, data }: NodeProps) {
  const [childNodes, setChildNodes] = useState(
    data.childNodes ? data.childNodes : []
  )
  useEffect(() => {
    // createFakeData(10)
  }, [])
  return (
    <>
      <div className="custom-node__header">PARENT NODE: NONE?</div>
      <div className="border rounded w-10">
        {childNodes.map((el) => {
          ;<ChildNodeCard data={{ parentNodeId: data.nodeId }} />
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
