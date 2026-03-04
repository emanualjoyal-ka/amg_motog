import Category from '@/src/components/main/Category'
import Products from '@/src/components/main/Products'
import SearchBar from '@/src/components/main/SearchBar'

import React from 'react'

const page = () => {
  return (
    <div className='pt-20 md:pt-30 pb-8 px-3 md:px-16 min-h-screen grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10'>
        <div className='md:col-span-1'>
         <SearchBar/>
         <Category/>
        </div>
        <div className='md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-5'>
          <Products/>
        </div>
    </div>
  )
}

export default page