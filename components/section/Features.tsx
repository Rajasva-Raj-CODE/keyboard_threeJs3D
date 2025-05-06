"use client"
import React from 'react'
import { FaGamepad, FaHandRock } from 'react-icons/fa';
import { FaBolt, FaKeyboard } from 'react-icons/fa6';
import FeatureCard from '../FeatureCard';

const features = [
  {
    icon: FaKeyboard,
    title: "Compact Design",
    description: "Experience a sleek, compact design that frees up space for intense gaming sessions, allowing for more mouse movement and a cleaner setup."
  },
  {
    icon: FaBolt,
    title: "RGB Backlighting",
    description: "Customize your keyboard with vibrant RGB backlighting, featuring dynamic lighting effects and millions of colors to match your gaming rig."
  },
  {
    icon: FaHandRock,
    title: "Mechanical Switches",
    description: "Enjoy precise, tactile feedback with durable mechanical switches, ensuring fast response times and reliable performance during gameplay."
  },
  {
    icon: FaGamepad,
    title: "Gaming Mode",
    description: "Activate gaming mode to disable the Windows key and avoid accidental interruptions, keeping you focused on the game."
  }
];


const Features = () => {
  return (
    <div id='features' className='w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-12'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 justify-items-center max-w-4xl mx-auto px-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            index={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Features