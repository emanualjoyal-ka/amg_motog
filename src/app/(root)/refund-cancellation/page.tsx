import {refund} from '../../../constants/refund';


const page = () => {
  return (
     <div className='pt-20 md:pt-25 pb-8 px-3 md:px-16 min-h-screen'>
      <h1 className='text-3xl  md:text-4xl font-bold text-white text-center'>Refund & Cancellation Policy</h1>
      <div className='border border-gray-600 p-8 rounded-lg mt-5 text-white'>
      {refund.map((item)=>(
          <ul key={item.id} className='list-disc mb-10'>
        <li className='font-bold'>{item.title} : <span className='font-normal'>{item.description}</span></li>
      </ul>
      ))}
      </div>
    </div>
  )
}

export default page