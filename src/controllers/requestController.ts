import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { axiosInstance } from "../lib/axios";
import { API_URL_CONSTANTS } from "../constants/apiUrlConstants";


export const useCreateRequest=()=>{
    const queryClient=useQueryClient();

    return useMutation({
        mutationFn:async (formData:FormData)=>{
            const response=await axiosInstance.post(API_URL_CONSTANTS.CREATE_REQUEST,formData,
                 { headers: { "Content-Type": "multipart/form-data" } }
            )
            return response.data;
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["requests"]});
        }
    })
}


export const useGetTracker=(orderId: string)=>{
    return useQuery({
        queryKey:["tracker",orderId],
        queryFn:async()=>{
            const response=await axiosInstance.get(API_URL_CONSTANTS.GET_TRACKER(orderId));
            return response.data;
        },
        enabled: !!orderId,   
        staleTime: 0,       
        gcTime: 0,   
    })
}


export const useGetAllRequests=()=>{
    return useQuery({
        queryKey:["requests"],
        queryFn:async()=>{
            const response=await axiosInstance.get(API_URL_CONSTANTS.GET_REQUESTS);
            return response.data.data;
        },
         staleTime: 30000,
    gcTime: 60000, //cache time 60s
    refetchOnWindowFocus: false, //wont fetch when browser tab changes
    refetchOnMount: false,
    retry: 1,
    })
}

export const useGetRequestById=(requestId:string)=>{
    return useQuery({
        queryKey:["request",requestId],
        queryFn:async()=>{
            const response=await axiosInstance.get(API_URL_CONSTANTS.GET_REQUEST_BY_ID(requestId));
            return response.data.data;
        },
        enabled: !!requestId,   
    })
}

export const useDeleteRequest=()=>{
    const queryClient=useQueryClient();

    return useMutation({
        mutationFn:async (requestId:string)=>{
            const response=await axiosInstance.delete(API_URL_CONSTANTS.DELETE_REQUEST(requestId));
            return response.data;
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["requests"]});
        }
    })
}
