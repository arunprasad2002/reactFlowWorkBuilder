import React, { useState } from "react";
import NodeCard from "../UI/NodeCard";
import { Handle, NodeProps, Position } from "reactflow";
import useStore, { NodeData } from "../../app/store";
import { MdClose } from "react-icons/md";

const FilterNode = ({ id }: NodeProps<NodeData>) => {
  const [conditionSelected, setConditionSelected] = useState(false);
  const [selectedConditionValue, setSelectedCoditionValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [selectColIndex, setSelectColIndex] = useState(0);
  const { deleteNode, fileData, output, setOutPut } = useStore(
    (state) => state
  );

  console.log(output);

  const geneRateOutput = () => {
    const entireCol = fileData.slice(1).map((row) => row[selectColIndex]);
    if (selectedConditionValue === "text-includes") {
      const result = entireCol.filter((item) => item.includes(textValue));
      setOutPut(result);
    }

    if (selectedConditionValue === "text-is-exactly") {
      const result = entireCol.filter((item) => item === textValue);
      setOutPut(result);
    }

    if (selectedConditionValue === "text-is-not-exactly") {
      const result = entireCol.filter((item) => item !== textValue);
      setOutPut(result);
    }

    if (selectedConditionValue === "text-does-not-includes") {
      const result = entireCol.filter((item) => !item.includes(textValue));
      setOutPut(result);
    }
  };

  // @ts-ignore
  const columns = fileData ? fileData[0] : [];
  return (
    <NodeCard>
      <MdClose
        className="absolute top-2 right-2 opacity-50 hover:opacity-100 text-white"
        onClick={() => {
          deleteNode(id);
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

      {columns && (
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
        onConnect={(params) => console.log(fileData)}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        onConnect={(params) => console.log(fileData)}
      />
    </NodeCard>
  );
};

export default FilterNode;
