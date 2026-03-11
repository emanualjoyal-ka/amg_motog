import terms from '../../constants/terms';

const TermsAndConditions = () => {
  return (
   <>
    <div id='terms-conditions' className='scroll-mt-24 border border-[#26345D] p-8 rounded-lg mt-5 text-white'>
      <h1 className='text-3xl  md:text-4xl font-bold text-white'>Terms & Conditions</h1>
      <p className='text-white mb-3'>By using this website and submitting a spare part request, you agree to the following terms :</p>
      {terms.map((item)=>(
          <div key={item.id} className='mb-5'>
        <p className='font-bold'>{item.title}</p>
        <p>{item.description}</p>
      </div>
      ))}
      </div>
   </>
  )
}

export default TermsAndConditions