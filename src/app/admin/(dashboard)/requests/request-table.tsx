"use client"

import { useGetAllRequests } from "@/src/controllers/requestController"
import { DataTable } from "../../../../components/main/data-table"
import { columns, Request } from "./column"



export function RequestTable() {

    const {data,isLoading,error}=useGetAllRequests();

    if (!data) {
    return <div>Loading or No Data Available</div>;
}

    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error fetching requests</div>
    }
   const filteredData = Array.isArray(data) 
    ? data.filter((item: Request) => item.status === "Request Received") 
    : [];

  return <DataTable columns={columns} data={filteredData} />
}