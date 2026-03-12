'use client'
import { useRouter } from "next/navigation"


const CallToAction = () => {

    const router=useRouter();

  return (
    <div className='text-center py-15 px-5 bg-[#0C0B1D] text-white'>
        <h1 className='font-bold text-3xl md:text-4xl mb-3'>Can't Find the Spare Part You Need?</h1>
        <p>Send us a request and our mechanic will help identify and locate the correct part.</p>
        <button onClick={()=>router.push("/request-a-part")} className='bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)]
                      md:px-6 px-4 py-2 md:py-3 mt-5 font-bold transition-all duration-300 rounded-md text-white border-[1px] border-[#4D2F8C] cursor-pointer'>Request Spare Part</button>
    </div>
  )
}

export default CallToAction