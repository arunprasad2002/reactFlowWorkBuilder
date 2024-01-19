import React, { useCallback, useEffect, useMemo, useState } from "react";
import NodeCard from "../UI/NodeCard";
import { Handle, NodeProps, Position } from "reactflow";
import useStore, { NodeData } from "../../app/store";
import { MdClose } from "react-icons/md";

const FilterNode = ({ id }: NodeProps<NodeData>) => {
  const [conditionSelected, setConditionSelected] = useState(false);
  const [selectedConditionValue, setSelectedCoditionValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [selectColIndex, setSelectColIndex] = useState(0);
  const [columns, setColumns] = useState([])
  const {
    deleteNode,
    output,
    setOutPut,
    setNodeState,
    nodeState,
    sourceNodeId,
    removeNodeState
  } = useStore((state) => state);




  const [currentState, setCurrentState] = useState([])


  useEffect(() => {
    setCurrentState(nodeState[sourceNodeId])
  }, [nodeState, sourceNodeId])


  useEffect(() => {
    if (currentState) {
      setColumns(currentState[0])
    } else {
      setColumns([])
    }
  }, [currentState])



  const geneRateOutput = () => {

    const outputData = currentState.filter((row) => {
      const item = row[selectColIndex];

      switch (selectedConditionValue) {
        case "text-includes":
          return item.includes(textValue);
        case "text-is-exactly":
          return item === textValue;
        case "text-is-not-exactly":
          return item !== textValue;
        case "text-does-not-includes":
          return !item.includes(textValue);
        default:
          return true;
      }
    });




    setNodeState(id, outputData)
    setOutPut(outputData)


  };





  return (
    <NodeCard>
      <MdClose
        className="absolute top-2 right-2 opacity-50 hover:opacity-100 text-white"
        onClick={() => {
          deleteNode(id);
          removeNodeState(id)
          console.log(nodeState)
        }}
      />
      <p className="text-white text-md font-semibold text center">Filter</p>
      <select
        name="col"
        id="col"
        className="appearance-none p-1 px-2 text-xs mt-2 bg-transparent border focus:outline-none w-[80%] rounded-full  font-thin mt-2 flex flex-col justify-center items-center "
        onChange={(e) => {
          setSelectColIndex(+e.target.value);
        }}
      >
        <option value="">Select column</option>
        {columns &&
          columns.map((col, index) => {
            return (
              <option key={col} value={index}>
                {col}
              </option>
            );
          })}
      </select>

      {columns && columns.length > 0 && (
        <select
          className="appearance-none p-1 px-2 text-xs mt-2 bg-transparent border focus:outline-none w-[80%] rounded-full  font-thin mt-2 flex flex-col justify-center items-center"
          onChange={(e) => {
            setConditionSelected(true);
            setSelectedCoditionValue(e.target.value);
          }}
        >
          <option value="">select condition</option>
          <option value="text-is-exactly">text is exactly</option>
          <option value="text-is-not-exactly">text is not exactly</option>
          <option value="text-includes">text includes</option>
          <option value="text-does-not-includes">text does not includes</option>
        </select>
      )}

      {conditionSelected && (
        <input
          type="text"
          className="w-[80%] focus:outline-none font-thin placeholder:text-black text-xs p-1 px-2 rounded-full bg-transparent border"
          placeholder="Enter Value"
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />
      )}

      {textValue.trim().length > 0 && (
        <button
          className="w-[80%] bg-white p-1 rounded-full"
          onClick={geneRateOutput}
        >
          Run
        </button>
      )}

      <Handle
        type="target"
        position={Position.Top}
      />
      <Handle
        type="source"
        position={Position.Bottom}
      // onConnect={(params) => console.log(fileData)}
      />
    </NodeCard>

  );
};

export default FilterNode;
