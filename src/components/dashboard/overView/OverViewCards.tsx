import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MetricsCards({ data }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      
      <Card className="bg-gray-100 border-gray-300">
        <CardHeader>
          <CardTitle>Total Requests</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-gray-700">
          {data.totalRequests}
        </CardContent>
      </Card>
      <Card className="bg-blue-100 border-blue-400">
        <CardHeader>
          <CardTitle>Request Received</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-blue-700">
          {data.requestReceived}
        </CardContent>
      </Card>

      <Card className="bg-yellow-100 border-yellow-400">
        <CardHeader>
          <CardTitle>Active Orders</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-yellow-700">
          {data.activeOrders}
        </CardContent>
      </Card>

      <Card className="bg-green-100 border-green-500">
        <CardHeader>
          <CardTitle>Delivered</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-green-700">
          {data.deliveredOrders}
        </CardContent>
      </Card>

      <Card className="bg-blue-100 border-blue-500">
        <CardHeader>
          <CardTitle>Conversion</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-blue-700">
          {data.conversionRate}%
        </CardContent>
      </Card>

      <Card className="bg-purple-100 border-purple-500">
        <CardHeader>
          <CardTitle>Today</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-purple-700">
          {data.todayRequests}
        </CardContent>
      </Card>

      <Card className="bg-teal-100 border-teal-500">
        <CardHeader>
          <CardTitle>This Month</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-teal-700">
          {data.monthRequests}
        </CardContent>
      </Card>

      <Card className="bg-emerald-100 border-emerald-600">
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-emerald-700">
          ₹{data.revenue}
        </CardContent>
      </Card>

    </div>
  )
}