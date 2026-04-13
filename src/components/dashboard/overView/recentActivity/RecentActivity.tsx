"use client"

import { DataTable } from "../../../../components/main/data-table"
import { columns } from "./column"
import { useGetRecentActivities } from "@/src/controllers/dashBoardController";



export function RecentActivityTable() {

    const {data,isLoading,error}=useGetRecentActivities(5);

    if (!data) {
    return <div>Loading or No Data Available</div>;
}

    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error fetching requests</div>
    }

  return <DataTable columns={columns} data={data} />
}