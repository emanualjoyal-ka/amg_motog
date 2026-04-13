"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { useGetLastSevenDaysRequests } from "@/src/controllers/dashBoardController"


const chartConfig = {
  requests: {
    label: "Requests",
    color: "#3b82f6",
  },
}

export function ChartBar() {

   const { data, isLoading, isError } = useGetLastSevenDaysRequests()

  const chartData = data?.map((item: any) => ({
    date: item.date,        // e.g. "Mon"
    requests: item.count, // your backend field
  })) || []

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading chart</div>

  return (
    <Card className="bg-white/10">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer  data={chartData}>
            <CartesianGrid vertical={false} stroke="#374151"/>
            <XAxis
              dataKey="date"
              angle={-30}
  textAnchor="end"
  tickLine={false}
  axisLine={false}
  tick={{ fill: "#fff", fontSize: 12 }}
  tickFormatter={(value) =>
    new Date(value).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}

            />
            <Bar dataKey="requests" fill="#bd46c6" radius={8} isAnimationActive={true} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
