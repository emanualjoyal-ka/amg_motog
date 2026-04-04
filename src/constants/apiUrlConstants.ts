
 
export const API_URL={
    CREATE_REQUEST:"/api/requests",
    GET_REQUESTS:"/api/requests",
    GET_REQUEST_BY_ID:"/api/requests/",
    GET_TRACKER:(orderId: string) => `/api/requests/track/${orderId}`,
    CREATE_CONTACT:"/api/contacts",
}


