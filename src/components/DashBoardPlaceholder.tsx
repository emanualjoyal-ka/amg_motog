import React from 'react';

const DashBoardPlaceholder = () => {
  return (
    <div className="w-screen h-dvh overflow-hidden grid grid-cols-10 grid-rows-10 gap-2 p-2">
      
      {/* NAV */}
      <nav className="relative bg-white/5 backdrop-blur-md border border-white/10 row-start-1 row-end-2 col-start-1 col-end-11 md:col-start-3 flex items-center justify-between px-4 py-3 text-black rounded-lg overflow-hidden">
        {/* Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/5 opacity-50 animate-shimmer pointer-events-none"></div>
        {/* Placeholder content */}
        <div className="h-6 w-32 bg-white/10 rounded-md"></div>
      </nav>

      {/* SIDEBAR */}
      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 hidden md:block row-start-1 row-end-11 col-start-1 col-end-3 rounded-lg px-4 py-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/5 opacity-50 animate-shimmer pointer-events-none"></div>
        <div className="space-y-4 relative z-10">
          <div className="h-6 w-3/4 bg-white/10 rounded-md"></div>
          <div className="h-6 w-full bg-white/10 rounded-md"></div>
          <div className="h-6 w-5/6 bg-white/10 rounded-md"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="relative bg-white/5 backdrop-blur-md border border-white/10 row-start-2 row-end-11 col-start-1 col-end-11 md:col-start-3 rounded-lg p-4 overflow-hidden">
        {/* Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/5 opacity-50 animate-shimmer pointer-events-none"></div>

        {/* Placeholder blocks */}
        <div className="space-y-4 relative z-10">
          <div className="h-6 w-3/4 bg-white/10 rounded-md"></div>
          <div className="h-6 w-full bg-white/10 rounded-md"></div>
          <div className="h-6 w-5/6 bg-white/10 rounded-md"></div>
          <div className="h-40 w-full bg-white/10 rounded-lg"></div>
        </div>
      </main>
    </div>
  );
};

export default DashBoardPlaceholder;