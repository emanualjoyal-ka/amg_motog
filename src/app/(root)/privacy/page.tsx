import {privacy, main, privacyExtra} from '../../../constants/privacy';

const page = () => {
  return (
    <div className='pt-20 md:pt-25 pb-8 px-3 md:px-16 min-h-screen'>
          <h1 className='text-3xl  md:text-4xl font-bold text-white text-center'>Privacy Policy</h1>
          <div className='border border-gray-600 p-5 rounded-lg mt-5 text-white'>
          <p className='md:text-center'>{main}</p>
          <p className='text-xl font-bold pt-5'>1. Information we collect :</p>
          {privacy.map((item)=>(
              <div key={item.id} className='my-5'>
            <p className='font-bold'>{item.title}</p>
            <p>{item.description}</p>
          </div>
          ))}
          <p className='pt-5 text-2xl font-bold'>2. Use of personal information :</p>
          {privacyExtra.map((item)=>(
            <p key={item.id} className='pt-2 my-5'>{item.description}</p>
          ))}
          </div>
        </div>
  )
}

export default page