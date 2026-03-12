'use client';
import WhyChooseUs from '../components/WhyChooseUs'
import SocialMedias from '../components/SocialMedias'
import { useRouter } from 'next/navigation';
import ShinyText from "../../components/ShinyText"

const Hero = () => {

    const router=useRouter();
  return (
    // <div style={{ backgroundImage:"url('/new2.jpg')"}} className='min-h-screen relative pt-25 px-3 md:px-16 bg-cover bg-center'>
    <div className='min-h-screen relative pt-25 px-5 md:px-16 bg-[radial-gradient(circle_at_top,rgba(77,47,140,0.35),transparent_50%)] '>
      
           <div className='md:pt-20'>
            <ShinyText
  text="Reliable Bike Parts for Everyday Riders"
  speed={4}
  delay={0}
  color="#b5b5b5"
  shineColor="#ffffff"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
  className='text-3xl text-center md:text-left md:w-140 md:text-6xl font-bold text-white'
/>

            
        <h2 className='md:text-xl md:text-xl text-white mt-2'>Quality bike parts tested in real workshops,</h2>
        <h2 className='md:text-xl md:text-xl text-white '> Reliable performance at honest prices.</h2>
<div className="md:flex gap-4 max-w-120 ">



         
           <button onClick={()=>router.push('/request-a-part')} className=' relative w-full hover:bg-[linear-gradient(to_right,rgba(60,8,126)_0%,rgba(60,8,126,0.32)_100%)]
                      md:px-6 px-4 py-3 mt-4 font-bold  rounded-lg text-white border-[1px] border-[#4D2F8C] cursor-pointer'>
            Request Part Now
          <div className='absolute rounded-lg -z-1 animate-pulse shadow-[0_0_30px_rgba(60,8,126,0.8)] bg-[#0C0B1D] inset-0 '>

          </div>
         
          </button>
                      




            <a href="#how-it-works" className='w-full'> 
            <button  className='w-full bg-[linear-gradient(to_right,rgba(60,8,126)_0%,rgba(60,8,126,0.32)_100%)]
                      hover:bg-[rgba(60,8,126,0.5)_100%)] text-center
                      md:px-6 px-4 py-3 mt-4 font-bold transition-all duration-300 rounded-lg text-white border-[1px] border-[#4D2F8C] cursor-pointer'>
            How it works
            </button></a>
</div>
        </div>
        <WhyChooseUs/>
        <SocialMedias/>
    </div>
  )
}

export default Hero