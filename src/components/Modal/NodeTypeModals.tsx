import React from "react";
import NodeTypeCard from "../UI/NodeTypeCard";

interface NodeTypeModalsProps { }

const NodeTypeModals: React.FC<NodeTypeModalsProps> = () => {
  return (
    <>
      <div className="fixed top-[10rem] left-0 flex justify-center items-start w-full h-full z-50">
        {/* Black backdrop */}
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
        ></div>

        {/* Modal content */}
        <div className="flex justify-center items-start w-[30rem] h-[20rem] relative z-50 rounded-md overflow-hidden">
          <div className="bg-white w-full h-full grid grid-cols-3 p-4">
            <NodeTypeCard nodeType={"fileNode"}>
              <h2 className="text-lg font-bold">File</h2>
              <p className="text-xs mt-5">You can upload CSV Files</p>
            </NodeTypeCard>
            <NodeTypeCard nodeType="filter">
              <h2 className="text-lg font-bold">Filter</h2>
              <p className="text-xs mt-5">You can filter your data</p>
            </NodeTypeCard>
            <NodeTypeCard nodeType="map">
              <h2 className="text-lg font-bold">Map</h2>
              <p className="text-xs mt-5">You can transform your data</p>
            </NodeTypeCard>
            <NodeTypeCard nodeType="find">
              <h2 className="text-lg font-bold">Find</h2>
              <p className="text-xs mt-5">
                You can find a specific data from your dataset
              </p>
            </NodeTypeCard>
            <NodeTypeCard nodeType="reduce">
              <h2 className="text-lg font-bold">Reduce</h2>
              <p className="text-xs mt-5">
                You can reduce your dataset to one value
              </p>
            </NodeTypeCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default NodeTypeModals;
