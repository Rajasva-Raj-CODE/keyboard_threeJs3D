import React from 'react'
import { IconType } from 'react-icons';
import AnimatedContainer from './AnimatedContainer';

interface FeatureCardProps {
    index: number;
    icon: IconType;
    title: string;
    description: string;
}

const FeatureCard = ({ index, icon: Icon, title, description }: FeatureCardProps) => {
    return (
        <AnimatedContainer delay={index % 2 === 0 ? 0.2 : 0.7} Styles='w-full h-auto min-h-[280px] bg-stone-800 rounded-xl overflow-hidden relative'>
            <Icon className='absolute top-0 right-0 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 text-stone-900 z-0' />
            <div className='relative flex flex-col gap-3 sm:gap-4 px-4 sm:px-5 py-5 sm:py-6 z-10'>
                <Icon className='w-7 h-7 sm:w-8 sm:h-8 mb-3 sm:mb-4' />
                <h3 className='text-xl sm:text-2xl font-semibold'>{title}</h3>
                <p className='text-sm sm:text-base text-slate-300'>{description}</p>
            </div>
        </AnimatedContainer>
    );
};

export default FeatureCard;
