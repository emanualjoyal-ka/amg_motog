import {shipping} from '../../constants/shipping';

const ShippingPolicy = () => {
  return (
    <>
     <div id='shipping' className='scroll-mt-24 border border-[#26345D] p-8 rounded-lg mt-5 text-white'>
          <h1 className='text-3xl  md:text-4xl font-bold text-white mb-3'>Shipping Policy</h1>
          {shipping.map((item)=>(
              <div key={item.id} className='mb-5'>
            <p className='font-bold'>{item.title}</p>
            <p>{item.description}</p>
          </div>
          ))}
          </div>
    </>
  )
}

export default ShippingPolicy