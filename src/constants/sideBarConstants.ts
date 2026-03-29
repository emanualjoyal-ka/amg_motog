import {ShieldUser,ShoppingBag,LayoutGrid,SwatchBook,ContactRound,MessageCircleMore ,HandHeart ,FolderKanban, Contact, LayoutDashboard } from 'lucide-react';

export const sidebarConstants = [
    
    {
        id:1,
        title:"Dashboard",
        link:"/admin/dashboard",
        icon:LayoutDashboard
    },
    {
        id:2,
        title:"Admin users",
        link:"/admin/user",
        icon:ShieldUser
    },
    {
        id:3,
        title:"Projects",
        link:"/admin/projects",
        icon:FolderKanban,
    },
    {
        id:4,
        title:"Project Donations",
        link:"/admin/project-donations",
        icon:HandHeart
    },
    {
        id:5,
        title:"Contacts",
        link:"/admin/contacts",
        icon:Contact
    },
    {
        id:6,
        title:"Donations",
        link:"/admin/donations",
        icon:HandHeart,
    }
   
]