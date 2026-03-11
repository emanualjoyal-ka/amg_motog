import Design from '@/src/components/Design'
import React from 'react'

const page = () => {
  return (
     <div className='min-h-screen relative flex overflow-hidden items-center justify-center bg-[#284EC2]'>
        <Design position={"right-[-130px] top-[-130px]"} size={"h-90 w-90 md:h-130 md:w-130"}/>
        <Design position={"left-[-200px] bottom-[-300px]"} size={"h-90 w-90 md:h-200 md:w-200"}/>
       
    </div>
  )
}

export default page