'use client'
import { ProfitableParts } from '@/src/components/dashboard/profits_money/ProfitableParts'
import { ProfitOverTimeChartBar } from '@/src/components/dashboard/profits_money/ProfitOvertime'
import { RevenueCostChartBar } from '@/src/components/dashboard/profits_money/RevenueCostCompare'
import { RevenueOverTimeChart } from '@/src/components/dashboard/profits_money/RevenueOverTime'
import { MetricsCards } from '@/src/components/dashboard/profits_money/TopMetricsCards'


const page = () => {
  return (
    <div>
      <MetricsCards/>
       <div className='flex grid md:grid-cols-2 mt-8  gap-8'>
      <div className='w-full'>
        <h1 className="text-xl font-semibold mb-4">Revenue Over-Time</h1>
        <RevenueOverTimeChart/>
      </div>
      <div className='w-full'>
        <h1 className="text-xl font-semibold mb-4">Profit Over-Time</h1>
        <ProfitOverTimeChartBar/>
      </div>
      <div className='w-full'>
        <h1 className="text-xl font-semibold mb-4">Revenue vs Cost</h1>
        <RevenueCostChartBar/>
      </div>
      <div className='w-full'>
        <h1 className="text-xl font-semibold mb-4">Top Profitable Parts</h1>
        <ProfitableParts/>
      </div>
      <div className='w-full'>

      </div>

      </div>
    </div>
  )
}

export default page