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
import {useGetTopParts } from "@/src/controllers/analyticsController"


const chartConfig = {
  requests: {
    label: "Requests",
    color: "#3b82f6",
  },
}

export function TopPartsChartBar() {

   const { data, isLoading, isError } = useGetTopParts()

  const chartData = data?.map((item: any) => ({
    part: item.part,
  requests: item.requests
  })) || []

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading chart</div>

  return (
    <Card className="bg-white/10">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart  accessibilityLayer  data={chartData}>
            <CartesianGrid vertical={false} stroke="#374151"/>
            <XAxis
              dataKey="part"
             
  tickLine={false}
  axisLine={false}
  tick={{ fill: "#fff", fontSize: 12 }}
            />
            <ChartTooltip
              cursor={false}
               content={
    <ChartTooltipContent
      formatter={(value) => [
        <span style={{ color: "#fff", fontWeight: 600 }}>
          {value}
        </span>,
      ]}
      indicator="dot"
      labelClassName="text-white"
    />
  }

            />
            <Bar dataKey="requests" fill="#25bdb3" radius={8} isAnimationActive={true} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
