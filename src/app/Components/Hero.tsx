 'use client';
import { useState, useEffect, useCallback, RefObject } from 'react';
import Image from 'next/image';

interface HeroSliderProps {
  latestPostsRef: RefObject<HTMLDivElement | null>;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ latestPostsRef }) => {
  const slides = [
    {
      id: 1,
      title: 'The Impact of Technology on the Workplace',
      description: 'How Technology is Changing',
      image: '/homeres/himg.png',
      date: 'December 26, 2024',
      author: 'Abdul Majid',
    },
    {
      id: 2,
      title: 'Revolutionizing Small Businesses with AI',
      description: 'Adapting to the Future of Work',
      image: '/homeres/himg2.png',
      date: 'December 25, 2024',
      author: 'Abdul Majid',
    },
    {
      id: 3,
      title: 'How Cloud Computing is Transforming Industries',
      description: 'Scalable and Efficient Solutions',
      image: '/homeres/himg3.png',
      date: 'December 28, 2024',
      author: 'Abdul Majid',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  // Autoplay functionality: set an interval to go to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [goToNextSlide]); // Add goToNextSlide to the dependency array

  const handleExploreMoreClick = () => {
    if (latestPostsRef.current) {
      latestPostsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#12C2E9] to-[#F64F59] h-screen flex items-start md:items-center justify-center text-white px-4 md:px-16 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center relative w-full h-auto md:h-96">
        {/* Slide Image */}
        <div className="relative md:w-1/2 w-full h-72 md:h-full mt-4 md:mt-0">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Slide Text */}
        <div className="relative md:w-1/2 w-full h-72 md:h-full mx-10 mt-4 md:mt-0 flex flex-col justify-start md:justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-center md:text-left">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl mt-2 text-center md:text-left">
            {slides[currentSlide].description}
          </p>
          <p className="text-gray-300 mt-4 text-center md:text-left">
            By {slides[currentSlide].author} - {slides[currentSlide].date}
          </p>
          <button
            className="mt-6 py-2 px-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition mx-auto md:mx-0"
            onClick={handleExploreMoreClick}
          >
            Explore More
          </button>
        </div>

        {/* Navigation Arrows with Images */}
        <button
          onClick={goToPrevSlide}
          className="absolute md:flex hidden top-1/2 left-4 transform -translate-y-1/2 p-2"
        >
          <Image
            src="/homeres/limg.png" // Replace with the path to your left arrow image
            alt="Previous"
            width={40} // Set appropriate size
            height={45}
          />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute md:flex hidden top-1/2 right-4 transform -translate-y-1/2 p-2"
        >
          <Image
            src="/homeres/rimg.png" // Replace with the path to your right arrow image
            alt="Next"
            width={40} // Set appropriate size
            height={45}
          />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;