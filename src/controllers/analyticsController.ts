import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { DASHBOARD_API_URL_CONSTANTS } from "../constants/apiUrlConstants";

export const useGetCustomerDropOff=()=>{
    return useQuery({
        queryKey:["customer_drop-off"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_CUSTOMER_DROP_OFF);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}

export const useGetTopBikeBrands=()=>{
    return useQuery({
        queryKey:["top-bikes"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_TOP_BIKE_BRANDS);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}


export const useGetTopParts=()=>{
    return useQuery({
        queryKey:["top-parts"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_TOP_PARTS);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}


export const useGetConditionPreference=()=>{
    return useQuery({
        queryKey:["condition-pref"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_CONDITION_PREF);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}


export const useGetMonthlyGrowth=()=>{
    return useQuery({
        queryKey:["monthyl-growth"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_MONTHLY_GROWTH);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}