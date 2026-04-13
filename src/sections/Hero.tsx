'use client';
import WhyChooseUs from '../components/WhyChooseUs'
import { useRouter } from 'next/navigation';
import ShinyText from "../../components/ShinyText"
import Image from 'next/image';
import HeroImage from "@/public/bgnew.png";


const Hero = () => {
  
    const router=useRouter();

  return (
    <div className='min-h-screen flex flex-col lg:flex-row relative pt-25 md:pt-15 md:pb-20 px-5 lg:px-16 bg-[radial-gradient(circle_at_top,rgba(77,47,140,0.35),transparent_50%)] '>
           <div className='md:pt-20 flex flex-col items-center lg:items-start order-2 lg:order-0'>
            <ShinyText
  text="Reliable Bike Parts for Everyday Riders"
  speed={2}
  delay={0}
  color="#b5b5b5"
  shineColor="#ffffff"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
  className='text-4xl cursor-default drop-shadow-[0_2px_1px_rgba(255,255,255,0.6)] text-center lg:text-left lg:w-140 md:text-6xl mb-6 font-extrabold leading-tight text-white'
/>

            
        <h2 className='md:text-2xl font-semibold leading-snug text-center cursor-default lg:text-left text-[silver]'>Quality bike parts tested in real workshops,</h2>
        <h2 className='md:text-2xl  font-semibold leading-snug text-center cursor-default lg:text-left text-[silver] mb-6'> Reliable performance at honest prices.</h2>

<div className=" flex flex-col lg:flex-row gap-5 w-[90%] lg:w-full mb-4">
           <button onClick={()=>router.push('/request-a-part')} className='relative w-full hover:bg-[linear-gradient(to_right,rgba(60,8,126)_0%,rgba(60,8,126,0.32)_100%)]
                      md:px-6 px-4 py-3  font-medium text-lg leading-snug rounded-lg text-white border-[1px] border-[#4D2F8C] cursor-pointer'>
            Request Part Now
          <div className='absolute rounded-lg -z-1 animate-pulse shadow-[0_0_10px_10px_rgba(60,8,126,0.8)] bg-[#0C0B1D] inset-0 '>

          </div>
         
          </button>
                    

            <a href="#how-it-works" className='w-full'> 
            <button  className=' w-full bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)] text-center
                      md:px-6 px-4 py-3 font-medium leading-snug text-lg transition-all duration-300 rounded-lg text-white border-[1px] border-[#4D2F8C] cursor-pointer'>
            How it works
            </button></a>
</div>

        <WhyChooseUs/>
        </div>

        <div className='flex items-center mb-5 md:mb-0 rounded-3xl animate-float drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] justify-center'>
          <Image src={HeroImage} priority placeholder='blur' alt="Motorcycle parts" className='rounded-3xl'/>
        </div>



    </div>
  )
}

export default Hero