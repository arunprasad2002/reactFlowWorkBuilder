import React, { ReactNode } from "react";

interface NodeCardProps {
  children: ReactNode;
}

const NodeCard: React.FC<NodeCardProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md h-full px-2 py-1 pb-4 w-40 drop-shadow-sm flex flex-col justify-center items-center space-y-2">
      {children}
    </div>
  );
};

export default NodeCard;
