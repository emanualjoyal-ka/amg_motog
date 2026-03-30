import Image from 'next/image'
import bg1 from "@/public/aboutus/img2.jpg"
import bg2 from "@/public/aboutus/img5.jpg"


const AboutUs = () => {
  return (
    <>
    <div className='relative min-h-screen'>
        <Image src={bg1} fill priority alt='spareImage' className='object-cover'/>
    <div className='absolute z-10 bg-black/70 inset-0' />

    
<div className='absolute inset-0 z-20 px-5 py-24 md:py-25 md:px-16 text-white'>
    

<div className=" flex items-center flex-col md:flex-row justify-around ">

 <div className='max-w-2xl'>
   <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
    About Us
  </p>

  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
    Making Motorcycle Spare Parts Easy to Find
  </h1>

  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
    We help riders find the right motorcycle spare parts without the hassle of searching across multiple garages and suppliers.
  </p>
 </div>

<div className="mt-10 relative w-full max-w-xl h-80 rounded-xl overflow-hidden border border-white/10">
  <Image src={bg2} alt="bike" fill className="object-cover" />
</div>
</div>
<div className=" flex items-center flex-col md:flex-row justify-around ">


<div className="mt-10 relative w-full max-w-xl h-80 rounded-xl overflow-hidden border border-white/10">
  <Image src={bg2} alt="bike" fill className="object-cover" />
</div>
 <div className='max-w-2xl'>

  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
    Our Story
  </h1>

  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
  AMG Auto Parts & Service was started with a simple goal — to make it easier for riders to find the spare parts they need.

As mechanics working in local garages, we saw how difficult it was for customers to locate the correct parts. Many had to visit multiple shops or wait days just to find a single component.

We realized that with the right network of garages, dismantlers, and suppliers, most parts can be sourced faster and at better prices.

So we built this service to connect riders with the parts they need — without the stress.
  </p>
 </div>
</div>






      </div>
      
    </div>
    </>
  )
}

export default AboutUs