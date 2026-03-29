'use client'
import RequestForm from '@/src/components/main/RequestForm'
import SuccessPopUp from '@/src/components/SuccessPopUp'
import ToContactPage from '@/src/sections/ToContactPage'
import React from 'react'


const page = () => {

    const [showPopup, setShowPopup] = React.useState(false)


  return (
    <div className='pt-20 md:px-16  text-white bg-[#0C0B1D] md:pt-30 px-3  min-h-screen'>
        <SuccessPopUp showPopup={showPopup}/>
        
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 text-center mb-2">
  Request
</p>
 <h1 className='font-bold text-xl text-center text-white md:text-3xl cursor-default mb-3'>Request a Motorcycle Spare Part</h1>
            <div className="w-30 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-4"></div>
        
        <p className='text-[silver] text-center mt-2'>Looking for a specific part? Whether it’s common or hard to find, we’ll help you source it quickly and reliably.</p>
    <div className='flex flex-col xl:flex-row gap-5 md:gap-10 mt-12 md:mt-16'>

       <div className='xl:w-[45%] order-2 md:order-1  py-8 bg-white/5 border border-white/10 rounded-2xl px-6 backdrop-blur-md'>
               
         <h2 className='font-bold text-white text-lg tracking-wide cursor-default  mb-3'>Why Use Our Service</h2>
      <p className='text-[silver]'>We specialize in sourcing motorcycle spare parts that are often unavailable in local markets. Our network includes trusted dealers, mechanics, and suppliers to ensure you get quality parts.</p>
<div className="w-full h-[1px] bg-white/10 my-6"></div>
      <h2 className='font-bold text-lg tracking-wide text-white cursor-default mt-8 mb-3'>Tips for Faster Processing</h2>
       <p className='text-[silver]'>You can :</p>
        <ul className='list-disc marker:text-white pl-5 space-y-2 mt-2 text-[silver]'>
        <li>Mention part name clearly</li>
        <li>Provide the exact motorcycle model</li>
        <li>Upload an image if available</li>
        <li>Can upload screenshot from internet</li>
        <li>Upload photo of broken part</li>
        </ul>
<div className="w-full h-[1px] bg-white/10 my-6"></div>
        <h2 className='font-bold text-lg tracking-wide text-white cursor-default mt-8 mb-3'>What Happens Next</h2>
        <p className='text-[silver]'>Once you submit your request:</p>
<ul className='list-disc marker:text-white pl-5 space-y-2 mt-2 text-[silver]'>
  <li>Our team reviews your requirement</li>
  <li>
We check availability with suppliers

  </li>
  <li>
You will be contacted for confirmation

  </li>
  <li>
Order is processed and shipped

  </li>
</ul>
       </div>


    <div className=' xl:w-[55%] order-1 md:order-2 py-6 md:py-8 px-4 md:px-6 
bg-white/5 border border-white/10 rounded-2xl '>

        
        <h1 className='text-center cursor-default md:text-left font-bold  md:text-lg mb-8'>Tell us what part you need.</h1>
      
      
      <RequestForm onSuccess={() => {
            setShowPopup(true)
            setTimeout(() => setShowPopup(false), 4000)
          }}/>
      </div>


    </div>

      
      
<p className='text-center mt-10 md:mt-20 text-[silver] text-lg mb-10 md:mb-16 max-w-xl mx-auto'>
  Our team carefully reviews every request to ensure you get the correct part without hassle.
</p>

<ToContactPage/>
    </div>
  )
}

export default page