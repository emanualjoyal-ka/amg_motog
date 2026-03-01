'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const NavBar = () => {


      const menuItems=[
    {
      name:'Home',
      path:'/'
    },
    {
      name:'Shop',
      path:'/shop'
    },
    {
      name:'About Us',
      path:'/aboutus'
    },
    {
      name:'Contact Us',
      path:'/contact'
    }
  ]

   const pathname = usePathname();

  const Navigation = (path : string) => {
    return pathname === path
      ? "text-black bg-white"
      : "text-white bg-white/20 hover:bg-white/30";
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);


  useEffect(() => {
  setIsMobileMenuOpen(false);
}, [pathname]);


  const router=useRouter();




  return (
     <div className='px-3 md:px-15 py-2 md:py-5 fixed w-full top-0 left-0 z-50'>
          <div className='flex justify-between items-center'>
            <h1 className="text-3xl md:text-4xl  font-bold text-white font-audiowide">AMG</h1>
          <ul className="hidden md:flex gap-2 border-2 border-white/10 bg-white/10 shadow-2xl backdrop-blur-md p-1 rounded-full">
            {menuItems.map((item,index)=>(
              <Link
                onClick={() => setIsMobileMenuOpen(false)} 
                key={index}
                href={item.path}
                className={` transition-all duration-300 py-2 px-6 rounded-full cursor-pointer  tracking-widest ${Navigation(item.path)}`}
              >
              {item.name}
              </Link>
            ))
            }
          </ul>



          <div className='flex items-center gap-5'>
            <Link href="/favourites" className='w-8 md:w-10 text-white hover:text-pink-500 transition-hover duration-300 cursor-pointer'>

<svg fill="currentcolor" className='w-full h-full' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.996 12.898c-.064-2.207-1.084-4.021-2.527-5.13-1.856-1.428-4.415-1.69-6.542-.132-.702.516-1.359 1.23-1.927 2.168-.568-.938-1.224-1.652-1.927-2.167-2.127-1.559-4.685-1.297-6.542.132-1.444 1.109-2.463 2.923-2.527 5.13-.035 1.172.145 2.48.788 3.803 1.01 2.077 5.755 6.695 10.171 10.683l.035.038.002-.002.002.002.036-.038c4.415-3.987 9.159-8.605 10.17-10.683.644-1.323.822-2.632.788-3.804z"/></svg>

            </Link>

          <Link href="/cart" className='w-6 md:w-8 text-white relative cursor-pointer hover:text-gray-400 transition-hover duration-300'>
            <div className='bg-[#272080] font-bold flex items-center justify-center h-5 w-5 md:h-6 md:w-6 absolute right-[-10] top-[-7] rounded-full'>
              2
            </div>
            <svg className='w-full h-full' viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.1983 22.75C27.3858 22.75 28.4308 22.0325 28.9691 20.9475L34.6374 9.59C35.2233 8.435 34.4633 7 33.2599 7H9.8266L8.33827 3.5H3.16077V7H6.32743L12.0274 20.2825L9.88993 24.5525C8.7341 26.8975 10.2541 29.75 12.6608 29.75H31.6608V26.25H12.6608L14.4024 22.75H26.1983ZM11.3308 10.5H30.5683L26.1983 19.25H15.0833L11.3308 10.5ZM12.6608 31.5C10.9191 31.5 9.50993 33.075 9.50993 35C9.50993 36.925 10.9191 38.5 12.6608 38.5C14.4024 38.5 15.8274 36.925 15.8274 35C15.8274 33.075 14.4024 31.5 12.6608 31.5ZM28.4941 31.5C26.7524 31.5 25.3433 33.075 25.3433 35C25.3433 36.925 26.7524 38.5 28.4941 38.5C30.2358 38.5 31.6608 36.925 31.6608 35C31.6608 33.075 30.2358 31.5 28.4941 31.5Z" fill="currentcolor"/>
</svg>
          </Link>

            <button onClick={()=>router.push("/auth")} className='hidden md:block px-4 font-bold py-2 bg-[#272080] rounded-full hover:bg-white hover:text-[#272080] cursor-pointer transition-hover duration-300'>
              Login
            </button>


            {/* Mobile Menu Icon */}
            <button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div  className='md:hidden w-8 md:w-10'>
              <svg className='h-full w-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="currentcolor"/>
</svg>
            </div>
            </button>

          </div>
          </div>




          <div className={`md:hidden mt-2 bg-white/20 backdrop-blur-md p-2 rounded-lg transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {menuItems.map((item,index)=>(
              <Link
                key={index}
                href={item.path}
                className={`block py-2 px-4 rounded-full text-white hover:bg-white/20 ${pathname === item.path ? "bg-white/20" : ""}`}
              >
              {item.name}
              </Link>
            ))
            }
          </div>
          




    </div>
  )
}

export default NavBar