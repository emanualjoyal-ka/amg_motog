import terms from '../../../constants/terms';


const page = () => {
  return (
    <div className='pt-20 bg-[#0C0B1D] md:pt-25 pb-8 px-3 md:px-16 min-h-screen'>
      <h1 className='text-3xl  md:text-4xl font-bold text-white'>Terms & Conditions</h1>
      <p className='text-white'>By using this website and submitting a spare part request, you agree to the following terms :</p>
      <div className='border border-[#26345D] p-4 rounded-lg mt-5 text-white'>
      {terms.map((item)=>(
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