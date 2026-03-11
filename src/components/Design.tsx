

const Design = ({position,size}:{position?:string,size?:string}) => {
  return (
    <>
    <div className={`border-[#2E55C9] absolute ${position}  border-60 flex items-center justify-center ${size} rounded-full`}>
        <div className='bg-[#2E55C9] h-[80%] w-[80%] rounded-full'/>
        </div>
    </>
  )
}

export default Design