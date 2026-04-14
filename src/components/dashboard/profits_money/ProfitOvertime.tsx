"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
import { useGetProfitOverTime } from "@/src/controllers/profitsController"


const chartConfig = {
  requests: {
    label: "Requests",
    color: "#3b82f6",
  },
}

export function ProfitOverTimeChartBar() {

   const { data, isLoading, isError } = useGetProfitOverTime();
   
  const chartData = data?.map((item: any) => ({
    month: item.month,        
    profit: item.profit, // your backend field
  })) || []

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading chart</div>

  return (
    <Card className="bg-white/10">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart 
   margin={{bottom:15}} accessibilityLayer  data={chartData}>
            <CartesianGrid vertical={false} stroke="#374151"/>
            <XAxis
              dataKey="month"
              angle={-30}
  textAnchor="end"
  tickLine={false}
  axisLine={false}
  tick={{ fill: "#fff", fontSize: 12 }}
 
            />
          <ChartTooltip
  cursor={false}
  content={
    <ChartTooltipContent
      formatter={(value, name, props) => [
        <span style={{ color: "#fff", fontWeight: 600 }}>
          ₹ {value}
        </span>,
      ]}
      labelFormatter={(label) => label}
      labelClassName="text-white"
    />
  }
/>
            <Bar dataKey="profit" fill="#bd46c6" radius={8} isAnimationActive={true} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
