import AboutUs from '@/src/sections/aboutus/AboutUs'
import CallToAction from '@/src/sections/CallToAction'


const page = () => {
  return (
    <div className='text-white bg-[#0C0B1D] bg-[radial-gradient(circle_at_top,rgba(77,47,140,0.35),transparent_50%)]'>
    <AboutUs/>

<CallToAction/>
    </div>
  )
}

export default page