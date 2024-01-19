import React, { useEffect, useState } from "react";
import useStore from "../../app/store";

const DataTable = () => {
  const { output } = useStore((state) => state);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [heading, setHeading] = useState([])
  const [table, setTable] = useState([])


  useEffect(() => {
    const heading = output[0] ? output[0] : []
    setHeading(heading)
    setTable(output.slice(1))
  }, [output])

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <button onClick={handleCollapseToggle}>
        {isCollapsed ? "Expand" : "Collapse"}
      </button>
      {!isCollapsed && (
        <table className="w-screen bg-white shadow-md rounded-xl mx-4">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              {heading.map((item) => (
                <th className="py-3 px-4 text-left" key={item}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {table.map((rowData, index) => (
              <tr key={index} className="border-b border-blue-gray-200">
                {rowData.map((data, dataIndex) => (
                  <td key={dataIndex} className="py-3 px-4">
                    {data}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default DataTable;
