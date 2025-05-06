import React from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'


const Social = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Logo />
      <div className='flex flex-row gap-4'>
        <Link href="#" className='flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:shadow-lg transition-shadow duration-300'>
          <FaInstagram className='text-stone-900 text-lg' />
        </Link>
        <Link href="#" className='flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:shadow-lg transition-shadow duration-300'>
          <FaFacebook className='text-stone-900 text-lg' />
        </Link>
        <Link href="#" className='flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:shadow-lg transition-shadow duration-300'>
          <FaTwitter className='text-stone-900 text-lg' />
        </Link>
        <Link href="#" className='flex items-center justify-center rounded-full bg-white p-2 shadow-md hover:shadow-lg transition-shadow duration-300'>
          <FaYoutube className='text-stone-900 text-lg' />
        </Link>
      </div>
    </div>
  )
}


const Footer = () => {
  return (
    <div className='container mx-auto max-w-5xl pt-32 relative z-20'>
      <div className='bg-stone-900/50 backdrop-blur-sm rounded-t-xl shadow-lg border-t border-x border-stone-700/30'>
        <div className='flex flex-col gap-12 px-8 py-12 md:flex-row justify-between'>
          <Social />
          <div className='flex flex-col gap-8'>
            <div className='w-48 flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <FaMapMarkerAlt className='text-slate-400' />
                <p className='p-xs font-semibold text-slate-400'>Location:</p>
              </div>
              <p className='pl-6 font-medium'>New York, USA</p>
            </div>
            <div className='w-48 flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <FaPhone className='text-slate-400' />
                <p className='p-xs font-semibold text-slate-400'>Phone:</p>
              </div>
              <p className='pl-6 font-medium'>+1 (800) 555-1234</p>
            </div>
            <div className='w-48 flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <FaEnvelope className='text-slate-400' />
                <p className='p-xs font-semibold text-slate-400'>Email:</p>
              </div>
              <p className='pl-6 font-medium'>contact@example.com</p>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-white mb-2'>Quick Links</h3>
            <Link href='#' className='text-sm text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2'>
              <span className='w-1 h-1 bg-slate-400 rounded-full'></span>Home
            </Link>
            <Link href='#' className='text-sm text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2'>
              <span className='w-1 h-1 bg-slate-400 rounded-full'></span>Catalog
            </Link>
            <Link href='#' className='text-sm text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2'>
              <span className='w-1 h-1 bg-slate-400 rounded-full'></span>About
            </Link>
            <Link href='#' className='text-sm text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2'>
              <span className='w-1 h-1 bg-slate-400 rounded-full'></span>Contact Us
            </Link>
            <Link href='#' className='text-sm text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2'>
              <span className='w-1 h-1 bg-slate-400 rounded-full'></span>Privacy Policy
            </Link>
          </div>
        </div>
        <hr className='mx-8 border-slate-700/50' />
        <div className='w-full flex flex-col-reverse gap-y-4 md:flex-row items-center justify-between py-6 px-8'>
          <p className='text-xs text-slate-400 text-center'>© 2023 Keyboard. All rights reserved.</p>
          <p className='text-xs text-slate-400 text-center'>Created by <a href="https://github.com/yourusername" className='underline hover:text-white transition-colors duration-300'>Rajasva Raj</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer