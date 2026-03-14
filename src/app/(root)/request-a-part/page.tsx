import RequestForm from '@/src/components/main/RequestForm'


const page = () => {
  return (
    <div className='pt-15 text-white bg-[#0C0B1D] md:pt-30 pb-8 md:pb-20 px-3 md:px-15 xl:px-70 min-h-screen bg-[radial-gradient(circle_at_top,rgba(77,47,140,0.35),transparent_50%)]'>
      <div className='border-1 border-[#26345D] bg-[#303030]/20  backdrop-blur-md rounded-lg py-5 md:py-8 mt-5 px-3 md:px-5'>

        <div className='px-5'>
        <h1 className='text-center md:text-left font-bold text-xl md:text-2xl md:mb-2 mb-5'>Tell us what part you need.</h1>
      <p>You can :</p>
        <ul className='list-disc'>
        <li>Enter part name</li>
        <li>Upload photo</li>
        <li>Upload screenshot from internet</li>
        <li>Upload photo of broken part</li>
        </ul>
      </div>
      <RequestForm/>
      </div>
    </div>
  )
}

export default page