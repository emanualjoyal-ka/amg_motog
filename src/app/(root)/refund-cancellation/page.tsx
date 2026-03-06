import {refund} from '../../../constants/refund';


const page = () => {
  return (
     <div className='pt-20 md:pt-25 pb-8 px-3 md:px-16 min-h-screen'>
      <h1 className='text-3xl  md:text-4xl font-bold text-white text-center'>Refund & Cancellation Policy</h1>
      <div className='border border-[#26345D] p-8 rounded-lg mt-5 text-white'>
    {refund.map((items)=>(
      <ul className='list-disc'>
        <li key={items.id} className='my-4'>{items.desc}</li>
      </ul>
    ))}
      </div>
    </div>
  )
}

export default page