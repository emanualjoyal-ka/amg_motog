'use client'
import ContactInfo from "@/src/components/ContactInfo";
import FollowInfo from "@/src/components/FollowInfo";
import Form from "@/src/components/main/ContactForm";
import SuccessPopUp from "@/src/components/SuccessPopUp";
import React from "react";

const page = () => {

  const [showPopUp,setShowPopUp]=React.useState(false);

  return (
    <div className='py-20 md:py-30 bg-[#0C0B1D] px-3 overflow-hidden min-h-screen'>
      <SuccessPopUp title="Your message has been received." message="We will contact you soon." showPopup={showPopUp}/>
     <div className="text-center mb-12">
  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
    Contact
  </p>

  <h1 className="text-2xl md:text-4xl font-bold text-white">
    Get in Touch
  </h1>
            <div className="w-30 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-4"></div>


  <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
    Have questions about a spare part or your request? Reach out and we’ll get back to you as soon as possible.
  </p>
</div>
      <div className='grid relative  lg:grid-cols-3 items-start max-w-6xl mx-auto gap-5'>
        {/* <div className='absolute m-auto rounded-full bg-[#16072D] h-150 w-200 inset-0 blur-3xl'/> */}
        <Form onSuccess={() => {
            setShowPopUp(true)
            setTimeout(() => setShowPopUp(false), 4000)
          }}/>
        <div className='md:col-span-1'>
         <ContactInfo/>
         <FollowInfo/>
        </div>
      </div>
    </div>
  )
}

export default page