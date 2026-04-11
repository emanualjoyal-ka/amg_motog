"use client"

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
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
import React from "react"
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react"


export function DataTable({ columns, data }: any) {

  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state:{
      globalFilter,
      sorting
    },
    onGlobalFilterChange:setGlobalFilter,
    onSortingChange:setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel:getSortedRowModel()
  })

  return (
     <div className="w-full">
      <input
        placeholder="Search..."
        value={globalFilter ?? ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="mb-4 p-2 rounded-md bg-white/10 border outline-none w-full md:w-xl border-white/20"
      />
    <div className="overflow-hidden rounded-lg border border-white/20 shadow-sm w-full mx-auto">
    <Table className="bg-white/5  w-full">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="border border-white/10 hover:bg-transparent">
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} onClick={header.column.getToggleSortingHandler()} className=" font-semibold px-4 py-6 hover:bg-white/10 transition-colors duration-300">
               <div className="flex gap-3 items-center">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                
                 {header.column.getCanSort() && (
      <>
        {header.column.getIsSorted() === "asc" && (
          <ArrowUp className="w-4 h-4" />
        )}
        {header.column.getIsSorted() === "desc" && (
          <ArrowDown className="w-4 h-4" />
        )}
        {!header.column.getIsSorted() && (
          <ArrowUpDown className="w-4 h-4 opacity-40" />
        )}
      </>
    )}
    </div>
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
    </div>
  )
}