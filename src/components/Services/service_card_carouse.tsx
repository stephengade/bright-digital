/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState, useRef, useEffect } from 'react';
import { service_data } from './data.services';
import { ServiceCard } from './services.card';

export const LeftArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
  <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.29289ZM19 7L1 7L1 9L19 9L19 7Z" fill="#5C5FE4"/>
</svg>
)

export const RightArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
  <path d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM0 9H18V7H0V9Z" fill="#5C5FE4"/>
</svg>
)

const ServiceCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null) as any;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? service_data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === service_data.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel?.scrollTo({
        left: currentIndex * carousel?.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className="mt-24 mb-10 radial_bg w-full">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto md:snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {service_data.map(({ description, icon, title }) => (
          <div
            key={title.split('').join()}
            className="w-[100%] flex-shrink-0 snap-center px-4 md:w-1/2 lg:md:w-1/3"
          >
            <ServiceCard
              description={description}
              title={title}
              icon={icon}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-6 pb-10 gap-3">
        <button
          onClick={handlePrev}
          className=""
          aria-label="Previous"
        >
          {LeftArrow}
        </button>
        {service_data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-[#5C5FE4]' : 'bg-[#2F334F]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}

        
        <button
          onClick={handleNext}
          className=""
          aria-label="Next"
        >
          {RightArrow}
        </button>
      </div>
    </div>
  );
};

export default ServiceCardCarousel;