"use client"
import { Legend, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { useGetStatusBreakdown } from "@/src/controllers/dashBoardController"
import React from "react"


   const STATUS_COLORS: Record<string, string> = {
  "Request Received": "#6366f1", // indigo
  "Searching Part": "#f59e0b",   // amber
  "Price Confirmed": "#0ea5e9",  // sky
  "Part Purchased": "#8b5cf6",   // violet
  "Packed": "#22c55e",           // green
  "Shipped": "#f97316",          // orange
  "Delivered": "#10b981",        // emerald
}


const chartConfig = {
  visitors: {
    label: "Requests",
  },
  ...Object.fromEntries(
    Object.entries(STATUS_COLORS).map(([key, color]) => [
      key,
      { label: key, color },
    ])
  ),
} satisfies ChartConfig


 

export function ChartPieDonut() {

    const { data, isLoading } = useGetStatusBreakdown();


    const chartData = React.useMemo(() => {
  if (!data) return []

  return data.map((item: any) => ({
    status: item.status,
    visitors: item.count,
    fill: STATUS_COLORS[item.status] || "#8884d8",
  }))
}, [data])

if(isLoading){
        return <div>Loading...</div>
    }
    

  return (
    <Card className="flex bg-white/10 flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <PieChart>
            <ChartTooltip
   content={
    <ChartTooltipContent
      className="bg-zinc-900 text-white border border-zinc-700 rounded-md shadow-lg"
      formatter={(value, _name, item) => [
  <div className="flex items-center gap-2">
    <div
      className="w-2 h-2 rounded-full"
      style={{ background: item.payload.fill }}
    />
    <span>{item.payload.status}</span>
  </div>,
  value,
]}
    />
  }
/>
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="status"
              innerRadius={70}
              outerRadius={100} 
               cx="50%"
    cy="50%"
    isAnimationActive={true}
            />
            <Legend  formatter={(_value, entry: any) => {
    return entry.payload.status 
  }}/>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
