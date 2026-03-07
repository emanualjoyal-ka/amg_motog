'use client'
import Input from "@/src/components/Input"
import TextArea from "@/src/components/TextArea";
import React from 'react'

const Form = () => {

    const [formData, setFormData] = React.useState({
        name:"",
        email:"",
        subject:"",
        message:""
      });

  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send the data to an API or display a success message.
        console.log(formData);
        alert("Message sent successfully!");
        setFormData({
          name:"",
          email:"",
          subject:"",
          message:""
        });
      };
  return (
    <>
      <form onSubmit={handleSubmit} className='border-[#26345D] border bg-[#303030]/20  backdrop-blur-md md:col-span-2  shadow-lg  p-5 md:p-8 rounded-lg'>
          <h1 className='text-2xl md:text-left text-center md:text-3xl text-white'>Send us a message</h1>
          <h1 className='text-white pt-2'>Fill out the form below and we'll respond as soon as possible.</h1>
          <label htmlFor='name' className='text-white block pt-5'>Name</label>
          <Input placeholder='John Doe' id='name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
          <label htmlFor='email' className='text-white block pt-5'>Email</label>
          <Input type="email" placeholder='john@example.com' id='email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
          <label htmlFor='subject' className='text-white block pt-5'>Subject</label>
          <Input placeholder='Subject of your message' id='subject' value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}/>
          <label htmlFor='message' className='text-white block pt-5'>Message</label>
          <TextArea placeholder="Tell us what's on your mind" id='message' value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}/>
          <button type='submit' className='bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)]
                      md:px-6 px-4 py-2 md:py-3 mt-4 font-bold transition-all duration-300 rounded-md text-white border-[1px] border-[#4D2F8C] cursor-pointer'>Send Message</button>
        </form>
    </>
  )
}

export default Form