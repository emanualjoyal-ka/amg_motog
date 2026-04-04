import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { axiosInstance } from "../lib/axios";
import { API_URL } from "../constants/apiUrlConstants";


export const useCreateRequest=()=>{
    const queryClient=useQueryClient();

    return useMutation({
        mutationFn:async (formData:FormData)=>{
            const response=await axiosInstance.post(API_URL.CREATE_REQUEST,formData,
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
            const response=await axiosInstance.get(API_URL.GET_TRACKER(orderId));
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
            const response=await axiosInstance.get(API_URL.GET_REQUESTS);
            return response.data.data;
        },
    })
}
