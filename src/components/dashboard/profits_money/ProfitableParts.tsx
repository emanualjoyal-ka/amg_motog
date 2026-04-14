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
import { useGetProfitableParts } from "@/src/controllers/profitsController"


const chartConfig = {
  requests: {
    label: "Requests",
    color: "#3b82f6",
  },
}

export function ProfitableParts() {

   const { data, isLoading, isError } = useGetProfitableParts();

   console.log(data);
   
   
  const chartData = data?.map((item: any) => ({
    part: item.part,        
    profit: item.profit,
    requests:item.requests // your backend field
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
              dataKey="part"
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
      formatter={(value: any, name: any, props: any) => {
        const data = props?.payload;

        return [
          <div className="flex flex-col gap-1">
            <span className="text-white font-semibold">
              Profit: ₹ {data?.profit ?? 0}
            </span>
            <span className="text-gray-300 text-sm">
              Requests: {data?.requests ?? 0}
            </span>
          </div>,
        ];
      }}
      labelFormatter={(label) => (
  <span className="text-white">
    {String(label ?? "")}
  </span>
)}
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
