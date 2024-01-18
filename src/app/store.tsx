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

export type RFState = {
  nodes: Node<NodeData>[];
  edges: Edge[];
  showModal: boolean;
  gloabalFileData: [];
  fileData: [];
  output: [];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  updateNodeColor: (nodeId: string, color: string) => void;
  deleteNode: (nodeId: string) => void;
  setShowModal: (show: boolean) => void;
  addNode: (node: Node[]) => void;
  setFileData: (data: any) => void;
  setOutPut: (data: []) => void;
  setGlobalFileData: (data: []) => void;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  showModal: false,
  gloabalFileData: [],
  fileData: [],
  output: [],
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
  updateNodeColor: (nodeId: string, color: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          // it's important to create a new object here, to inform React Flow about the cahnges
          node.data = { ...node.data, color };
        }

        return node;
      }),
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

  setFileData: (data: []) => {
    set((state) => ({
      fileData: data,
    }));
  },
  setOutPut: (data: []) => {
    set((state) => ({
      output: data,
    }));
  },

  setGlobalFileData: (data: []) => {
    set((state) => ({ gloabalFileData: data }));
  },
}));

export default useStore;
