import { NodeProps } from "reactflow";
import { ChildNodeData } from "./EP_Node_Types";

export const ChildNodeCard = (props: ChildNodeData) => {
  //todo figure out how to pass in data
  // create custom edge
  // and create way to append new parent node next to current parent node
  //  by click on child node (this comp)

  const { id, selected } = props;

  return (
    <div className="w-10 h-20 bg-red-500">
      <a>LINK</a>
    </div>
  );
};
