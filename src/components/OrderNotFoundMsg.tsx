

const OrderNotFoundMsg = () => {
  return (
    <>
     <div className='border border-red-500 flex  items-center gap-2 p-3 md:gap-4 rounded-lg md:p-8 max-w-5xl mx-auto mt-5'>
                <div className='w-10 h-10 p-2 md:w-12 md:h-12 bg-red-500/30 rounded-full flex items-center justify-center'>
                  <div className='w-6 md:w-8 text-red-500'>
<svg fill="currentcolor" className='h-full w-full' viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"/><path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"/></svg>
                </div>
                </div>

                <div>
                  <p className='font-bold text-xl md:text-2xl'>Order not found</p>
                <p className='text-red-500 text-sm md:text-md'>The Order ID you entered could not be found</p>
                <p className='text-sm md:text-md text-[silver] mt-2'>Please check your order ID and try again.</p>
                </div>

              </div>
    </>
  )
}

export default OrderNotFoundMsg