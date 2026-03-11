import CustomerGuide from "@/src/components/guidelines/CustomerGuide"
import Privacy from "@/src/components/guidelines/Privacy"
import RefundCancellation from "@/src/components/guidelines/RefundCancellation"
import ShippingPolicy from "@/src/components/guidelines/ShippingPolicy"
import TermsAndConditions from "@/src/components/guidelines/TermsAndConditions"

const page = () => {
  return (
   <div className='pt-20 bg-[#0C0B1D] md:pt-25 pb-8 px-3 md:px-16 min-h-screen'>
       <CustomerGuide/>
       <TermsAndConditions/>
       <Privacy/>
       <RefundCancellation/>
       <ShippingPolicy/>
       </div>
  )
}

export default page