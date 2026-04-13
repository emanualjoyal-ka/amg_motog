'use client'
import { ChartBar } from '@/src/components/dashboard/overView/BarChart';
import { MetricsCards } from '@/src/components/dashboard/overView/OverViewCards';
import { RecentActivityTable } from '@/src/components/dashboard/overView/recentActivity/RecentActivity';
import  { ChartLineInteractive } from '@/src/components/dashboard/overView/RequestChart';
import { ChartPieDonut } from '@/src/components/dashboard/overView/StatusPieChart';
import { useGetDashBoardOverView } from '@/src/controllers/dashBoardController'


const page = () => {

  const {data,isLoading,error}=useGetDashBoardOverView();


   if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error fetching requests</div>
    }


  return (
    <div>
     <MetricsCards data={data}/>
     <div className="mt-8">
        <h1 className="text-xl font-semibold mb-4">
        Requests Over Time
      </h1>
     <ChartLineInteractive/>
      </div>


      <div className='flex flex-col md:flex-row gap-8 mt-8'>
<div className='w-full'>
   <h1 className="text-xl font-semibold mb-4">
        Request Status Breakdown
      </h1>
  <ChartPieDonut/>
</div>
<div className='w-full'>
   <h1 className="text-xl font-semibold mb-4">
        Daily Requests (Last 7 Days)
      </h1>
  <ChartBar/>

</div>

      </div>
       <h1 className="text-xl font-semibold mb-4">
        Recent Activities
      </h1>
    <RecentActivityTable/>


    </div>
  )
}

export default page