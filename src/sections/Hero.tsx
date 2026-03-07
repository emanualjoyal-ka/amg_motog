'use client';
import WhyChooseUs from '../components/WhyChooseUs'
import SocialMedias from '../components/SocialMedias'
import { useRouter } from 'next/navigation';

const Hero = () => {

    const router=useRouter();
  return (
    <div style={{ backgroundImage:"url('/new2.jpg')"}} className='min-h-screen relative pt-25 px-3 md:px-16 bg-cover bg-center'>
           <div className='md:pt-20'>
          <h1 className='text-3xl md:w-140 md:text-6xl font-bold text-white'>Reliable Bike Parts for Everyday Riders</h1>
        <h2 className='md:text-xl md:text-xl text-white'>Quality bike parts tested in real workshops,</h2>
        <h2 className='md:text-xl md:text-xl text-white'> Reliable performance at honest prices.</h2>
<div className="md:flex gap-4 max-w-120 ">
          <button onClick={()=>router.push('/request-a-part')} className='w-full hover:bg-[linear-gradient(to_right,rgba(60,8,126)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-lg shadow-[rgba(60,8,126,0.8)]
                      bg-[rgba(60,8,126,0.5)_100%)]
                      md:px-6 px-4 py-2 md:py-3 mt-4 font-bold transition-all duration-300 rounded-full text-white border-[1px] border-[#4D2F8C] cursor-pointer'>Request a Part Now</button>
        <button onClick={()=>router.push('/shop')} className='w-full hover:bg-[linear-gradient(to_right,rgba(60,8,126)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-lg shadow-[rgba(60,8,126,0.8)]
                      bg-[rgba(60,8,126,0.5)_100%)]
                      md:px-6 px-4 py-2 md:py-3 mt-4 font-bold transition-all duration-300 rounded-full text-white border-[1px] border-[#4D2F8C] cursor-pointer'>How it works</button>
</div>
        </div>
        <WhyChooseUs/>
        <SocialMedias/>
    </div>
  )
}

export default Hero