import React from "react";
import NodeTypeCard from "../UI/NodeTypeCard";
import { RFState } from "../../app/store";
import { shallow } from 'zustand/shallow';
import { useStore } from "zustand";

interface NodeTypeModalsProps {
  setShowModal: (show: boolean) => void
}


const NodeTypeModals: React.FC<NodeTypeModalsProps> = ({ setShowModal }) => {

  return (
    <>
      <div className="fixed top-[10rem] left-0 flex justify-center items-start w-full h-full z-50">
        {/* Black backdrop */}
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={() => {
            setShowModal(false)
          }}
        >


        </div>

        {/* Modal content */}
        <div className="flex justify-center items-start w-[30rem] md:h-[20rem] h-[30rem] relative z-50 rounded-md overflow-hidden md:flex-nowrap flex-wrap md:mx-0 mx-5">
          <div className="bg-white w-full h-full grid md:grid-cols-3 grid-cols-2 p-4 place-items-center">
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
