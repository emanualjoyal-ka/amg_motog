import AboutUs from '@/src/sections/aboutus/AboutUs'
import CallToAction from '@/src/sections/CallToAction'


const page = () => {
  return (
    <div className='text-white bg-[#0C0B1D] bg-[radial-gradient(circle_at_top,rgba(77,47,140,0.35),transparent_50%)] '>
      {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[silver] to-transparent z-10"></div> */}
    <AboutUs/>

<CallToAction/>
    </div>
  )
}

export default page