import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { DASHBOARD_API_URL_CONSTANTS } from "../constants/apiUrlConstants";

export const useGetTopMetrics=()=>{
    return useQuery({
        queryKey:["top-metrics"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_PROFITS_TOP_METRICS);
            console.log(response.data.data);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}

export const useGetRevenue=()=>{
    return useQuery({
        queryKey:["revenue-over-time"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_REVENUE_OVER_TIME);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}


export const useGetProfitOverTime=()=>{
    return useQuery({
        queryKey:["profit-over-time"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_PROFIT_OVER_TIME);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}


export const useGetRevenueCostComp=()=>{
    return useQuery({
        queryKey:["revenue-cost-comp"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_REVENUE_VS_COST);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}


export const useGetProfitableParts=()=>{
    return useQuery({
        queryKey:["profitable-parts"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_PROFITABLE_PARTS);
            console.log(response.data.data);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}