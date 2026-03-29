

const Input = ({placeholder, id, type='text', value, onChange, accept ,error} : {error?:boolean,accept?:string,placeholder?: string, id?: string, type?: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <>
          <input value={value} accept={accept} onChange={onChange} type={type} id={id}  autoComplete="off" className={`w-full px-4 py-3 focus:outline-none rounded-md mt-1 bg-gray-700 text-white border transition-all duration-300 ${error ?"border-red-800" : "border-[#364153]"}`} placeholder={placeholder} />
    </>
  )
}

export default Input