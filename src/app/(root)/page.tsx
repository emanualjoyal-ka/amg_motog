'use client';
import SocialMedias from "@/src/components/SocialMedias";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import { useRouter } from "next/navigation";

const page = () => {

  const router=useRouter();

  return (
    <div  style={{ backgroundImage:"url('/new2.jpg')"}} className='min-h-screen relative pt-25 px-3 md:px-16 bg-cover bg-center'>
        <div className='md:pt-20'>
          <h1 className='text-3xl md:w-140 md:text-6xl font-bold text-white'>Reliable Bike Parts for Everyday Riders</h1>
        <h2 className='md:text-xl md:text-xl text-white'>Quality bike parts tested in real workshops,</h2>
        <h2 className='md:text-xl md:text-xl text-white'> Reliable performance at honest prices.</h2>
        {/* <button className='mt-4 px-4 md:px-6 py-2 md:py-3 bg-white text-[#272080] font-bold rounded-full hover:bg-[#272080] hover:text-white cursor-pointer transition-hover duration-300'>Shop Now</button> */}
        <button onClick={()=>router.push('/shop')} className='bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)]
                      md:px-6 px-4 py-2 md:py-3 mt-4 font-bold transition-all duration-300 rounded-full text-white border-[1px] border-[#4D2F8C] cursor-pointer'>Shop Now</button>
        </div>
        <WhyChooseUs/>
        <SocialMedias/>
    </div>
  )
}

export default page