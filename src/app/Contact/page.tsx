 "use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const blogs = [
  { id: 1, title: "", image: "/cres/c1.png" },
  { id: 2, title: "", image: "/cres/c2.png" },
  { id: 3, title: "", image: "/cres/c3.png" },
  { id: 4, title: "", image: "/cres/c4.png" },
  { id: 5, title: "", image: "/cres/c5.png" },
];

const ContactPage = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          const items = carouselRef.current.querySelectorAll(".carousel-item");
          items.forEach((item, index) => {
            (item as HTMLElement).style.transform = `rotateY(${index * 72}deg) translateZ(300px)`; // Adjusted translateZ value for proper spacing
          });
        }
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isDesktop]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide navigation buttons
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen  bg-gradient-to-br from-[#12C2E9] to-[#F64F59] text-white items-center justify-center p-4 md:p-10">
      {/* Left Side: 3D Carousel or Slider */}
      <div className="w-full md:w-1/2 p-4 md:p-10 relative overflow-hidden">
        {isDesktop ? (
          <div className="carousel" ref={carouselRef}>
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="carousel-item absolute w-full h-full"
                style={{
                  transform: `rotateY(${index * 72}deg) translateZ(300px)`, // Adjusted translateZ value for proper spacing
                  transition: "transform 2s",
                }}
              >
                <div className="p-4 bg-transparent">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Slider {...sliderSettings}>
            {blogs.map((blog) => (
              <div key={blog.id} className="p-4">
                <div className="bg-gray-800 rounded-lg shadow-md">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full md:w-1/2 p-4 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Get in touch</h1>
        <h2 className="text-white text-center text-lg mb-6">
        Reach Out  We are Here to Help!
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 bg-gray-800 rounded-lg text-gray-300"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full p-4 bg-gray-800 rounded-lg text-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-gray-800 rounded-lg text-gray-300"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-4 bg-gray-800 rounded-lg text-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-gray-800 p-4 rounded-lg font-bold text-white hover:bg-gray-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;