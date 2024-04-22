import React, { useState, useEffect } from 'react';
import image1 from '../assets/kola/banner1.jpg';
import image2 from '../assets/kola/banner2.jpg';
import image3 from '../assets/kola/banner3.jpg';


import { Link } from 'react-router-dom';



const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentIndex];

  const carouselStyle = {
    backgroundImage: `url(${currentImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  return (
    <div style={carouselStyle}>
      {/* Add any content to display on top of the carousel if needed */}
      <div className='header-content flex items-center justify-center flex-col text-center'>
      <h1 className='text-white text-4xl font-bold header-title ls-2'>Ay-ab Resources Library on Health and Relationship</h1>
      <p className='text-uppercase font-medium text-base text-white my-3 ls-1'>Explore the Ay-ab Resources Library: Enhancing Health and Relationships</p>
      <div className=' w-[100%] h-20 flex m-auto gap-5 items-center justify-center'>
        <Link to='/about'>
          <button className=' w-24 h-[40px] bg-white rounded-md font-semibold hover:bg-[#4c956c] hover:text-white'>About Us</button>
        </Link>
        <Link to="/service">
          <button className=' w-40 h-[40px] bg-white rounded-md font-semibold hover:bg-[#4c956c] hover:text-white'>What we offer</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ImageCarousel;
