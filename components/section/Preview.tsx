import React from 'react'

const Preview = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <h2 className='text-2xl font-semibold mb-6 sm:mb-8'>
        <span className='animate-pulse'>/</span>
        preview
      </h2>
      <div className="w-full bg-stone-800 rounded-xl p-4 sm:p-6 md:p-8 min-h-[200px] flex items-center justify-center">
        <p className="text-slate-400">Product preview will appear here</p>
      </div>
    </div>
  )
}

export default Preview