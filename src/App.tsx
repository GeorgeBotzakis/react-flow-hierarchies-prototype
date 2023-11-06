import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";
import CustomNode from "./CustomNode";

import "reactflow/dist/style.css";
import "./overview.css";

const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 50,
};

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const OverviewFlow = () => {
  //  eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    console.log("aaaa", edge.data);
    if (edge.sourceHandle) {
      //@ts-ignore
      const edgeType = nodes.find((node) => node.type === "custom").data
        .selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  return (
    <>
      <div className="w-full bg-red-500 border border-red-600 text-center">
        <h1>PROOF OF CONCEPT FOR REACT FLOW</h1>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edgesWithUpdatedTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        // fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
      >
        <MiniMap style={minimapStyle} zoomable pannable />
        <Controls position="top-left" />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </>
  );
};

export default OverviewFlow;
