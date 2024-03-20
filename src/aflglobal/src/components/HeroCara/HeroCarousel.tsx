import Image from 'next/image';
import React from 'react';
import { heroCarouselData } from '../../utils/DummyJson';
import Carousel from 'react-bootstrap/Carousel';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';

const HeroCarousel = () => {
  const block = 'hero-carousel';
  return (
    <div className="row">
      {/* <div className="container-large">
        <div className="carousel col-12 initialized ">
          <div
            id="carouselExampleSlidesOnly"
            className={`carousel slide ${block}`}
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {heroCarouselData.map((items, index) => {
                const item = items.SlideImage.jsonValue?.value;
                console.log(item?.src, 'test');
                return (
                  <div className={`carousel-item active`} key={index}>
                    {item?.src && (
                      <Image
                        src={item?.src}
                        alt={item?.alt}
                        width={parseInt(item?.width || '0')}
                        height={parseInt(item?.height || '0')}
                      />
                    )}
                  </div>
                );
              })}
              ;
            </div>
          </div>
        </div>
      </div> */}

      <Carousel>
        {heroCarouselData.map((items, index) => {
          const slideImg = items.SlideImage.jsonValue?.value;
          const slideText = items.SlideText.jsonValue.value;
          const slideLink = items.SlideLink.jsonValue;
          return (
            <Carousel.Item key={index}>
              {/* <ExampleCarouselImage text="First slide" /> */}
              {slideImg?.src && (
                <Image
                  src={slideImg?.src}
                  alt={slideImg?.alt}
                  width={parseInt(slideImg?.width || '0')}
                  height={parseInt(slideImg?.height || '0')}
                />
              )}
              <Carousel.Caption>
                <RichText field={slideText} />
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        ;
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
