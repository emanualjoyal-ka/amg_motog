'use client'
import RequestForm from '@/src/components/main/RequestForm'
import SuccessPopUp from '@/src/components/SuccessPopUp'
import React from 'react'


const page = () => {

    const [showPopup, setShowPopup] = React.useState(false)


  return (
    <div className='pt-15 text-white bg-[#0C0B1D] md:pt-30 pb-8 md:pb-20 px-3  min-h-screen bg-[radial-gradient(circle_at_top,rgba(77,47,140,0.35),transparent_50%)]'>
        <SuccessPopUp showPopup={showPopup}/>
      
      <div className='border-1 border-[#26345D] bg-[#303030]/20 max-w-4xl mx-auto backdrop-blur-md rounded-lg py-5 md:py-8 mt-5 px-3 md:px-5'>

        <div className='px-5 cursor-default'>
        <h1 className='text-center md:text-left font-bold text-xl md:text-2xl md:mb-2 mb-5'>Tell us what part you need.</h1>
      <p>You can :</p>
        <ul className='list-disc'>
        <li>Enter part name</li>
        <li>Upload photo</li>
        <li>Upload screenshot from internet</li>
        <li>Upload photo of broken part</li>
        </ul>
      </div>
      <RequestForm onSuccess={() => {
            setShowPopup(true)
            setTimeout(() => setShowPopup(false), 4000)
          }}/>
      </div>
    </div>
  )
}

export default page