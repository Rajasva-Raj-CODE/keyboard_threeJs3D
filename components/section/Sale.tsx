import Link from 'next/link'
import React from 'react'

const Sale = () => {
  return (
    <div className='flex flex-col container items-center px-4 sm:px-6 md:px-8 gap-6 sm:gap-7 md:gap-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 mx-auto relative max-w-full'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'>
        Limited Collection <br className='sm:hidden' /> <span className='sm:inline'>for sale</span>
      </h2>
      <p className='uppercase text-xs sm:text-sm font-bold bg-gradient bg-clip-text text-transparent text-center'>
        discounts up to 50% off
      </p>
      <Link
        href='#catalog'
        className='w-32 sm:w-36 flex flex-col items-center py-2 sm:py-3 rounded-xl text-xs bg-gradient hover:opacity-90 transition-opacity'
      >
        Buy Keyboard
      </Link>
    </div>
  )
}

export default Sale