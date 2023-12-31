import { Node } from 'reactflow'

/// Example edges and nodes

export const nodes: Node[] = [
  // {
  //   id: '1',
  //   type: 'input',
  //   data: {
  //     label: 'Input Node'
  //   },
  //   position: { x: 250, y: 0 }
  // },
  // {
  //   id: '2',
  //   data: {
  //     label: 'Default Node'
  //   },
  //   position: { x: 100, y: 100 }
  // },
  // {
  //   id: '3',
  //   type: 'output',
  //   data: {
  //     label: 'Output Node'
  //   },
  //   position: { x: 400, y: 100 }
  // },
  // {
  //   id: '4',
  //   type: 'custom',
  //   selectable: true,
  //   position: { x: 100, y: 200 },
  //   className:
  //     '[&:not(.selected)]:bg-yellow-500 [.selected&]:bg-red-500 [.selected&]:text-black',
  //   data: {
  //     selects: {
  //       'handle-0': 'smoothstep',
  //       'handle-1': 'default'
  //     }
  //   }
  // },
  // {
  //   id: '5',
  //   type: 'output',
  //   data: {
  //     label: 'custom style'
  //   },
  //   className: 'circle bg-red-500',
  //   // style: {
  //   //   background: "#2B6CB0",
  //   //   color: "white",
  //   // },
  //   position: { x: 400, y: 200 },
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left
  // },
  // {
  //   id: '6',
  //   type: 'output',
  //   style: {
  //     background: '#63B3ED',
  //     color: 'white',
  //     width: 100
  //   },
  //   data: {
  //     label: 'Node'
  //   },
  //   position: { x: 400, y: 325 },
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left
  // },
  // {
  //   id: '7',
  //   type: 'default',
  //   className: 'annotation',
  //   data: {
  //     label: (
  //       <>
  //         On the bottom left you see the <strong>Controls</strong> and the
  //         bottom right the <strong>MiniMap</strong>. This is also just a node 🥳
  //       </>
  //     )
  //   },
  //   draggable: false,
  //   selectable: false,
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left,
  //   position: { x: 150, y: 400 }
  // },
  // {
  //   id: '8',
  //   type: 'default',
  //   className: 'bg-red-500',
  //   data: {
  //     label: (
  //       <>
  //         <strong>TEST NODE</strong>
  //       </>
  //     )
  //   },
  //   position: { x: -100, y: 200 }
  // }
]

export const edges = [
  // { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  // { id: 'e1-3', source: '1', target: '3', animated: true },
  // {
  //   id: 'e4-5',
  //   source: '4',
  //   target: '5',
  //   type: 'smoothstep',
  //   sourceHandle: 'handle-0',
  //   // style: {stroke: '#092A1A'},
  //   className: '[.selected&]:stroke-red-500',
  //   data: {
  //     selectIndex: 0
  //   },
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed
  //   }
  // },
  // {
  //   id: 'e4-6',
  //   source: '4',
  //   target: '6',
  //   type: 'smoothstep',
  //   sourceHandle: 'handle-1',
  //   data: {
  //     selectIndex: 1
  //   },
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed
  //   }
  // },
  // {
  //   id: 'e5-5',
  //   source: '4',
  //   target: '8',
  //   type: 'smoothstep',
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed
  //   }
  // }
]
