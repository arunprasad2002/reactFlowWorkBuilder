import React from "react";
import ReactFlow, {
  Background,
  MiniMap,
  Controls,
  BackgroundVariant,
} from "reactflow";
import { shallow } from "zustand/shallow";
import "reactflow/dist/style.css";

import useStore from "./app/store";
import ColorChooserNode from "./components/CustomNodes/ColorChooserNode";
import FileInputNode from "./components/CustomNodes/FileInputNode";
import Button from "./components/UI/Button";

const nodeTypes = {
  colorChooser: ColorChooserNode,
  fileInput: FileInputNode,
  filter: FilterNode,
};
import { RFState } from "./app/store";
import NodeTypeModals from "./components/Modal/NodeTypeModals";
import FilterNode from "./components/CustomNodes/FilterNode";
import DataTable from "./components/Table/DataTable";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  showModal: state.showModal,
  setShowModal: state.setShowModal,
  gloabalFileData: state.gloabalFileData,
});

function Flow() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    showModal,
    setShowModal,
    gloabalFileData,
  } = useStore(selector, shallow);

  const modalShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button modalShow={modalShow}>Create Block</Button>
      <div className="w-sreen h-[60vh]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
        {showModal && <NodeTypeModals setShowModal={setShowModal} />}
      </div>
      <DataTable />
    </>
  );
}

export default Flow;
