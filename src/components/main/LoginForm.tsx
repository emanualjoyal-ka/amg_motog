'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

const LoginForm = () => {

    const router=useRouter();

    const [show,setShow]=useState(false);


  const [email,setEmail]=useState("");
  const [emailError,setEmailError]=useState(false);
  const [password,setPassword]=useState("");
  const [passwdError,setPasswdError]=useState(false);

  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        if( email === "" ||!(emailValidate.test(email))){
            setEmailError(true);
        }
        if(password === ""){
            setPasswdError(true);
        }
    }

  return (
    <>
    <div className='h-full flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='z-100 flex flex-col bg-white/5 backdrop-blur-lg p-8 max-w-md mx-auto rounded-lg border-1 border-white/10 items-center mb-20'>
          <div className='w-20 text-[silver] mb-10'>
            <svg className='w-full w-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </div>


          <div className={`border w-full flex items-center transition-all duration-300  ${emailError ? "border-red-500 text-red-500" : "border-[silver] text-white"} rounded-md p-2`}>
            <div className='w-7'>
            <svg className='w-full h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </div>
            <input value={email} onChange={(e)=>{setEmail(e.target.value);setEmailError(false)}} type='text' placeholder='EMAIL' className='w-full px-4 outline-none ' />
          </div>


          <div className={`border w-full mt-5 flex items-center transition-all duration-300 ${passwdError ? "border-red-500 text-red-500" : "border-[silver] text-white"} rounded-md p-2`}>
            <div className='w-7'>
            <svg className='w-full h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </div>
            <input value={password} onChange={(e)=>{setPassword(e.target.value);setPasswdError(false)}} type={show ? "text" : "password"} placeholder='PASSWORD' className='w-full px-4 outline-none ' />
           
            <div onClick={()=>{setShow(!show)}} className='w-7 cursor-pointer'>
           {show ? (
             <svg className='w-full h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
           ) : (
            <svg className='w-full h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.83 9.17999C14.2706 8.61995 13.5576 8.23846 12.7813 8.08386C12.0049 7.92926 11.2002 8.00851 10.4689 8.31152C9.73758 8.61453 9.11264 9.12769 8.67316 9.78607C8.23367 10.4444 7.99938 11.2184 8 12.01C7.99916 13.0663 8.41619 14.08 9.16004 14.83" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16.01C13.0609 16.01 14.0783 15.5886 14.8284 14.8384C15.5786 14.0883 16 13.0709 16 12.01" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.61 6.39004L6.38 17.62C4.6208 15.9966 3.14099 14.0944 2 11.99C6.71 3.76002 12.44 1.89004 17.61 6.39004Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9994 3L17.6094 6.39" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.38 17.62L3 21" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5695 8.42999C20.4801 9.55186 21.2931 10.7496 21.9995 12.01C17.9995 19.01 13.2695 21.4 8.76953 19.23" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
           )}
          </div>


          </div>


        <button type='submit' className='bg-[silver] p-3 hover:bg-[#284EC2] hover:text-white transition-hover duration-300 border border-white rounded-md w-full mt-10 text-[#0C0B1D] font-bold cursor-pointer' >LOGIN</button>
         <p onClick={()=>router.push("/admin/forgot-password")} className='self-end mt-2 cursor-pointer hover:underline'>Forgot password?</p>
       

        </form>

    </div>
    </>
  )
}

export default LoginForm