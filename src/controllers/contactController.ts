import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { API_URL_CONSTANTS } from "../constants/apiUrlConstants";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const useCreateContact=()=>{
     const queryClient=useQueryClient();

    return useMutation({
        mutationFn:async (formData:ContactPayload)=>{
            const response=await axiosInstance.post(API_URL_CONSTANTS.CREATE_CONTACT,formData)
            return response.data;
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["contacts"]});
        }
    })
}

export const useGetAllContacts=()=>{
    return useQuery({
        queryKey:["contacts"],
        queryFn:async()=>{
            const response=await axiosInstance.get(API_URL_CONSTANTS.GET_ALL_CONTACTS);
            return response.data.data;
        },
    })
}