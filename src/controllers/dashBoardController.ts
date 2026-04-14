import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "../lib/axios";
import { DASHBOARD_API_URL_CONSTANTS } from "../constants/apiUrlConstants";


export const useGetDashBoardOverView=()=>{
    return useQuery({
        queryKey:["dashboard-metrics"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_DASHBOARD_OVER_VIEW);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}
export const useGetRequestChart=()=>{
    return useQuery({
        queryKey:["requests-over-time"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_REQUEST_CHART);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}
export const useGetStatusBreakdown=()=>{
    return useQuery({
        queryKey:["order-status"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_STATUS_BREAKDOWN);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}

export const useGetLastSevenDaysRequests=()=>{
    return useQuery({
        queryKey:["last_seven_days"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_LAST_SEVEN_DAYS_REQUESTS);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}

export const useGetRecentActivities = (limit: number) => {
  return useQuery({
    queryKey: ["recent-activities", limit],
    queryFn: async ({ queryKey }) => {
      const [, limit] = queryKey as [string, number];

      const response = await axiosInstance.get(
        DASHBOARD_API_URL_CONSTANTS.GET_RECENT_ACTIVITIES(limit)
      );
      
      return response.data.data;
    },
     staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
  });
};

export const useGetCustomerOverView=()=>{
    return useQuery({
        queryKey:["customer_over-view"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_CUSTOMER_OVER_VIEW);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}
