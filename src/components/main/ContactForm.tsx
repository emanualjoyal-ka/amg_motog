'use client'
import Input from "@/src/components/Input"
import TextArea from "@/src/components/TextArea";
import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = React.useState({
        name:"",
        email:"",
        subject:"",
        message:""
      });

  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [nameErr,setNameErr]=useState(false);
  const [emailErr,setEmailErr]=useState(false);
  const [subjectErr,setSubjectErr]=useState(false);
  const [messageErr,setMessageErr]=useState(false);
  const [err,setErr]=useState(false);

    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(formData.name === ""){setNameErr(true)}
        if(formData.email === "" || !(emailValidate.test(formData.email))){setEmailErr(true)}
        if(formData.subject === ""){setSubjectErr(true)}
        if(formData.message === ""){setMessageErr(true)}
        if(formData.name === "" || formData.email === "" || formData.subject === "" || formData.message === "" || !(emailValidate.test(formData.email)) ){setErr(true);return;}

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
          <h1 className='text-2xl md:text-left text-center md:text-3xl text-white cursor-default'>Send us a message</h1>
          <h1 className='text-white pt-2 cursor-default'>Fill out the form below and we'll respond as soon as possible.</h1>
          <label htmlFor='name' className='text-white block pt-5'>Name</label>
          <Input error={nameErr} placeholder='John Doe' id='name' value={formData.name} onChange={(e) => {setFormData({...formData, name: e.target.value});setNameErr(false);}}/>
          <label htmlFor='email' className='text-white block pt-5'>Email</label>
          <Input error={emailErr} type="email" placeholder='john@example.com' id='email' value={formData.email} onChange={(e) => {setFormData({...formData, email: e.target.value});setEmailErr(false);}}/>
          <label htmlFor='subject' className='text-white block pt-5'>Subject</label>
          <Input error={subjectErr} placeholder='Subject of your message' id='subject' value={formData.subject} onChange={(e) => {setFormData({...formData, subject: e.target.value});setSubjectErr(false);}}/>
          <label htmlFor='message' className='text-white block pt-5'>Message</label>
          <TextArea error={messageErr} placeholder="Tell us what's on your mind" id='message' value={formData.message} onChange={(e) => {setFormData({...formData, message: e.target.value});setMessageErr(false);}}/>
          <button type='submit' className='bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)]
                      md:px-6 px-4 py-2 md:py-3 mt-4 font-bold transition-all duration-300 rounded-md text-white border-[1px] border-[#4D2F8C] cursor-pointer'>Send Message</button>
        </form>
    </>
  )
}

export default Form