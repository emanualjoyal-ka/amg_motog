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
import { useGetRevenueCostComp } from "@/src/controllers/profitsController"


const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#0073ff",
  },
  cost: {
    label: "Cost",
    color: "#bd46c6",
  },
}

export function RevenueCostChartBar() {

   const { data, isLoading, isError } = useGetRevenueCostComp();

   console.log(data);
   

  const chartData = data?.map((item: any) => ({
    month: item.month,        
    revenue: item.revenue,
    cost:item.cost 
  })) || []

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading chart</div>

  return (
    <Card className="bg-white/10">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart barGap={8}
  barCategoryGap="20%" margin={{bottom:15}} accessibilityLayer  data={chartData}>
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
     formatter={(value: any, name: any) => {
  const key = String(name);

  const colorMap: Record<string, string> = {
    revenue: "#0073ff",
    cost: "#bd46c6",
  };

  const labelMap: Record<string, string> = {
    revenue: "Revenue",
    cost: "Cost",
  };

  // handle array case (very important)
  const finalValue = Array.isArray(value) ? value[0] : value;

  return [
    <div className="flex items-center gap-2">
      <div
        className="w-2 h-2 rounded-full"
        style={{ background: colorMap[key] ?? "#fff" }}
      />
      <span className="text-white">
        {labelMap[key] ?? key}: ₹ {finalValue ?? 0}
      </span>
    </div>,
  ];
}}
      labelFormatter={(label) => (
        <span className="text-gray-300">{label}</span>
      )}
    />
  }
/>
            <Bar dataKey="revenue" fill="#0073ff" radius={8} isAnimationActive={true} />
            <Bar dataKey="cost" fill="#bd46c6" radius={8} isAnimationActive={true} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
