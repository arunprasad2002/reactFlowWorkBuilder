import ReactFlow, {
  Background,
  MiniMap,
  Controls,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";

import useStore from "./app/store";
import FileInputNode from "./components/CustomNodes/FileInputNode";
import Button from "./components/UI/Button";

const nodeTypes = {
  fileInput: FileInputNode,
  filter: FilterNode,
};
import NodeTypeModals from "./components/Modal/NodeTypeModals";
import FilterNode from "./components/CustomNodes/FilterNode";
import DataTable from "./components/Table/DataTable";



function Flow() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    showModal,
    setShowModal,
    nodeState,
    setSourceNodeId,
    setTargetNodeId,
    setOutPut
  } = useStore((state) => state);

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
          onConnect={(connection) => {
            onConnect(connection)
            setSourceNodeId(connection.source)
            setTargetNodeId(connection.target)
          }}
          nodeTypes={nodeTypes}
          fitView
          onNodeClick={(event, node) => {
            const current = nodeState[node.id]
            if (current) {
              setOutPut(current)
            }
          }}

          onEdgeUpdate={(old, newConn) => {
            console.log(old, newConn)
          }}
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
