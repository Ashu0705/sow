import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="shadow-md p-4 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"> 
      <div className="relative">
        <img src={image.src} alt={image.alt} className="w-full h-80 object-cover mb-2" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-semibold text-white text-center px-4">{image.title}</h3>
        </div>
      </div>
      <div className="flex-grow">
        <p className="text-gray-700 mb-2">{image.description}</p>
        <h3 className="text-lg font-medium">{image.title}</h3>
      </div>
    </div>
  );
};

export default ImageCard;