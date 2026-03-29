
import { part } from "../constants/parts"


const PartsWeHelpSearch = () => {

    

   


  return (
    <div className='min-h-screen flex items-center justify-center bg-[#0C0B1D] px-5 lg:px-15 pt-25 md:pb-25'>
        <div>
            <p className="text-xs uppercase text-center tracking-[0.3em] text-gray-500 mb-3"> PARTS </p>
            <h1 className='title text-center font-bold text-2xl text-[silver] md:text-3xl cursor-default drop-shadow-[0_2px_1px_rgba(255,255,255,0.6)]'>Parts We Help Source</h1>
            <div className="w-30 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-4"></div>
            <p className="text-center text-[silver] font-medium leading-snug mt-3 max-w-xl mx-auto text-xl tracking-wide">
  From essential components to rare parts sourced with precision and reliability.
</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-y-5 md:gap-8 mt-10 md:mt-15'>
            {part.map((item,index)=>(
            <div key={index} className='bg-white/5 backdrop-blur-md border-1 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]  transition-all duration-500  border-white/10 rounded-lg p-8 flex flex-col items-center'>
                <div className='w-20'>
                    {item.icon}
                </div>
                <p className='mt-5 cursor-default font-bold text-xl'>{item.name}</p>
                <p className='w-[70%] cursor-default leading-relaxed font-light text-center mt-2'>{item.desc}</p>
            </div>
        ))}
        </div>
     
        </div>
    </div>
  )
}

export default PartsWeHelpSearch