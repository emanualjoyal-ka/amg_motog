'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const NavBar = () => {

 

      const menuItems=[
    {
      name:'Home',
      path:'/'
    },
    {
      name:'Request Parts',
      path:'/request-a-part'
    },
    {
      name:'Track Order',
      path:'/track-order'
    },
    {
      name:'About Us',
      path:'/aboutus'
    }    
  ]

   const pathname = usePathname();

  const Navigation = (path : string) => {
    return pathname === path
      ? "text-[#0C0B1D] bg-white"
      : "text-white bg-white/20 hover:bg-white/30";
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

   const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
  setIsMobileMenuOpen(false);
}, [pathname]);


 // ✅ Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router=useRouter();



       const mobileMenu=useRef<HTMLDivElement>(null);
      
          useEffect(() => {
              const handleClickOutside = (event: MouseEvent) => {
                  if (isMobileMenuOpen && mobileMenu.current && !mobileMenu.current.contains(event.target as Node)) {
                      setIsMobileMenuOpen(false);
                  }
              };
      
              document.addEventListener("mousedown", handleClickOutside);
              
              return () => {
                  document.removeEventListener("mousedown", handleClickOutside);
              };
          }, [isMobileMenuOpen]);




  return (
     <div className={`${isScrolled ? 'bg-[rgba(10,10,30,0.7)] backdrop-blur-md' : 'bg-transparent'} px-5 lg:px-15 py-2 md:py-5 fixed w-full transition-all duration-200 top-0 left-0 z-50`}>
          <div className='flex justify-between items-center'>
            <h1 className="text-3xl md:text-4xl  font-bold text-white cursor-default font-audiowide">AMG</h1>
          <ul className="hidden lg:flex gap-2 border-2 border-white/10 bg-blue/80 shadow-2xl backdrop-blur-md p-1 rounded-full">
            {menuItems.map((item,index)=>(
              <Link
                onClick={() => setIsMobileMenuOpen(false)} 
                key={index}
                href={item.path}
                className={`names transition-all duration-300 py-2 px-6 rounded-full cursor-pointer  tracking-widest ${Navigation(item.path)}`}
              >
              {item.name}
              </Link>
            ))
            }
          </ul>



          <div className='flex items-center gap-5'>
            <button onClick={()=>router.push("/contact")} className='hidden lg:block bg-[linear-gradient(to_right,rgba(60,8,126,0)_0%,rgba(60,8,126,0.32)_100%)]
                      shadow-[inset_0_0_12px_rgba(191,151,255,0.24)]
                      hover:bg-[rgba(60,8,126,0.32)_100%)] font-bold
                      px-6 py-3 rounded-lg text-white border-[1px] transition-hover duration-300 border-[#4D2F8C] cursor-pointer'>
              Contact
            </button>


            {/* Mobile Menu Icon */}
            <button onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div  className='lg:hidden w-8 text-white md:w-10'>
              <svg className='h-full w-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="currentcolor"/>
</svg>
            </div>
            </button>

          </div>
          </div>


         <div ref={mobileMenu} className={`lg:hidden absolute left-0 top-full w-full bg-[rgba(10,10,30,0.9)] backdrop-blur-md p-4 transition-all duration-300 ${
  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
}`}>
            {menuItems.map((item,index)=>(
              <Link
                key={index}
                href={item.path}
                className={`block py-2 px-4 rounded-lg text-white hover:bg-white/20 ${pathname === item.path ? "bg-[#211641]/90" : ""}`}
              >
              {item.name}
              </Link>
            ))
            }
            <Link href="/contact" 
                className={`block py-2 px-4 rounded-lg text-white hover:bg-white/20 ${pathname === "/contact" ? "bg-[#211641]/90" : ""}`}
            >
              Contact
            </Link>
          </div>
          




    </div>
  )
}

export default NavBar