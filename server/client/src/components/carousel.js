import React, { useState, useEffect } from 'react';

const AutoCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, interval, images]);

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`carousel-${index}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: index === currentIndex ? 'static' : 'absolute',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
    </div>
  );
};

export default AutoCarousel;
