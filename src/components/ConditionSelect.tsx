import React, { useEffect, useRef } from 'react'

interface ConditionSelectProps {
    onSelect: (val: string) => void;
    error?: boolean;
}

const ConditionSelect: React.FC<ConditionSelectProps> = ({onSelect,error}) => {
    const conditions = ["OEM ( Original )","Used","Any Available"]
    const [condition, setCondition] = React.useState("Select")
    const [show, setShow] = React.useState(false)

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

    const handleSelect = (item:string) => {
        setCondition(item);
        setShow(false);
        onSelect(item);
    }

    return (
        <div className='relative w-full mt-1' ref={dropdownRef}>
            <button 
                type='button' 
                onClick={() => setShow(!show)}  
                className={`w-full p-2 flex items-center justify-between rounded-md border  bg-[#0C0B1D] text-white transition-all duration-300 ${error ? "border-red-800" : "border-[#26345D]"}`}
            >
                <p>{condition}</p>
                <div className={`w-4 transition-transform duration-300 ${show ? "rotate-180" : ""}`}>
                    <svg className='w-full h-full' viewBox="0 0 1024 1024" fill="currentColor">
                        <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" />
                    </svg>
                </div>
            </button>

           
            <div className={`
                absolute z-10 w-full border border-[#26345D] bg-[#0C0B1D] rounded-md top-12 p-2 text-white
                transition-all duration-200
                ${show ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
            `}>
                {conditions.map((item, index) => (
                    <p 
                        key={index} 
                        onClick={() => handleSelect(item)}
                        className={`cursor-pointer hover:bg-[#364153] p-2 rounded-md transition-colors duration-300 ${condition == item ? "bg-[#26345D]" : ""}`}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default ConditionSelect