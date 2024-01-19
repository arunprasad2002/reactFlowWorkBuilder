import { create } from "zustand";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

import initialNodes from "../constants/nodes";
import initialEdges from "../constants/edges";

export type NodeData = {
  color: string;
};

export type NodeStates = {
  [nodeId: string]: string[]
};

export type RFState = {
  nodes: Node<NodeData>[];
  edges: Edge[];
  output: [],
  showModal: boolean;
  nodeState: NodeStates,
  sourceNodeId: string,
  targetNodeId: string,
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  deleteNode: (nodeId: string) => void;
  setShowModal: (show: boolean) => void;
  addNode: (node: Node[]) => void;
  setOutPut: (data: []) => void;
  setNodeState: (id: string, state: []) => void;
  setSourceNodeId: (nodeId: string) => void
  setTargetNodeId: (nodeId: string) => void
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  showModal: false,
  output: [],
  nodeState: {},
  targetNodeId: '',
  sourceNodeId: '',


  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },

  deleteNode: (nodeId: string) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== nodeId),
    });
  },
  setShowModal: (show: boolean) => {
    set((state) => ({
      showModal: show,
    }));
  },
  addNode: (node: Node[]) => {
    set({
      nodes: get().nodes.concat(node),
    });
  },

  setOutPut: (data: []) => {
    set((state) => ({
      output: data,
    }));
  },

  setNodeState: (id: string, state: string[]) => {
    set((prevState) => ({
      nodeState: {
        ...prevState.nodeState,
        [id]: state,
      },
    }));
  },
  setSourceNodeId: (nodeId: string) => {
    set((state) => ({ sourceNodeId: nodeId }))
  },

  setTargetNodeId: (nodeId: string) => {
    set((state) => ({ targetNodeId: nodeId }))
  }

}));

export default useStore;
