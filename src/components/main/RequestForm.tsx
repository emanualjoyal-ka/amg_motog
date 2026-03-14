'use client'
import React from 'react'
import Input from '../Input'
import TextArea from '../TextArea'
import YearSelection from '../YearSelection'
import ConditionSelect from '../ConditionSelect'

const RequestForm = () => {

    const [form,setForm]=React.useState({
        name:"",
        phone:"",
        brand:"",
        model:"",
        part:"",
        year: "",
        condition: "", 
        address:"",
        description:"",
        image: null as File | null
    })

    const [nameError,setNameError]=React.useState(false);
    const [phoneError,setPhoneError]=React.useState(false);
    const [brandError,setBrandError]=React.useState(false);
    const [modelError,setModelError]=React.useState(false);
    const [partError,setPartError]=React.useState(false);
    const [addressError,setAddressError]=React.useState(false);
    const [conditionError,setConditionError]=React.useState(false);

    const [error,setError]=React.useState("")

    const phoneNumber=/^\d{10}$/
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setForm({ ...form, image: e.target.files[0] });
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if(form.name===""){setNameError(true);}
        if(form.phone==="" || !(phoneNumber.test(form.phone)) ){setPhoneError(true);}
        if(form.brand===""){setBrandError(true);}
        if(form.model===""){setModelError(true);}
        if(form.part===""){setPartError(true);}
        if(form.address===""){setAddressError(true);}
        if(form.condition==="" || form.condition==="Select"){setConditionError(true);}
        if(form.name==="" || form.phone==="" || form.brand==="" || form.model==="" || form.part==="" || form.address==="" || form.condition==="" || form.condition==="Select"){setError("*Fill all required details.");return;}
        
       console.log(form);
        alert("Message sent successfully!");
        setForm({
           name:"",
        phone:"",
        brand:"",
        model:"",
        part:"",
        year: "",
        condition: "", 
        address:"",
        description:"",
        image: null as File | null
        });

    }


  return (
   <>
   <form onSubmit={handleSubmit} className='mt-5'>
        
        <div className='flex md:flex-row flex-col items-center gap-5 '>
         <div className='w-full'>
           <label htmlFor='name'>Full Name</label>
        <Input id='name' error={nameError}  value={form.name} placeholder='e.g. John Doe' onChange={(e) =>{setForm({...form, name: e.target.value}),setNameError(false)}}/>
         </div>
        <div className='w-full'>
          <label htmlFor='number'>Phone Number</label>
        <Input id='number' error={phoneError} value={form.phone} onChange={(e) => {

  const value = e.target.value.replace(/\D/g, ""); 
  if (value.length <= 10) {
    setForm({...form, phone: value});
  }

  setPhoneError(false)

  
}} placeholder='XXXXX-XXXXX'/>
        </div>
        </div>


        <div className='flex md:flex-row flex-col mt-5 items-center gap-5'>
         <div className='w-full'>
           <label htmlFor='brand'>Bike Brand</label>
        <Input id='brand'  error={brandError} value={form.brand} onChange={(e) => {setForm({...form, brand: e.target.value}),setBrandError(false)}} placeholder='e.g. Yamaha, Honda...'/>
         </div>
        <div className='w-full'>
          <label htmlFor='model'>Bike Model</label>
        <Input id='model' error={modelError} value={form.model} onChange={(e) => {setForm({...form, model: e.target.value}),setModelError(false)}} placeholder="e.g. YZF-R6, CBR500R"/>
        </div>
        <div className='w-full'>
          <label htmlFor='year'>Year ( Optional )</label>
        <YearSelection onSelect={(val) => setForm({...form, year: val.toString()})}/>
        </div>
        </div>


         <div className='flex md:flex-row flex-col mt-5 items-center gap-5'>
         <div className='w-full'>
           <label htmlFor='part-name'>Part Name</label>
        <Input id='part-name' error={partError} value={form.part} onChange={(e) => {setForm({...form, part: e.target.value}),setPartError(false)}} placeholder='e.g. Brake Pads, Fuel Tank'/>
         </div>
        <div className='w-full'>
          <label htmlFor='condition'>Condition Preference</label>
          <ConditionSelect error={conditionError} onSelect={(val) => {setForm({...form, condition: val}),setConditionError(false)}}/>
        </div>
        <div className='w-full'>
          <label htmlFor='image'>Upload Photo ( Optional )</label>
        <Input type='file' accept="image/*" id='image' onChange={handleFileChange} />
        </div>
        </div>

        <div className='mt-5'>
          <label htmlFor='address'>City / Address</label>
        <Input id='address' error={addressError} value={form.address} onChange={(e) =>{ setForm({...form, address: e.target.value}),setAddressError(false)}} placeholder='Street, City, Zip Code'/>
        </div>

        <div className='mt-5'>
        <label htmlFor='description'>Additional Notes ( Optional )</label>
        <TextArea id='description' value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} placeholder='Details about the part, damage, or specific requirements...'/>
        </div>

            <button type='submit' className='bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)]
                      md:px-6 px-4 py-2 md:py-3 mt-4 font-bold transition-all duration-300 rounded-md text-white border-[1px] border-[#4D2F8C] cursor-pointer'>Request</button>
          <p className={`text-red-500 mt-2 transisiton duration-300 ${error ? "opacity-100 translate-y-0" :"opacity-0 -translate-y-3"}`}>{error}</p>

      </form>
   </>
  )
}

export default RequestForm