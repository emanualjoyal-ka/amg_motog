'use client'
import { useRouter } from "next/navigation"


const ToContactPage = () => {

    const router=useRouter();

  return (
    <div className='text-center py-15 px-5 bg-[#0C0B1D] text-white'>
      
      <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
  Support
</p>
        <h1 className='font-bold text-2xl text-white md:text-3xl mb-3 drop-shadow-[0_2px_1px_rgba(255,255,255,0.6)] cursor-default'>Need Help? Contact Us</h1>
        <p className="text-gray-400 text-base md:text-lg cursor-default max-w-xl mx-auto leading-relaxed">If you have questions about your request or need assistance, feel free to reach out. We respond quickly to help riders get their parts on time.</p>
        <button onClick={()=>router.push("/contact")} className='bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)]
                      md:px-8 px-4 py-2 md:py-4 mt-5 font-bold transition-all duration-300 rounded-md text-white border-[1px] border-[#4D2F8C] cursor-pointer'>Contact Us</button>
    </div>
  )
}

export default ToContactPage;