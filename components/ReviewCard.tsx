
import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface ReviewCardProps {
    name: string;
    imgSrc: string;
    text: string;
    stars: number;
}

const ReviewCard = ({ name, imgSrc, text, stars }: ReviewCardProps) => {
    return (
        <div className='w-[260px] sm:w-[280px] md:w-[300px] h-auto min-h-[10rem] flex flex-col bg-stone-800 rounded-xl gap-y-2 px-3 sm:px-4 py-4 sm:py-6 mr-3 sm:mr-4'>
            <div className='flex justify-between items-center text-xs sm:text-sm'>
                <div className='flex items-center justify-center gap-2 sm:gap-4'>
                    <Image src={imgSrc} alt="client" width={35} height={35} className='rounded-full w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]' />
                    <span>{name}</span>
                </div>
                <div className='flex items-center justify-center gap-2 sm:gap-4'>
                    <FaStar className='star-color' />
                    <span>{stars}</span>
                </div>
            </div>
            <p className='text-slate-300 text-xs sm:text-sm mt-2'>{text}</p>
        </div>

    )
}

export default ReviewCard