"use client"

import { useGetAllRequests } from "@/src/controllers/requestController"
import { DataTable } from "../../../../components/main/data-table"
import { columns } from "./column"
import { useGetAllContacts } from "@/src/controllers/contactController";



export function ContactTable() {

    const {data,isLoading,error}=useGetAllContacts();

    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error fetching requests</div>
    }
   

  return <DataTable columns={columns} data={data} />
}