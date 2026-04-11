import { ColumnDef } from "@tanstack/react-table"

export type Admins = {
    userName: string;
    email: string;
    role: string;
}

export const columns: ColumnDef<Admins>[] =[
    {
    accessorKey: "userName",
    header: "User Name",
  },
    {
        accessorKey:"email",
        header:"Email"
    },
    {
        accessorKey:"role",
        header:"Role"
    },
 
]