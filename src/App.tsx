import React from 'react';
import ReactFlow from 'reactflow';
import { shallow } from 'zustand/shallow';

import 'reactflow/dist/style.css';

import useStore from './app/store';
import ColorChooserNode from './components/CustomNodes/ColorChooserNode';

const nodeTypes = { colorChooser: ColorChooserNode };

const selector = (state: any) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(selector, shallow);

  return (
    <div className='w-sreen h-screen'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}

export default Flow;
