import ContactInfo from "@/src/components/ContactInfo";
import FollowInfo from "@/src/components/FollowInfo";
import Form from "@/src/components/main/ContactForm";

const page = () => {
  return (
    <div className='pt-25 px-3 pb-8 overflow-hidden min-h-screen flex items-center justify-center'>
      <div className='grid relative md:grid-cols-3 gap-5'>
        {/* <div className='absolute m-auto rounded-full bg-[#16072D] h-150 w-200 inset-0 blur-3xl'/> */}
        <Form/>
        <div className='md:col-span-1'>
         <ContactInfo/>
         <FollowInfo/>
        </div>
      </div>
    </div>
  )
}

export default page