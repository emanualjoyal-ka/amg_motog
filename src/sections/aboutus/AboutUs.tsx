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
    





      </div>
      
    </div>
    </>
  )
}

export default AboutUs