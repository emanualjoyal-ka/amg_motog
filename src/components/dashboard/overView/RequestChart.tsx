"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
import { useGetRequestChart } from "@/src/controllers/dashBoardController"

const chartConfig = {
  count: {
    label: "Requests",
    color: "#bd46c6",
  },
} satisfies ChartConfig

export function ChartLineInteractive() {


  const { data, isLoading } = useGetRequestChart()

   const formattedData = React.useMemo(() => {
    if (!data) return []
    return data.map((item: any) => ({
      date: item.date,
      count: item.count,
    }))
  }, [data])

  if (isLoading) return <div>Loading chart...</div>

  return (
    <Card className="py-4 bg-white/10 sm:py-0">
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
        config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={formattedData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="#374151" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
              stroke="#fff"
              
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="text-white w-[150px]"
                  nameKey="count"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey="count"
              type="monotone"
              stroke="#bd46c6"
              strokeWidth={2}
              dot={true}
              isAnimationActive={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
