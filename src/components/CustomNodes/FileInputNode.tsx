import { Handle, NodeProps, Position } from "reactflow";
import Papa from "papaparse";
import NodeCard from "../UI/NodeCard";
import { useState, ChangeEvent } from "react";
import { MdClose } from "react-icons/md";
import useStore, { NodeData } from "../../app/store";

const FileInputNode = ({ id }: NodeProps<NodeData>) => {
    const [fileName, setFileName] = useState<string | undefined>();
    const deleteNode = useStore(state => state.deleteNode)

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            Papa.parse(file, {
                complete: (result: any) => {
                    console.log(result);
                },
            });
        }
    };

    return (
        <>
            <NodeCard>
                <label
                    htmlFor="uploadFile1"
                    className="text-white text-sm px-4 py-2.5 outline-none rounded w-max cursor-pointer mx-auto block font-[sans-serif]"
                >
                    <MdClose className="absolute top-2 right-2 opacity-50 hover:opacity-100" onClick={() => {
                        deleteNode(id)
                    }} />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 mr-2 fill-white inline"
                        viewBox="0 0 32 32"
                    >
                        <path
                            d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                            data-original="#000000"
                        />
                        <path
                            d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                            data-original="#000000"
                        />
                    </svg>
                    Upload
                    <input
                        type="file"
                        id="uploadFile1"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    {fileName ? (
                        fileName && <p className="mt-2 text-xs">{fileName}</p>
                    ) : (
                        <p className="text-xs mt-2 text-center">Only CSV File</p>
                    )}
                </label>
                <Handle type="source" position={Position.Bottom} />
            </NodeCard>
        </>
    );
};

export default FileInputNode;
