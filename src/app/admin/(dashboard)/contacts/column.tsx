import { ColumnDef } from "@tanstack/react-table";
import { Info, Trash } from "lucide-react";

type Contacts={
    _id:string;
    name:string;
    email:string;
    subject:string;
    message:string;
}

export const columns: ColumnDef<Contacts>[] = [
    {
        accessorKey:"name",
        header:"Name"
    },
    {
        accessorKey:"email",
        header:"Email"
    },
    {
        accessorKey:"subject",
        header:"Subject",
        enableSorting:false
    },
    {
        accessorKey:"message",
        header:"Message",
        enableSorting:false
    },
    {
    id:"actions",
    enableSorting:false,
    cell:({row})=>{
      const request=row.original;

      

       const handleView = () => {
        console.log("View:", request)
        // navigate or open modal
      }

      const handleDelete = () => {
        
      }

      return(
        <div className="flex gap-3">
        
          <button onClick={handleView} className="cursor-pointer">
            <Info className="w-5 h-5 text-[silver] hover:scale-110 transition" />
          </button>
          
          <button onClick={handleDelete} className="cursor-pointer">
            <Trash className="w-5 h-5 text-red-500 hover:scale-110 transition" />
          </button>

        </div>
      )
    }
  }
]