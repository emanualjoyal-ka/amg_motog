"use client"

import { useGetAllAdmins} from "@/src/controllers/requestController"
import { DataTable } from "../../../../components/main/data-table"
import { columns, Request } from "./column"



export function RequestTable() {

    const {data,isLoading,error}=useGetAllAdmins();

    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error fetching admins</div>
    }
   

  return <DataTable columns={columns} data={data} />
}