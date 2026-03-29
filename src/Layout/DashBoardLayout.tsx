'use client';
import { Menu, User } from 'lucide-react'
import React from 'react'
import MobileSideBar from './MobileSideBar';
import DesktopSideBar from './DesktopSideBar';

const DashBoardLayout = ({children}) => {

    const [isOpen, setIsOpen] = React.useState(false);


    


     const openSidebar = () => {
   
    setIsOpen(true);
  };

   const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
         <div className="w-screen h-dvh relative overflow-hidden grid grid-cols-10 grid-rows-10 gap-2 p-2">
            <nav className="bg-white/5 backdrop-blur-md border border-white/10 row-start-1 row-end-2 col-start-1 col-end-11 md:col-start-3  shadow-[0_2px_4px_rgba(0,0,0,0.1)] flex items-center justify-between px-4 py-3 text-black rounded-lg ">
            <button onClick={openSidebar} >
            <Menu className="md:hidden text-white" />
          </button>
          
             
            <div className="flex flex-col items-center">
            <div className="bg-white/30 border border-white/30 text-white h-8 w-8 rounded-full flex items-center justify-center overflow-hidden">
              <User/>
            </div>
              <p className='text-white'>user</p>
            </div>
          
         
            </nav>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 hidden md:block row-start-1 row-end-11 col-start-1 col-end-3 rounded-lg px-4 py-6">
              <DesktopSideBar/>
            </div>

<main className="bg-white/5 backdrop-blur-md border border-white/10 row-start-2 row-end-11 col-start-1 col-end-11 md:col-start-3 rounded-lg p-4">

          {children}
</main>

        </div>

    {isOpen && (

        <>
        <div className={`bg-white/5 backdrop-blur-md border border-white/10 w-[300px] h-dvh absolute top-0 left-0 md:hidden flex flex-col justify-between items-center px-4 py-6 z-20 shadow-lg rounded-br-lg rounded-tr-lg `}>
            <MobileSideBar closeSidebar={closeSidebar} />
        </div>

        <div
            // ref={overlayRef}
            onClick={closeSidebar}
            className="bg-black/50 absolute w-screen h-dvh top-0 left-0 md:hidden z-10"
          />
        </>
    )}


    </div>
  )
}

export default DashBoardLayout