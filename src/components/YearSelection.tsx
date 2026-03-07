import React, { useEffect, useRef, useState } from 'react';

interface YearSelectionProps {
  onSelect: (val: number) => void;
}
const YearSelection: React.FC<YearSelectionProps> = ({ onSelect }) => {


    const [year, setYear] = useState<number | string>("Select Year");
    const [show, setShow] = useState<boolean>(false);

     const dropdownRef=useRef<HTMLDivElement>(null);
    
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (show && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setShow(false);
                }
            };
    
            document.addEventListener("mousedown", handleClickOutside);
            
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [show]);

    
    const currentYear: number = new Date().getFullYear();
    const startYear: number = 1980;
    const years: number[] = [];
    
    for (let i = currentYear; i >= startYear; i--) {
        years.push(i);
    }

    const handleSelect = (selectedYear: number): void => {
        setYear(selectedYear);
        setShow(false);
        onSelect(selectedYear);
    };

    return (
        <div className='relative w-full mt-1' ref={dropdownRef}>
            <button 
                type='button' 
                onClick={() => setShow(!show)}  
                className='w-full p-2 flex items-center justify-between rounded-md border border-[#26345D] bg-[#0C0B1D] text-white focus:outline-none'
            >
                <span>{year}</span>
                <div className={`w-4 transition-transform duration-300 ${show ? "rotate-180" : ""}`}>
                    <svg className='w-full h-full' viewBox="0 0 1024 1024" fill="currentColor">
                        <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" />
                    </svg>
                </div>
            </button>

            
            <div className={`
                absolute z-10 w-full border border-[#26345D] bg-[#0C0B1D] rounded-md top-12 p-2 text-white
                transition-all duration-200 max-h-60 overflow-y-auto custom-scrollbar
                ${show ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
            `}>
                {years.map((item) => (
                    <p 
                        key={item} 
                        onClick={() => handleSelect(item)}
                        className={`
                            cursor-pointer p-2 rounded-md transition-colors duration-300
                            ${year === item ? "bg-[#26345D] text-white" : "hover:bg-[#364153]"}
                        `}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default YearSelection;