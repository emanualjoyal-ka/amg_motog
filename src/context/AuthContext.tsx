"use client";

//this is the main file that manages authentication state and logic,like login,logout and checking if user is already logged in on page load.It uses React Context API to provide auth state and functions to the entire app. It also uses axios instance to make API calls to the backend for authentication related operations.
//can also say this is the brain that checks user authentication
import { createContext, useContext, useEffect, useState } from "react";
import {axiosInstance} from "../lib/axios";
import { API_URL_CONSTANTS } from "../constants/apiUrlConstants";

// Define user type
interface User {
  email: string;
  userName: string;
  role: string;
}

// Context structure
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: any) => Promise<void>;
  logout: () => Promise<void>;
}

// Create context
const AuthContext = createContext<AuthContextType | null>(null);

// Provider (wraps entire app)
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user already logged in (on page load)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axiosInstance.get(API_URL_CONSTANTS.CHECK_AUTH); //API to check if user is authenticated and get user details

        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // LOGIN FUNCTION
  const login = async (formData: any) => {
    const res = await axiosInstance.post(API_URL_CONSTANTS.LOGIN, formData);

  
    

    // Backend already sets cookies
    setUser({
      email: res.data.email,
      userName: res.data.userName,
      role: res.data.role,
    });
  };

  // LOGOUT FUNCTION
  const logout = async () => {
    await axiosInstance.post(API_URL_CONSTANTS.LOGOUT);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



// Custom hook (easy access)
export const useAuth = () => { //shortcut so that we can use useAuth() instead of useContext(AuthContext) in our components
  return useContext(AuthContext)!;
};