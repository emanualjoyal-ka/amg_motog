import { ColumnDef } from "@tanstack/react-table"

export type Request = {
  id: string
  customer: string
  bikeBrand: string
  bikeModel: string
  partName: string
  condition: string
  status: string
  year?: string
}

export const columns: ColumnDef<Request>[] =[
    {
    accessorKey: "userName",
    header: "User Name",
  },
    {
        accessorKey:"email",
        header:"Email"
    },
    {
        accessorKey:"role",
        header:"Role"
    },
 
]