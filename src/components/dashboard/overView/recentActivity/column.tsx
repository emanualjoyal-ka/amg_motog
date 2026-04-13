// import CustomSelect from "@/src/components/CustomSelection"
import { ColumnDef } from "@tanstack/react-table"

export type Request = {
  _id: string
  orderId: string
  fullName: string
  phone: string
  bikeBrand: string
  bikeModel: string
  partName: string
  condition: string
  status: string
  year?: string
   createdAt: string
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
  accessorKey: "createdAt",
  header: "Date",
  cell: ({ row }) => {
    return new Date(row.original.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  },
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
  header: "Status"
}
 
]