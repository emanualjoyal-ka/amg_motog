'use client'
import OrderNotFoundMsg from '@/src/components/OrderNotFoundMsg'
import React, { useEffect, useState } from 'react'
import {steps} from "../../../constants/trackingProgress";
import { useGetTracker } from '@/src/controllers/requestController';

const page = () => {

  const [search,setSearch]=useState("")
  const [orderId, setOrderId] = useState("")  //here
  const [isSearching, setIsSearching] = useState(false)  //here

  const statusMap: Record<string, number> = {
  "Request Received": 1,
  "Searching Part": 2,
  "Price Confirmed": 3,
  "Part Purchased": 4,
  "Packed": 5,
  "Shipped": 6,
  "Delivered": 7
};

const { data, isLoading, isError } = useGetTracker(orderId); //here

 

const currentStatus = statusMap[data?.data?.status] || 0; //setcurrent when api calls

  const handleSearch=(e:React.FormEvent)=>{
     e.preventDefault();
  const trimmed = search.trim();
  setSearch(trimmed);
  if (!trimmed) return;
  setIsSearching(true); //check here
  setOrderId(trimmed);  
  }

  useEffect(() => {
  if (!isLoading) {
    setIsSearching(false);    //check here
  }
}, [isLoading]);

  return (
    <div className='pt-20 md:pt-30 px-3 text-white bg-[#0C0B1D] bg-[radial-gradient(circle_at_top,rgba(77,47,140,0.35),transparent_50%)] min-h-screen'>
              <h1 className="text-center select-none font-bold text-3xl md:text-4xl text-[silver] mb-3 drop-shadow-[0_2px_1px_rgba(255,255,255,0.6)]">
                Track Your Order
                </h1>
                <p className='text-center select-none text-[silver]'>Enter your Order ID below to check the latest status of your spare part request and delivery.</p>
                <p className='text-center select-none text-[silver]'>You can find your Order ID in the confirmation message sent via WhatsApp or SMS.</p>
                 <div className="relative border border-[#372A5F] max-w-5xl mx-auto mt-10 flex flex-col gap-4 md:flex-row p-4 md:p-8  rounded-2xl">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e)=>{
              if(e.key === "Enter"){
                handleSearch(e)
              }
            }}
            type="text"
            placeholder="Enter Order ID (e.g., AMG-7F3D9A21)"
            className="w-full md:w-[80%] border py-5 border-[#372A5F] outline-none bg-[#303030]/20 backdrop-blur-md rounded-lg px-3 focus:shadow-[1px_1px_6px_3px_rgba(60,8,126,0.8)] transitin-all duration-300"
          />
          <button
            onClick={handleSearch}
            className="w-full md:w-[20%] font-bold bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)] py-5 px-3 cursor-pointer rounded-lg transition-all duration-300"
          >
            Track Order
          </button>

        </div>

        {isSearching && (
          <div className='gap-2 p-3 md:gap-4 md:p-8 max-w-5xl mx-auto mt-5 flex items-center justify-center'>
 <div className='border-b-5 border-t-2 border-l-2 border-r-2 border-purple-500 h-10 w-10 md:h-15 md:w-15 rounded-full animate-spin drop-shadow-sm drop-shadow-purple-500'/>
 </div>
)}

        {!isSearching && orderId && isError &&<OrderNotFoundMsg/>}

      
            {!isSearching && orderId && data?.success && (
            <div className='border gap-5 md:gap-0 border-[#372A5F] rounded-lg p-8 max-w-5xl mx-auto mt-5 flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-0'>
             {steps.map((item, index) => {

              const isComplete=item.id<=currentStatus;
            

              return (
                (
                 <div
                   key={index}
                   className="flex select-none flex-col items-center text-center flex-1 relative"
                 >
                   
                   <div className="flex  items-center w-full justify-center mb-3 md:mb-6 relative">
                     
                     <div className={`w-10 h-10 rounded-full 
                    
                     border 
                     
                     text-gray-800 
                     
                     flex items-center justify-center font-semibold z-10  ${isComplete ? "bg-green-500 border-green-500 shadow-[inset_0_2px_4px_green,0_2px_6px_rgba(0,0,0,0.4)] drop-shadow-[0_1px_1px_green]" : "  border-gray-800 bg-gradient-to-b from-gray-500 via-gray-800 to-gray-600"} transition-colors duration-300`}>
                       {isComplete ? (
                        <div className='text-green-900/85 w-6'>
<svg fill="currentcolor" className='w-full h-full' viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm25-91.5-29,35L76,94c-4.5-3.5-10.5-2.5-14,2s-2.5,10.5,2,14c6,4.5,12.5,9,18.5,13.5,4.5,3,8.5,7.5,14,8,1.5,0,3.5,0,5-1l3-3,22.5-27c4-5,8-9.5,12-14.5,3-4,4-9,.5-13L138,71.5c-3.5-2.5-9.5-2-13,2Z"/></svg>

                        </div>
                       ) :""}
                     </div>
             
                     {index !== steps.length - 1 && (
                       <div className={`hidden lg:block absolute top-5 left-1/2 w-full h-[2px] -z-0 ${item.id < currentStatus ? "bg-green-500 drop-shadow-[0_1px_1px_green]" : "bg-gray-600"} transition-colors duration-300`}></div>
                     )}
             
                   </div>
             
                   <h3 className={`mb-2 mx-3 ${isComplete ? "text-green-500" : "text-gray-600"}`}>
                     {item.label}
                   </h3>
             
                  
             
                 </div>
               )
              )
             }
               )}
            </div>

            )}
    </div>
  )
}

export default page