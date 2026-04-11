import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { API_URL_CONSTANTS } from "../constants/apiUrlConstants";


export const useGetAllContacts=()=>{
    return useQuery({
        queryKey:["contacts"],
        queryFn:async()=>{
            const response=await axiosInstance.get(API_URL_CONSTANTS.GET_ALL_CONTACTS);
            return response.data.data;
        },
    })
}