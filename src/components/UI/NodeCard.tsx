import React, { ReactNode } from "react";

interface NodeCardProps {
    children: ReactNode;
}

const NodeCard: React.FC<NodeCardProps> = ({ children }) => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md h-20 w-40 drop-shadow-sm flex flex-col justify-center items-center">
            {children}
        </div>
    );
};

export default NodeCard;
