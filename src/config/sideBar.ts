

import { BarChart3, ClipboardList, IndianRupee, LayoutDashboard, MessageSquare, RefreshCcw, ShieldUser, Truck, Users } from "lucide-react";

export const sidebarItems = [
  {
        id:1,
        title:"Dashboard",
        link:"/admin/dashboard",
        icon:LayoutDashboard
    },
     {
        id:2,
        title:"Requests",
        link:"/admin/requests",
        icon:ClipboardList
    },
    {
        id:3,
        title:"Processing",
        link:"/admin/processing",
        icon:RefreshCcw
    },
    {
        id:4,
        title:"Deliveries",
        link:"/admin/deliveries",
        icon:Truck
    },
    {
        id:5,
        title:"Analytics",
        link:"/admin/analytics",
        icon:BarChart3
    },
    {
        id:6,
        title:"Profits / Money",
        link:"/admin/profits",
        icon:IndianRupee
    },
    {
  id: 7,
  title: "Customers",
  link: "/admin/customers",
  icon: Users
},
    {
  id: 8,
  title: "Contacts / Feedback",
  link: "/admin/contacts",
  icon: MessageSquare
},
    {
        id:9,
        title:"Admin users",
        link:"/admin/admin-users",
        icon:ShieldUser,
        role:"superadmin"
    },
    
   
   
];