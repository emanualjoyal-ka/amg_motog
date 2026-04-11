// import CustomSelect from "@/src/components/CustomSelection"
import { useDeleteRequest } from "@/src/controllers/requestController"
import { ColumnDef } from "@tanstack/react-table"
import { Info, SquarePen, Trash } from "lucide-react"

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
}

const STATUS_OPTIONS = [
  "Request Received",
  "Searching Part",
  "Price Confirmed",
  "Part Purchased",
  "Packed",
  "Shipped",
  "Delivered",
]

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
  enableSorting: false,
  cell: ({ row }) => {
    const request = row.original
    // const { mutate: updateStatus } = useUpdateRequestStatus()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newStatus = e.target.value
      // updateStatus({
      //   id: request._id,
      //   status: newStatus,
      // })
    }

    return (
      <p>{request.status}</p>
      // <CustomSelect
      //   value={request.status}
      //   options={STATUS_OPTIONS}
      //   // onSelect={(value) =>
      //   //   updateStatus({
      //   //     id: request._id,
      //   //     status: value,
      //   //   })
      //   // }
      //   />
    )
  },
},
  {
    id:"actions",
    enableSorting:false,
    cell:({row})=>{
      const request=row.original;

      const {mutate:deleteRequest}=useDeleteRequest();

       const handleView = () => {
        console.log("View:", request)
        // navigate or open modal
      }

      const handleDelete = () => {
        deleteRequest(request._id)
      }

      return(
        <div className="flex gap-3">
        
          <button onClick={handleView} className="cursor-pointer">
            <Info className="w-5 h-5 text-[silver] hover:scale-110 transition" />
          </button>

          <button className="cursor-pointer">
            <SquarePen className="w-5 h-5 text-[silver] hover:scale-110 transition" />
          </button>
          
          <button onClick={handleDelete} className="cursor-pointer">
            <Trash className="w-5 h-5 text-red-500 hover:scale-110 transition" />
          </button>

        </div>
      )
    }
  }
 
]