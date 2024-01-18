import React from 'react'
import NodeCard from '../UI/NodeCard'
import { Handle, NodeProps, Position } from "reactflow";
import useStore, { NodeData } from '../../app/store'
import { MdClose } from 'react-icons/md';


const FilterNode = ({ id }: NodeProps<NodeData>) => {
    const { deleteNode, fileData } = useStore(state => state)
    const columns = false
    return (
        <NodeCard>
            <MdClose className="absolute top-2 right-2 opacity-50 hover:opacity-100" onClick={() => {
                deleteNode(id)
            }} />
            <p className='text-white absolute top-2 left-2 text-xs font-bold'>Filter</p>
            <select name="col" id="col" className='text-xs mt-2 bg-transparent border focus:outline-none w-[60%] rounded-full  font-thin'>
                <option value="">Select column</option>
            </select>

            {
                columns && (
                    <select className="text-xs mt-2 bg-transparent border focus:outline-none w-[60%] rounded-full  font-thin border-1 focus-within:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <option value="">select condition</option>
                        <option value="5">text is exactly</option>
                        <option value="6">text is not exactly</option>
                        <option value="7">text includes</option>
                        <option value="8">text does not includes</option>
                        <option value="notnull">data is not empty or null</option>
                        <option value="regex">data matches regex</option>
                    </select>

                )
            }

            <Handle type="target" position={Position.Top} onConnect={(params) => console.log(fileData)} />
            <Handle type="source" position={Position.Bottom} onConnect={(params) => console.log(fileData)} />
        </NodeCard>
    )
}

export default FilterNode
