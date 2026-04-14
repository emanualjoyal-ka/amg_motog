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
         staleTime: 30000, //for 30s will Use cached data, NOT call API again
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false, //Should it refetch when component loads again
    retry: 1, //How many times to retry if API fails
    })
}