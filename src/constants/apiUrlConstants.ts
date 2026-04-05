
 
export const API_URL_CONSTANTS={
    CREATE_REQUEST:"/api/requests",
    GET_REQUESTS:"/api/requests",
    GET_REQUEST_BY_ID:"/api/requests/",
    GET_TRACKER:(orderId: string) => `/api/requests/track/${orderId}`,
    CREATE_CONTACT:"/api/contacts",
    REFRESH_TOKEN:"/api/auth/refresh",
    CHECK_AUTH:"/api/auth/me",
    LOGIN:"/api/auth/login",
    LOGOUT:"/api/auth/logout",
    GET_ALL_ADMINS:"/api/auth/all-admins",
}


