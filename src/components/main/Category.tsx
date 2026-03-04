'use client'
import React from 'react'

const Category = () => {

    const [categories, setCategories] = React.useState("Select a Category");
    const [show, setShow] = React.useState(false);

    const categoryList = [
        "Brakes",
        "Suspension",
        "Wheels & Tires",
        "Engine Components",
        "Exhaust Systems",
        "Electrical & Lighting",
        "Body & Frame",
        "Accessories"
    ]

  return (
    <>
    <div className='mt-5'>
        <p className='text-xl font-bold'>Browse by Categories</p>
        <div onClick={()=>setShow(!show)} className='flex relative justify-between items-center border-1 border-gray-400 rounded-lg mt-3 p-2 md:p-4 transition-all duration-300 hover:bg-gray-700 backdrop-blur-md'>
            <p className='text-white'>{categories}</p>
            <div className={`w-3 md:w-5 ${show ? 'rotate-180' : ''} transition-transform duration-300`}>
<svg className='w-full h-full' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="currentColor" /></svg>
            </div>

        <div className={`absolute left-0 w-full top-full mt-1  z-10 bg-[#0C0B1D]  border-1 rounded-lg border-gray-400 p-2 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`}>
            {categoryList.map((item,index)=>(
                <p key={index} onClick={()=>(setCategories(item),setShow(false))} className='text-white p-2 rounded-lg hover:bg-gray-700 m-1 cursor-pointer transition-all duration-300'>{item}</p>
            ))}
        </div>

        </div>
        
        </div>
    </>
  )
}

export default Category