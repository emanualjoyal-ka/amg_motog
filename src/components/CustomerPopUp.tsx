import { X } from 'lucide-react';

const CustomerPopUp = () => {

  return (
    <div className='absolute bg-black/50 px-2 top-0 left-0 w-full h-full z-50 flex items-center justify-center'>
        <div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2 max-w-md w-full mx-auto'>
        <div className='flex p-2'>
             <button
            className="rounded-full ml-auto cursor-pointer bg-red-500/20 p-1"
          >
            <X className='w-5 h-5 text-red-500'/>
          </button>
        </div>
            <div className='px-8 pb-8'>
                <h2 className='text-2xl font-bold mb-4 text-center'>Customer Details</h2>
            <p className='mb-2'><span className='font-semibold'>Order ID :</span> {}</p>
            <p className='mb-2'><span className='font-semibold'>Name :</span> {}</p>
            <p className='mb-2'><span className='font-semibold'>phone :</span> {}</p>
            <p className='mb-2'><span className='font-semibold'>Bike :</span> {}</p>
            <p className='mb-2'><span className='font-semibold'>Part :</span> {}</p>
            <p className='mb-2'><span className='font-semibold'>Condition :</span> {}</p>
            <p className='mb-2'><span className='font-semibold'>Status :</span> {}</p>
            <p className='mb-2'><span className='font-semibold'>Address :</span> {}</p>
            <p className='mb-2'><span className='font-semibold'>Description :</span> {}</p>
            <p className='mb-2'><span className='font-semibold'>Image :</span> {}</p>
            </div>
        </div>

    </div>
  )
}

export default CustomerPopUp