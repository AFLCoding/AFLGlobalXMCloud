import Image from 'next/image';
import React from 'react';
import { heroCarouselData } from '../../utils/DummyJson';
import Carousel from 'react-bootstrap/Carousel';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import CTA from 'src/core/atoms/CTA/CTA';

const HeroCarousel = () => {
  const block = 'hero-carousel';
  const carousel = 'carousel';
  return (
    <div className={`container-large mx-auto`}>
      <div className={`${block}`}>
        <Carousel touch={true}>
          {heroCarouselData.map((items, index) => {
            const slideImg = items.SlideImage.jsonValue?.value;
            const slideText = items.SlideText.jsonValue;
            const slideLink = items.SlideLink.jsonValue.value;
            return (
              <Carousel.Item key={index} className={`${block}__slide`}>
                {slideImg?.src && (
                  <Image
                    src={slideImg?.src}
                    alt={slideImg?.alt}
                    className={`${carousel}-img`}
                    width={parseInt(slideImg?.width || '0')}
                    height={parseInt(slideImg?.height || '0')}
                  />
                )}

                <Carousel.Caption>
                  <div className={`container max-auto d-relative`}>
                    <div className={`${block}__content`}>
                      {slideText && (
                        <div className={`${block}__richtext`}>
                          <RichText field={slideText} />
                        </div>
                      )}
                      <CTA
                        bg
                        label={{ value: slideLink.text }}
                        link={{ value: { href: slideLink.href } }}
                      />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
