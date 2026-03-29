import Image from 'next/image'
import bg1 from "@/public/aboutus/img2.jpg"
import bg2 from "@/public/aboutus/img1.jpg"


const AboutUs = () => {
  return (
    <>
    <div className='relative min-h-screen overflow-hidden'>
        <Image src={bg1} fill priority alt='spareImage' className='object-cover'/>
    <div className='absolute z-10 bg-black/70 inset-0' />

    
<div className='absolute inset-0 z-20 px-5 py-25 md:py-35 md:px-16 text-white'>
    

<div className="max-w-3xl">

  <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
    About Us
  </p>

  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
    Making Motorcycle Spare Parts Easy to Find
  </h1>

  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
    We built this platform to solve a real problem, finding the right motorcycle spare parts shouldn’t be difficult. From everyday components to rare parts, we help riders get what they need without the hassle.
  </p>

</div>

<div className="mt-10 relative w-full max-w-md h-60 rounded-xl overflow-hidden border border-white/10">
  <Image src={bg2} alt="bike" fill className="object-cover" />
</div>

<div className="mt-10 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md">
  <h2 className="text-xl font-semibold mb-3">What We Do</h2>
  <p className="text-gray-300 text-sm leading-relaxed">
    We connect riders with trusted suppliers and mechanics to source both common and hard-to-find motorcycle parts efficiently and reliably.
  </p>
</div>

<div className="flex gap-10 mt-10 text-center">
  <div>
    <p className="text-2xl font-bold">100+</p>
    <p className="text-gray-400 text-xs">Parts Sourced</p>
  </div>
  <div>
    <p className="text-2xl font-bold">50+</p>
    <p className="text-gray-400 text-xs">Happy Riders</p>
  </div>
</div>



      </div>
      
    </div>
    </>
  )
}

export default AboutUs