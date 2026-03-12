import CallToAction from "@/src/sections/CallToAction"
import Hero from "@/src/sections/Hero"
import HowItWorks from "@/src/sections/HowItWorks"
import PartsWeHelpSearch from "@/src/sections/PartsWeHelpSearch"


const page = () => {
  return (
    <div>
     <Hero/>
     <PartsWeHelpSearch/>
     {/* <HowItWorks/> */}
     <CallToAction/>
    </div>
  )
}

export default page