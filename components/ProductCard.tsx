import Image from 'next/image';
import React from 'react'
import AnimatedContainer from './AnimatedContainer';

interface ProductCardProps {
    index: number;
    imgSrc: string;
    title: string;
    price: number;
    isActive: boolean;
    onClick: () => void;
}

const ProductCard = ({ index, imgSrc, title, price, isActive, onClick }: ProductCardProps) => {
    return (
        <div onClick={onClick} className={`w-full hover:scale-105 ${isActive ? 'scale-105' : ""}`}>
            <AnimatedContainer delay={index * 0.2} Styles={`w-full h-auto min-h-[8rem] flex flex-row gap-2 sm:gap-4 rounded-xl transition-all duration-300 cursor-pointer ${isActive ? 'bg-gradient' : 'bg-stone-800'}`}>
                <div className="relative w-1/3 min-w-[80px] max-w-[128px] aspect-square">
                    <Image
                        src={imgSrc}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 80px, 128px"
                        className='object-cover rounded-xl'
                    />
                </div>
                <div className='flex flex-col justify-between flex-1 px-2 sm:px-4 py-3 sm:py-6 text-slate-200'>
                    <h3 className='text-sm sm:text-lg font-semibold truncate'>{title}</h3>
                    <div className='flex flex-row items-center justify-between mt-2'>
                        <p className='text-xs sm:text-sm text-slate-400'>₹{price}</p>
                        <div className='w-12 sm:w-16 flex justify-center py-1 text-xs sm:text-sm border rounded-xl hover:bg-stone-200 transition duration-300 hover:text-stone-800'>Buy</div>
                    </div>
                </div>
            </AnimatedContainer>
        </div>
    )
}

export default ProductCard