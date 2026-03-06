import Input from '@/src/components/Input'
import TextArea from '@/src/components/TextArea'
import React from 'react'

const page = () => {
  return (
    <div className='pt-15 md:pt-30 pb-8 px-3 md:px-140 min-h-screen'>
      <div>

        <div className='px-5'>
        <h1 className='text-center md:text-left font-bold text-xl md:text-2xl md:mb-2 mb-5'>Tell us what part you need.</h1>
      <p>You can :</p>
        <ul className='list-disc'>
        <li>Enter part name</li>
        <li>Upload photo</li>
        <li>Upload screenshot from internet</li>
        <li>Upload photo of broken part</li>
        </ul>
      </div>
      
      <form className='border-1 border-[#26345D] rounded-lg py-5 md:py-8 mt-5 px-3 md:px-5'>
        
        <div className='flex md:flex-row flex-col items-center gap-5'>
         <div className='w-full'>
           <label htmlFor='name'>Full Name</label>
        <Input id='name' placeholder='Enter your name'/>
         </div>
        <div className='w-full'>
          <label htmlFor='number'>Phone Number</label>
        <Input id='number' placeholder='Enter your phone number'/>
        </div>
        </div>


        <div className='flex md:flex-row flex-col mt-5 items-center gap-5'>
         <div className='w-full'>
           <label htmlFor='brand'>Bike Brand</label>
        <Input id='brand' placeholder='Bike Brand'/>
         </div>
        <div className='w-full'>
          <label htmlFor='model'>Bike Model</label>
        <Input id='model' placeholder="Enter your bike's model"/>
        </div>
        <div className='w-full'>
          <label htmlFor='year'>Year ( Optional )</label>
        <Input id='year'/>
        </div>
        </div>


         <div className='flex md:flex-row flex-col mt-5 items-center gap-5'>
         <div className='w-full'>
           <label htmlFor='part-name'>Part Name</label>
        <Input id='part-name' placeholder='Enter your name'/>
         </div>
        <div className='w-full'>
          <label htmlFor='condition'>Condition Preference</label>
        <Input id='condition' placeholder='Enter your phone number'/>
        </div>
        <div className='w-full'>
          <label htmlFor='image'>Upload Photo ( Optional )</label>
        <Input id='image' placeholder='Enter your phone number'/>
        </div>
        </div>

        <div className='mt-5'>
          <label htmlFor='address'>City / Address</label>
        <Input id='address' placeholder='Enter your phone number'/>
        </div>

        <div className='mt-5'>
        <label htmlFor='description'>Description ( Optional )</label>
        <TextArea id='description' placeholder='Any thing you want to add'/>
        </div>

            <button type='submit' className='bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)]
                      md:px-6 px-4 py-2 md:py-3 mt-4 font-bold transition-all duration-300 rounded-md text-white border-[1px] border-[#4D2F8C] cursor-pointer'>Request</button>


      </form>


      </div>
    </div>
  )
}

export default page