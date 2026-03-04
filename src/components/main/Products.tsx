"use client"
import { useState } from "react"
import data from "../../constants/DATA.json"
import React from 'react'

const Products = () => {

    
const PRODUCTS_PER_PAGE = 16

const [currentPage, setCurrentPage] = useState(1)

// total pages
const totalPages = Math.ceil(data.length / PRODUCTS_PER_PAGE)

// calculate slice indexes
const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
const endIndex = startIndex + PRODUCTS_PER_PAGE

// products to show on current page
const currentProducts = data.slice(startIndex, endIndex)


if (!data || data.length === 0) {
  return <p className="text-center text-white">No products found</p>
}
  return (
    <>
    {currentProducts.map((item) => (
            <div key={item.id} className='bg-[#16072D] rounded-lg text-white'>
              <img src={item.img} className='w-full h-40 md:h-70 object-cover '/>
              <div className='p-3'>
                <h2 className='font-bold md:mb-2'>{item.brand}</h2>
              <p className='text-sm mb-2 md:mb-4'>{item.name}</p>
              <p className='font-bold'>₹ {item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}


          {/* Pagination Controls */}
      <div className="flex justify-center mt-8 gap-2">
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .slice(
            Math.max(0, currentPage - 3),
            currentPage + 2
          )
          .map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "bg-white text-black"
                  : "bg-gray-700 text-white"
              }`}
            >
              {page}
            </button>
          ))}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Products