import { ChartBar } from '@/src/components/dashboard/analytics/ChartBar'
import { ConditionPrefChartPie } from '@/src/components/dashboard/analytics/ConditionPreference'
import { MonthlyGrowthChart } from '@/src/components/dashboard/analytics/MonthlyGrowthChart'
import { TopBikeChartBar } from '@/src/components/dashboard/analytics/TopBrandsChart'
import { TopPartsChartBar } from '@/src/components/dashboard/analytics/TopParts'

const page = () => {
  return (
    <div>
       <div className='flex grid md:grid-cols-2 gap-8'>
      <div className='w-full'>
         <h1 className="text-xl font-semibold mb-4">
              Customer Drop-off
            </h1>
        <ChartBar/>
      </div>
      <div className='w-full'>
         <h1 className="text-xl font-semibold mb-4">
             Top Bike Brands
            </h1>
        <TopBikeChartBar/>
      
      </div>
      <div className='w-full'>
         <h1 className="text-xl font-semibold mb-4">
              Top Bike Parts
            </h1>
        <TopPartsChartBar/>
      
      </div>
      <div className='w-full'>
         <h1 className="text-xl font-semibold mb-4">
              Condition Preference
            </h1>
        <ConditionPrefChartPie/>
      
      </div>
            </div>
      <div className='w-full mt-8'>
         <h1 className="text-xl font-semibold mb-4">
              Monthly Growth
            </h1>
        <MonthlyGrowthChart/>
      
      </div>      
    </div>
  )
}

export default page