import { contactDetails } from '../constants/contactInfo'

const ContactInfo = () => {

  return (
    <>
    <div className="border-[#26345D] cursor-default border bg-[#303030]/20  backdrop-blur-md p-5 md:p-8 rounded-lg">
            <p className="text-xl md:text-2xl md:text-left text-center text-white">Contact Information</p>
            {contactDetails.map((item)=>(
                <div key={item.id} className="flex items-center gap-3 mt-5">
              <div  className='bg-white/30 border border-0.5 border-white/40 rounded-full p-2 flex items-center justify-center'>
                {item.icon}
              </div>
              <div>
                <p className="text-white">{item.type}</p>
                <p className="text-white md:w-60">{item.value}</p>
              </div>
            </div>
            ))}
          </div>
    </>
  )
}

export default ContactInfo