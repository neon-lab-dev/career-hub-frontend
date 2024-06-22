import { DataItem, Header } from "@/app/(employee)/applications/page";
import React from "react";

type TableProps = {
  headers: Header[];
  data: DataItem[];
  renderCustomCell?: (column: Header, item: DataItem) => React.ReactNode;
};

const Table: React.FC<TableProps> = ({ headers, data, renderCustomCell }) => {
  return (
    <div className="overflow-x-auto">
      <div className="w-full max-w-[1153px] mx-auto overflow-x-auto rounded-[14px]">
        <table className="table w-full">
          <thead className="bg-secondary-100 w-full text-secondary-800 font-plus-jakarta-sans font-500">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={
                    index === 0
                      ? "rounded-tl-[14px]"
                      : index === headers.length - 1
                      ? "rounded-tr-[14px]"
                      : ""
                  }
                >
                  {header.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white w-full">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="w-full text-neutral-600 font-500 font-plus-jakarta-sans border-t-secondary-100"
              >
                {headers.map((header, cellIndex) => (
                  <td key={cellIndex}>
                    {renderCustomCell ? renderCustomCell(header, row) : row[header.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
