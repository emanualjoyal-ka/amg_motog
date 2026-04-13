
 
export const API_URL_CONSTANTS={
    CREATE_REQUEST:"/api/requests",
    GET_REQUESTS:"/api/requests",
    GET_REQUEST_BY_ID:(requestId:string)=>`/api/requests/${requestId}`,
    GET_TRACKER:(orderId: string) => `/api/requests/track/${orderId}`,
    CREATE_CONTACT:"/api/contacts",
    REFRESH_TOKEN:"/api/auth/refresh",
    CHECK_AUTH:"/api/auth/me",
    LOGIN:"/api/auth/login",
    LOGOUT:"/api/auth/logout",
    GET_ALL_ADMINS:"/api/auth/all-admins",
    DELETE_REQUEST:(requestId:string)=>`/api/requests/${requestId}`,
    GET_ALL_CONTACTS:"/api/contacts"
}

export const DASHBOARD_API_URL_CONSTANTS={
    GET_DASHBOARD_OVER_VIEW:"/api/dashboard/over-view",
    GET_REQUEST_CHART:"api/dashboard/request-charts",
    GET_STATUS_BREAKDOWN:"api/dashboard/status-breakdown",
    GET_LAST_SEVEN_DAYS_REQUESTS:"api/dashboard/last-seven-days-requests",
    GET_RECENT_ACTIVITIES:(limit:number)=>`api/dashboard/recent-activities?limit=${limit}`,
    GET_CUSTOMER_OVER_VIEW:"api/dashboard/customer-overview"
}


