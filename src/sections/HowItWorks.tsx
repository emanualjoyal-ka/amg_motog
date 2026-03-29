import { Steps } from "../constants/how-it-works"

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="bg-[#0C0B1D] cursor-default lg:scroll-mt-20 text-white py-25 px-6"
    >
      <div className="max-w-6xl mx-auto text-center ">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">
  PROCESS
</p>
        <h2 className="text-2xl md:text-3xl leading-snug text-[silver] font-bold mb-4 drop-shadow-[0_2px_1px_rgba(255,255,255,0.6)]">How It Works</h2>
            <div className="w-30 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-4"></div>

       <p className="text-[silver] text-base md:text-lg mt-3 max-w-xl mx-auto leading-relaxed">
  From request to delivery, our process is designed to be smooth, transparent, and reliable.
</p>
      </div>


      <div className="max-w-8xl mt-15 md:mt-24 mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-0">
  {Steps.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center flex-1 relative "
    >
      
      <div className="flex items-center w-full justify-center mb-6 relative">
        
        <div className="w-10 h-10 rounded-full 
        bg-gradient-to-b from-gray-100 via-gray-300 to-gray-600
        border border-gray-400
        shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_2px_6px_rgba(0,0,0,0.4)] 
        text-gray-800 
        drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)] 
        flex items-center justify-center font-semibold z-10 ">
          {item.step}
        </div>

        {index !== Steps.length - 1 && (
          <div className="hidden  lg:block absolute top-5 left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent -z-0"></div>
        )}

      </div>

      <h3 className="font-medium leading-snug text-lg mb-2 tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
        {item.title}
      </h3>

      <p className="text-sm text-[silver] max-w-[200px]">
        {item.desc}
      </p>

    </div>
  ))}
</div>
<div className="text-center mt-20">
  <p className="text-[silver] text-lg font-medium leading-snug">
    Designed to make spare part sourcing simple and stress-free.
  </p>
</div>
    </div>
  )
}

export default HowItWorks