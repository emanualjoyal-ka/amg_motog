import {brands} from "../constants/brands";

const Brands = () => {

  return (
    <div className="bg-[#0C0B1D] cursor-default text-white px-6 md:px-16 md:my-25">

      <h1 className="text-center font-bold text-3xl md:text-4xl text-[silver] mb-3 drop-shadow-[0_2px_1px_rgba(255,255,255,0.6)]">
        Supported Motorcycle Brands
      </h1>

      <p className="text-center mb-20 text-gray-300">
        We help locate spare parts for many popular motorcycles.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center mb-12">
        {brands.map((item, index) => (
          <div
            key={index}
            className="drop-shadow-[0_2px_1px_silver]  md:opacity-80 hover:opacity-100 transition duration-300"
          >
            {item.brand}
          </div>
        ))}
      </div>

      <p className="text-center text-[silver] text-xs max-w-3xl mx-auto mt-10">
        All brand names and logos are the property of their respective owners.
        AMG Auto Parts & Service is not affiliated with or endorsed by these brands.
      </p>

    </div>
  )
}

export default Brands