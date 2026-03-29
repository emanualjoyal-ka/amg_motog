

const Design = ({position,size}:{position?:string,size?:string}) => {
  return (
    <>
    <div className={`border-white/5 absolute ${position}  border-60 flex items-center justify-center ${size} rounded-full`}>
        <div className='bg-white/5 h-[80%] w-[80%] rounded-full'/>
        </div>
    </>
  )
}

export default Design