

const Input = ({placeholder, id, type='text', value, onChange} : {placeholder?: string, id?: string, type?: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <>
          <input value={value} onChange={onChange} type={type} id={id}  autoComplete="off" className='w-full p-2 focus:outline-none rounded-md mt-1 bg-gray-700 text-white' placeholder={placeholder} />
    </>
  )
}

export default Input