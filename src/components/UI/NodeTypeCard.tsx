import React from "react";
interface NodeTypeCardProps {
    children: React.ReactNode;
    nodeType: string;
}
const NodeTypeCard: React.FC<NodeTypeCardProps> = ({ children, nodeType }) => {
    const createNode = () => {

    };

    return (
        <div
            className="bg-wite w-[8rem] h-[8rem] border rounded-md drop-shadow-sm p-3 hover:cursor-pointer"
            onClick={createNode}
        >
            {children}
        </div>
    );
};

export default NodeTypeCard;
