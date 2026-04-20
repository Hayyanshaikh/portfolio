import React from "react";

export interface ColumnDef<T> {
  key: string;
  header: string;
  headerClassName?: string;
  cellClassName?: string;
  render?: (row: T, index: number) => React.ReactNode;
}

export interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
}

export default function DataTable<T>({ columns, data }: DataTableProps<T>) {
  return (
    <div className="w-full overflow-hidden bg-white/5 border border-white/5">
      <div className="max-h-[calc(100vh-261px)] overflow-y-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-[#131313] z-10">
            <tr className="border-b border-white/5 text-[10px] font-bold uppercase tracking-widest text-muted">
              {columns.map((col, index) => (
                <th
                  key={col.key || index}
                  className={`px-6 py-3 font-normal ${col.headerClassName || ""}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-8 text-center text-sm text-muted"
                >
                  No records found.
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="group hover:bg-white/5 transition-colors"
                >
                  {columns.map((col, colIndex) => (
                    <td
                      key={col.key || colIndex}
                      className={`px-6 py-2 ${col.cellClassName || ""}`}
                    >
                      {col.render
                        ? col.render(row, rowIndex)
                        : (row as any)[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
