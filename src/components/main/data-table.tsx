"use client"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function DataTable({ columns, data }: any) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-hidden rounded-2xl border border-white/20 shadow-sm w-full mx-auto">
    <Table className="bg-white/5  w-full">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="border border-white/10 hover:bg-transparent">
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} className=" font-semibold px-4 py-6 hover:bg-white/10 transition-colors duration-300">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} className="hover:bg-white/5 transition-colors duration-300 rounded-md">
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className="p-4 border-b border-white/10">
                {flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext()
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}