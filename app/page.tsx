import Features from '@/components/section/Features'
import Footer from '@/components/section/Footer'
import Hero from '@/components/section/Hero'
import Navbar from '@/components/section/Navbar'
import Products from '@/components/section/Products'
import Reviews from '@/components/section/Reviews'
import Sale from '@/components/section/Sale'
import React from 'react'

const Home = () => {
  return (
    <div className='text-slate-100'>
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Reviews />
      <div className='bg-stone-800'>
        <Sale />
        <Footer />
      </div>
    </div>
  )
}

export default Home