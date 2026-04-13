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
    })
}
export const useGetRequestChart=()=>{
    return useQuery({
        queryKey:["requests-over-time"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_REQUEST_CHART);
            return response.data.data;
        },
    })
}
export const useGetStatusBreakdown=()=>{
    return useQuery({
        queryKey:["order-status"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_STATUS_BREAKDOWN);
            return response.data.data;
        },
    })
}

export const useGetLastSevenDaysRequests=()=>{
    return useQuery({
        queryKey:["last_seven_days"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_LAST_SEVEN_DAYS_REQUESTS);
            return response.data.data;
        },
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
  });
};

export const useGetCustomerOverView=()=>{
    return useQuery({
        queryKey:["customer_over-view"],
        queryFn:async()=>{
            const response=await axiosInstance.get(DASHBOARD_API_URL_CONSTANTS.GET_CUSTOMER_OVER_VIEW);
            console.log(response.data.data);
            return response.data.data;
        },
    })
}
