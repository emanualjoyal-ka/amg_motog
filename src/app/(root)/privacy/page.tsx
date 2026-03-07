
const page = () => {
  return (
    <div className='pt-20 bg-[#0C0B1D] md:pt-25 pb-8 px-3 md:px-16 min-h-screen'>
          <h1 className='text-3xl  md:text-4xl font-bold text-white'>Privacy Policy</h1>
          <p>We value your privacy and are committed to protecting your personal information.</p>
          <div className='border border-[#26345D] p-8 rounded-lg mt-5 text-white'>
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
        </div>
  )
}

export default page