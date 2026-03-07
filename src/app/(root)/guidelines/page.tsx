import {guideline} from "../../../constants/guidelines"

const page = () => {
  return (
   <div className='pt-20 bg-[#0C0B1D] md:pt-25 pb-8 px-3 md:px-16 min-h-screen'>
          <h1 className='text-3xl  md:text-4xl font-bold text-white'>Customer Guidelines</h1>
         <p>To ensure a smooth experience when requesting motorcycle spare parts, please follow these guidelines :</p>
         <div className='border border-[#26345D] p-8 rounded-lg mt-5 text-white'>
             <p className="font-bold">Provide Accurate Information</p>
            <p>When submitting a request, include correct details about your motorcycle such as brand, model, and year.</p>
           <div className="my-5">
        <p className="font-bold">Upload Clear Photos</p>
        <p>If possible, upload photos of :</p>
        <ul className="list-disc">
            <li>the broken part</li>
            <li>the area of the bike where the part is located</li>
            <li>a screenshot of the required part from the internet</li>
        </ul>
        <p>This helps us identify the correct spare part faster.</p>
           </div>
         {guideline.map((item)=>(
             <div key={item.id} className="mb-5">
                <p className="font-bold">{item.title}</p>
                <p>{item.desc}</p>
             </div>
         ))}
         </div>
       </div>
  )
}

export default page