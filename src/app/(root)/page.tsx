'use client'
import Brands from "@/src/sections/Brands"
import CallToAction from "@/src/sections/CallToAction"
import Hero from "@/src/sections/Hero"
import HowItWorks from "@/src/sections/HowItWorks"
import PartsWeHelpSearch from "@/src/sections/PartsWeHelpSearch"
import axios from "axios"
import { useEffect } from "react"


const page = () => {

   useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/health`).catch((err) => {
      console.log("Backend ping failed:", err.message);
    });
  }, []);


  return (
    <div>
     <Hero/>
     <PartsWeHelpSearch/>
     <HowItWorks/>
     <Brands/>
     <CallToAction/>
    </div>
  )
}

export default page