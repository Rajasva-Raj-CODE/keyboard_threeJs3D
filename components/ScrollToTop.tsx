"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)


    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
      transition: {
        duration: 0.3
      }
    }
  }

  // Icon animation
  const iconVariants = {
    initial: { y: 0 },
    animate: {
      y: [-2, 2, -2],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-xl bg-gradient flex items-center justify-center shadow-lg border border-white/10"
          onClick={scrollToTop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={buttonVariants}
          whileTap="tap"
          whileHover="hover"
          aria-label="Scroll to top"
        >
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="animate"
          >
            <FaArrowUp className="text-white text-lg" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
