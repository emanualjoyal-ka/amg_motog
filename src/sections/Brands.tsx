import {brands} from "../constants/brands";

const Brands = () => {

  return (
    <div className="bg-[#0C0B1D] cursor-default text-white px-6 md:px-16 md:py-25">
<p className="text-xs uppercase tracking-[0.3em] text-gray-500 text-center mb-2">
  Brands
</p>
      <h1 className="text-center font-bold text-2xl  md:text-3xl text-[silver] mb-3 drop-shadow-[0_2px_1px_rgba(255,255,255,0.6)]">
        Supported Motorcycle Brands
      </h1>
            <div className="w-30 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-4"></div>


     <p className="text-center text-gray-400 text-base md:text-lg mb-12 mt-3 max-w-xl mx-auto leading-relaxed">
  Supporting a wide range of motorcycle brands — from everyday rides to premium machines.
</p>

      <div className="bg-white/5 border border-white/10 rounded-2xl py-10 px-6 backdrop-blur-md">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">
    {brands.map((item, index) => (
      <div
        key={index}
        className="opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300"
      >
        {item.brand}
      </div>
    ))}
  </div>
</div>

      <p className="text-center text-[silver] font-light leading-relaxed text-xs max-w-3xl mx-auto mt-10">
        All brand names and logos are the property of their respective owners.
        AMG Auto Parts & Service is not affiliated with or endorsed by these brands.
      </p>

    </div>
  )
}

export default Brands