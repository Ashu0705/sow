import React, { useState } from 'react';

const FeaturedCommunities = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= images.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? images.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="container mx-auto px-16 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">OUR SERVICES</h2>
      <div className="relative">
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
        >
          ←
        </button>
        
        <div className="flex gap-6 justify-center">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % images.length;
            const image = images[index];
            return (
              <div key={index} className="w-1/3 transition-all duration-300">
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-80 object-cover"
                  />
                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-white text-center px-4">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default FeaturedCommunities;