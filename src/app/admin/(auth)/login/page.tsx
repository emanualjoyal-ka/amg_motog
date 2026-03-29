import Design from '@/src/components/Design'
import LoginForm from '@/src/components/main/LoginForm'


const page = () => {

  return (
    <div className='h-dvh relative overflow-hidden px-3 bg-[#0C0B1D]'>
        {/* <Design position={"right-[-130px] top-[-130px]"} size={"h-90 w-90 md:h-130 md:w-130"}/>
        <Design position={"left-[-30%] bottom-[-10%] md:left-[-10%] md:bottom-[-30%]"} size={"h-100 w-100 md:h-200 md:w-200"}/> */}
        <LoginForm/>
    </div>
  )
}

export default page