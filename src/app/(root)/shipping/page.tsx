import {shipping} from '../../../constants/shipping';

const page = () => {
  return (
     <div className='pt-20 bg-[#0C0B1D] md:pt-25 pb-8 px-3 md:px-16 min-h-screen'>
          <h1 className='text-3xl  md:text-4xl font-bold text-white text-center'>Shipping Policy</h1>
          <div className='border border-[#26345D] p-8 rounded-lg mt-5 text-white'>
          {shipping.map((item)=>(
              <div key={item.id} className='mb-5'>
            <p className='font-bold'>{item.title}</p>
            <p>{item.description}</p>
          </div>
          ))}
          </div>
        </div>
  )
}

export default page