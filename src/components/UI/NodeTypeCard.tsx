import React from "react";
import useStore from "../../app/store";
interface NodeTypeCardProps {
    children: React.ReactNode;
    nodeType: string;
}
const NodeTypeCard: React.FC<NodeTypeCardProps> = ({ children, nodeType }) => {
    const { addNode, setShowModal } = useStore(state => state)

    const createNode = () => {
        const node = [{
            id: '100',
            type: 'input',
            data: { color: '#4FD1C5' },
            position: { x: 250, y: 25 },
        }]

        addNode(node)
        setShowModal(false)

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
