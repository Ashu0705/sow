import React from 'react';
import ImageCard from './ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <div className="container mx-auto px-16 py-8">
              <h2 className="text-2xl font-bold mb-6 text-center">COMMUNITIES WE MANAGE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"> 
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;