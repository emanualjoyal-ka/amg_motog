import { part } from "../constants/parts"


const PartsWeHelpSearch = () => {

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#0C0B1D] px-5 lg:px-15 pt-15'>
        <div>
            <h1 className='text-center font-bold text-3xl text-[silver] md:text-4xl'>Parts We Help Source</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 md:gap-y-10 mt-10 md:mt-20'>
            {part.map((item,index)=>(
            <div key={index} className='border hover:scale-105 hover:-translate-y-2 transistion-all duration-300 metallic-border border-[#26345D] rounded-lg py-6 md:pt-8 md:pb-10 flex flex-col items-center'>
                <div className='w-20'>
                    {item.icon}
                </div>
                <p className='mt-5 font-bold text-2xl'>{item.name}</p>
                <p className='w-[70%] text-center mt-2'>{item.desc}</p>
            </div>
        ))}
        </div>
        </div>
    </div>
  )
}

export default PartsWeHelpSearch