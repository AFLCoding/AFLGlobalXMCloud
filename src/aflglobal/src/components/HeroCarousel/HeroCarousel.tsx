import Image from 'next/image';
import React from 'react';

const HeroCarousel = () => {
    // const carouselData = 
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p>Hello</p>
            {/* <Image className="d-block w-100" src="..." alt="First slide" /> */}
          </div>
          <div className="carousel-item">
            <p>Hello 1</p>
            {/* <Image className="d-block w-100" src="..." alt="Second slide" /> */}
          </div>
          <div className="carousel-item">
            <p>Hello 2</p>
            {/* <Image className="d-block w-100" src="..." alt="Third slide" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
