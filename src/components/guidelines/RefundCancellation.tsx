import {refund} from '../../constants/refund';

const RefundCancellation = () => {
  return (
    <>
      <div id='refund-cancellation' className='scroll-mt-24 border border-[#26345D] p-8 rounded-lg mt-5 text-white'>
     <h1 className='text-3xl  md:text-4xl font-bold text-white'>Refund & Cancellation Policy</h1>
    <ul className="list-disc">
  {refund.map((items) => (
    <li key={items.id} className="my-4">
      {items.desc}
    </li>
  ))}
</ul>
      </div>
    </>
  )
}

export default RefundCancellation