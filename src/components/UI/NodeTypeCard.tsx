import React from "react";
import { v4 as uuidv4 } from 'uuid';
import useStore from "../../app/store";
interface NodeTypeCardProps {
    children: React.ReactNode;
    nodeType: string;
}
const NodeTypeCard: React.FC<NodeTypeCardProps> = ({ children, nodeType }) => {
    const { addNode, setShowModal } = useStore(state => state)

    const createNode = () => {

        if (nodeType === 'fileNode') {
            const fileNode = [{ id: uuidv4(), position: { x: 0, y: 0 }, data: { label: '1' }, type: 'fileInput' }]
            addNode(fileNode)
        }

        if (nodeType === 'filter') {
            const filterNode = [{ id: uuidv4(), position: { x: 0, y: 0 }, data: { label: '1' }, type: 'filter' }]
            addNode(filterNode)
        }

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
