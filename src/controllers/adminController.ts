import { axiosInstance } from "../lib/axios";
import { API_URL_CONSTANTS } from "../constants/apiUrlConstants";
import { useQuery } from "@tanstack/react-query";

export const useGetAllAdmins=()=>{
    return useQuery({
        queryKey:["admins"],
        queryFn:async()=>{
            const response=await axiosInstance.get(API_URL_CONSTANTS.GET_ALL_ADMINS);
            return response.data.data;
        },
    })
}