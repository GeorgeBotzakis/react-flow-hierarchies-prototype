import { Node, NodeProps } from 'reactflow'

export function createFakeData(num: number) {
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
