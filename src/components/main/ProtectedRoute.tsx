"use client";

import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DashBoardPlaceholder from "../DashBoardPlaceholder";

export default function ProtectedRoute({ children }: any) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not logged in → redirect
    if (!loading && !user) { //if loading is false and user is null, then redirect to login page
      router.replace("/admin/login");
    }
  }, [user, loading,router]);

  // While checking auth
  if (loading) return <DashBoardPlaceholder/>

  if (!user) return null;


  return children;
}