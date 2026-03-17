import { useMutation, useQueryClient } from "@tanstack/react-query"
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
