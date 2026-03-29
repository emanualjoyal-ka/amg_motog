'use client'
import { useRouter } from "next/navigation"


const CallToAction = () => {

    const router=useRouter();

  return ( 
    <div className='text-center py-28 md:py-32 px-5 bg-[#0C0B1D] text-white'>
      <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">
  Need Help?
</p>
        <h1 className='font-bold leading-snug text-2xl text-white md:text-3xl mb-3 drop-shadow-[0_2px_1px_rgba(255,255,255,0.6)] cursor-default'>Can't Find the Spare Part You Need?</h1>
        <p className="cursor-default text-gray-400 text-base md:text-lg max-w-xl mx-auto mt-3 leading-snug">Send us a request and our mechanic will help identify and locate the correct part.</p>
        <button onClick={()=>router.push("/request-a-part")} className='bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)]
                      md:px-8 px-4 py-2 md:py-4 mt-5 font-medium text-lg leading-snug transition-all duration-300 rounded-md text-white border-[1px] border-[#4D2F8C] cursor-pointer'>Request Spare Part</button>
    </div>
  )
}

export default CallToAction