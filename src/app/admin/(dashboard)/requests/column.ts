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
    accessorKey: "orderId",
    header: "Order ID",
  },
    {
        accessorKey:"fullName",
        header:"Customer"
    },
    {
        accessorKey:"phone",
        header:"Phone"
    },
  {
    header: "Bike", // combine brand + model
    accessorKey: "bikeBrand", // can be anything, just needed for typing
    cell: ({ row }) => {
      const bikeBrand = row.original.bikeBrand
      const bikeModel = row.original.bikeModel
      const year = row.original.year || "";
      return `${bikeBrand} ${bikeModel} ${year}` // combine
    },
  },
  {
    accessorKey: "partName",
    header: "Part",
  },
  {
    accessorKey: "condition",
    header: "Condition",
  },
  {
    accessorKey: "status",
    header: "Status",
  }
 
]