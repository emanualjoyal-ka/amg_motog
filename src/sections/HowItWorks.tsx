import { Steps } from "../constants/how-it-works"

const HowItWorks = () => {
  return (
    <div
      id="how-it-works"
      className="bg-[#0C0B1D] cursor-default lg:scroll-mt-20 text-white py-25 px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl text-[silver] font-bold mb-4 drop-shadow-[0_2px_1px_rgba(255,255,255,0.6)]">How It Works</h2>
        <p className="text-white">
          Getting the right motorcycle spare part is simple.
        </p>
      </div>


      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-0">
  {Steps.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center flex-1 relative"
    >
      
      <div className="flex items-center w-full justify-center mb-6 relative">
        
        <div className="w-10 h-10 rounded-full 
        bg-gradient-to-b from-gray-100 via-gray-300 to-gray-600
        border border-gray-400
        shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_2px_6px_rgba(0,0,0,0.4)] 
        text-gray-800 
        drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)] 
        flex items-center justify-center font-semibold z-10">
          {item.step}
        </div>

        {index !== Steps.length - 1 && (
          <div className="hidden lg:block absolute top-5 left-1/2 w-full h-[2px] bg-gray-600 -z-0"></div>
        )}

      </div>

      <h3 className="font-semibold text-lg mb-2 tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
        {item.title}
      </h3>

      <p className="text-sm text-[silver] max-w-[200px]">
        {item.desc}
      </p>

    </div>
  ))}
</div>
    </div>
  )
}

export default HowItWorks