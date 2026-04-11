'use client'
import React, { useEffect, useRef } from "react"

interface CustomSelectProps {
  value: string
  options: string[]
  onSelect: (val: string) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  options,
  onSelect,
}) => {
  const [selected, setSelected] = React.useState(value)
  const [show, setShow] = React.useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSelected(value) // sync when row changes
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        show &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShow(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [show])

  const handleSelect = (item: string) => {
    setSelected(item)
    setShow(false)
    onSelect(item)
  }

  return (
    <div className="relative w-[180px]" ref={dropdownRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="w-full p-2 flex items-center justify-between rounded-md border bg-[#0C0B1D] text-white border-[#26345D]"
      >
        <span>{selected}</span>
        <span className={`transition ${show ? "rotate-180" : ""}`}>▼</span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute z-[9999] w-full mt-1 border border-[#26345D] bg-[#0C0B1D] rounded-md p-2 text-white transition-all ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {options.map((item) => (
          <div
            key={item}
            onClick={() => handleSelect(item)}
            className={`cursor-pointer p-2 rounded-md hover:bg-[#364153] ${
              selected === item ? "bg-[#26345D]" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomSelect