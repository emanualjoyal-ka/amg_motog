import { ColumnDef } from "@tanstack/react-table"

export type Request = {
  fullName: string
  phone: string
  totalRequests:string
  firstRequestDate:string
  lastRequestDate:string
}


export const columns: ColumnDef<Request>[] =[
    {
        accessorKey:"fullName",
        header:"Customer"
    },
    {
        accessorKey:"phone",
        header:"Phone"
    },
    {
        accessorKey:"totalRequests",
        header:"Total Requests"
    },
    {
  accessorKey: "firstRequestDate",
  header: "First Request Date",
  cell: ({ row }) => {
    return new Date(row.original.firstRequestDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  },
},
    {
  accessorKey: "lastRequestDate",
  header: "Last Request Date",
  cell: ({ row }) => {
    return new Date(row.original.lastRequestDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  },
},
 
]