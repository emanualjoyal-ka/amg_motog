import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetTopMetrics } from "@/src/controllers/profitsController";

export function MetricsCards() {

    const {data,isLoading,error}=useGetTopMetrics();
    console.log(data);
    
    
    
       if(isLoading){
            return <div>Loading...</div>
        }
    
        if(error){
            return <div>Error fetching requests</div>
        }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      
      <Card className="bg-gray-100 border-gray-300">
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-gray-700">
          ₹{data.totalRevenue}
        </CardContent>
      </Card>
      <Card className="bg-blue-100 border-blue-400">
        <CardHeader>
          <CardTitle>Total Cost</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-blue-700">
          ₹{data.totalCost}
        </CardContent>
      </Card>

      <Card className="bg-yellow-100 border-yellow-400">
        <CardHeader>
          <CardTitle>Total Profit</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-yellow-700">
          ₹{data.totalProfit}
        </CardContent>
      </Card>

      <Card className="bg-green-100 border-green-500">
        <CardHeader>
          <CardTitle>Profit Margin</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold text-green-700">
          {data.profitMargin}%
        </CardContent>
      </Card>

    </div>
  )
}