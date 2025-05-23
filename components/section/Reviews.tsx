
import React from 'react'
import Marquee from 'react-fast-marquee';
import ReviewCard from '../ReviewCard';

const reviews = [
  {
    name: "Bob S.",
    imgSrc: "/assets/reviews/rev1.jpg",
    text: "I found the application to be intuitive and easy to navigate, making my overall experience very positive.",
    stars: 4.2
  },
  {
    name: "Alice J.",
    imgSrc: "/assets/reviews/rev2.jpg",
    text: "My experience with the service was exceptional. I appreciated the user-friendly interface and efficient customer support.",
    stars: 4.9
  },
  {
    name: "Fiona L.",
    imgSrc: "/assets/reviews/rev3.jpg",
    text: "I found the application to be highly reliable and praised its efficiency in managing my daily tasks effortlessly.",
    stars: 4.1
  },
  {
    name: "Ethan G.",
    imgSrc: "/assets/reviews/rev4.jpg",
    text: "I enjoyed the clean design and ease of use. The application exceeded my expectations and was a great help.",
    stars: 4.7
  },
  {
    name: "George M.",
    imgSrc: "/assets/reviews/rev5.jpg",
    text: "I appreciated the innovative features and the constant updates that keep the application ahead of its competitors.",
    stars: 4.9
  },
  {
    name: "Diana W.",
    imgSrc: "/assets/reviews/rev6.jpg",
    text: "I appreciated the detailed tutorials and helpful support provided, which made learning the platform enjoyable.",
    stars: 4.3
  },
  {
    name: "Charlie B.",
    imgSrc: "/assets/reviews/rev7.jpg",
    text: "I was impressed with the application's functionality and the seamless integration with other tools I use.",
    stars: 4.8
  },
  {
    name: "Hannah K.",
    imgSrc: "/assets/reviews/rev8.jpg",
    text: "I was delighted with the customer service and the comprehensive resources available to help me get started quickly.",
    stars: 4.4
  }
];

const Reviews = () => {
  return (
    <div className='container mx-auto my-16 sm:my-24 md:my-32 px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8' id="reviews">
      <Marquee speed={20} pauseOnHover={true} gradient={false} className='py-2'>
        {reviews.map((review, index) => (
          <ReviewCard key={index} name={review.name} imgSrc={review.imgSrc} text={review.text} stars={review.stars} />
        ))}
      </Marquee>
    </div>
  )
}

export default Reviews