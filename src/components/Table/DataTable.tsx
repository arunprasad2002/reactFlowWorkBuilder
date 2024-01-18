import React from "react";
import useStore from "../../app/store";

const DataTable = () => {
  const { gloabalFileData } = useStore((state) => state);
  const cols = gloabalFileData[0] ? gloabalFileData[0] : [];
  const rows = gloabalFileData[0] ? gloabalFileData.slice(1) : [];

  return (
    <table className="w-screen bg-white shadow-md rounded-xl mx-4">
      <thead>
        <tr className="bg-blue-gray-100 text-gray-700">
          {cols.map((item) => (
            <th className="py-3 px-4 text-left" key={item}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-blue-gray-900">
        {rows.map((rowData, index) => (
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
  );
};

export default DataTable;
