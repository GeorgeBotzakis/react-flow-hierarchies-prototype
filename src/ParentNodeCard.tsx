import React from "react";

function ParentNodeCard({ id, data }) {
  return (
    <>
      <div className="custom-node__header">PARENT NODE: NONE?</div>
      <div className="border rounded w-10">
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
  );
}

export default React.memo(ParentNodeCard);
