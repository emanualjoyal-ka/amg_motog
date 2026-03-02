import React from 'react'

const TextArea = ({placeholder, id, rows=5, value, onChange} : {placeholder?: string, id?: string, rows?: number, value?: string, onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void}) => {
  return (
   <>
          <textarea id={id} className='focus:outline-none resize-none min-h-50 w-full p-2 rounded-md mt-1 bg-gray-700 text-white' placeholder={placeholder} rows={rows} value={value} onChange={onChange}></textarea>
   
   </>
  )
}

export default TextArea