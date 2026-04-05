import axios from "axios";
import { API_URL_CONSTANTS } from "../constants/apiUrlConstants";
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// INTERCEPTOR → runs before every request
axiosInstance.interceptors.request.use((config) => {
  return config; //allows the request to go through
});

// INTERCEPTOR → runs when response comes
axiosInstance.interceptors.response.use(
  (response) => response, //allows the response to come through
  async (error) => {
    const originalRequest = error.config; //config contains details of the original request that failed,like url, method, headers,response etc.

    // If access token expired → try refresh (but NOT on auth-check or refresh endpoints)
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes(API_URL_CONSTANTS.REFRESH_TOKEN) &&
      !originalRequest.url?.includes(API_URL_CONSTANTS.CHECK_AUTH)
    ) {
      originalRequest._retry = true;

      try {
        // Call refresh token API
        await axiosInstance.post(API_URL_CONSTANTS.REFRESH_TOKEN); //this will set new access token in cookies if refresh is successful

        // Retry original request
        return axiosInstance(originalRequest);
      } catch (err) {
        // If refresh also fails → logout user
        window.location.href = "/admin/login"; //cant use router.push here because we are outside of react components,so we use window.location.href to redirect to login page
      }
    }

    return Promise.reject(error);
  },
);
