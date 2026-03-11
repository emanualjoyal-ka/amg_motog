import React from 'react'

const Privacy = () => {
  return (
   <>
    <div id='privacy' className='scroll-mt-24 border border-[#26345D] p-8 rounded-lg mt-5 text-white'>
          <h1 className='text-3xl  md:text-4xl font-bold text-white'>Privacy Policy</h1>
          <p className="text-white mb-3">We value your privacy and are committed to protecting your personal information.</p>
          <div>
            <p className='font-bold'>Information we collect :</p>
          <p>When you submit a request, we may collect :</p>
          <ul className='list-disc'>
            <li>Name</li>
            <li>Phone number</li>
            <li>Location</li>
            <li>Motorcycle details</li> 
            <li>Photos of requested parts</li>
          </ul>
          </div>

          <div className='mt-5'>
            <p className='font-bold'>How We Use Information :</p>
            <p>Your information is used only to :</p>
            <ul className='list-disc'>
              <li>Process spare part requests</li>
              <li>contact you regarding your order</li>
              <li>improve our services</li>
            </ul>
          </div>

          <div className='mt-5'>
            <p className='font-bold'>Data Protection :</p>
            <p>We take reasonable measures to protect your personal information.</p>
          </div>
         
          <div className='mt-5'>
            <p className='font-bold'>No Data Selling :</p>
            <p>We do not sell or share your personal information with third parties except when required to process orders or shipping.</p>
          </div>


          </div>
   </>
  )
}

export default Privacy