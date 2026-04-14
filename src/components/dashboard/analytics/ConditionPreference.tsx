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
import React from "react"
import { useGetConditionPreference } from "@/src/controllers/analyticsController"


   const CONDITION_COLORS: Record<string, string> = {
  "OEM ( Original )": "#6366f1",
  "Used": "#f59e0b",
  "Any Available": "#10b981",       // emerald
}


const chartConfig = {
  visitors: {
    label: "Requests",
  },
  ...Object.fromEntries(
    Object.entries(CONDITION_COLORS).map(([key, color]) => [
      key,
      { label: key, color },
    ])
  ),
} satisfies ChartConfig


 

export function ConditionPrefChartPie() {

    const { data, isLoading } = useGetConditionPreference();


    const chartData = React.useMemo(() => {
  if (!data) return []

  return data.map((item: any) => ({
    condition: item.condition,
    requests: item.requests,
    fill: CONDITION_COLORS[item.condition] || "#8884d8",
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
    <span>{item.payload.condition}</span>
  </div>,
  value,
]}
    />
  }
/>
            <Pie
              data={chartData}
              dataKey="requests"
              nameKey="condition"
              innerRadius={70}
              outerRadius={100} 
               cx="50%"
    cy="50%"
    isAnimationActive={true}
            />
            <Legend  formatter={(_value, entry: any) => {
    return entry.payload.condition 
  }}/>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
