import {ChooseUs} from "../constants/chooseUs"

const WhyChooseUs = () => {


  return (
    <>
    <div className=" mt-5 md:mt-15">
          {
            ChooseUs.map((item,index)=>(
              <div key={index} className='feat flex items-center gap-2 md:gap-4 mt-5'>
                <div className='w-10 h-10 border border-[#A0A0FF]/30 md:w-15 md:h-15 bg-gradient-to-br from-[#1A1A2E] to-[#2B2B4D] rounded-full flex items-center justify-center'>
                
                    {item.icon}
                  
                </div>
                <h3 className='md:font-medium cursor-default text-white md:text-xl'>{item.title}</h3>
              </div>
            ))
          }
        </div>
    </>
  )
}

export default WhyChooseUs