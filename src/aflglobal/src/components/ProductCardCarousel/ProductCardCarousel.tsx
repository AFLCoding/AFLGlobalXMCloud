import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
};

const ProductCardCarousel = () => {
  const block = 'product-carousel';
  const totalItems = 6;
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const updateSliderSettings = () => {
      const screenWidth = window.innerWidth;
      const slidesToShow = screenWidth < 768 ? 5 : 7;
      setShowArrows(totalItems > slidesToShow);
    };
    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);
    return () => {
      window.removeEventListener('resize', updateSliderSettings);
    };
  }, []);

  const settings = {
    arrows: showArrows,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  return (
    <div className={`${block}`}>
      <div className="container">
        <div className={`${block}__title`}>Additional Products</div>
        <Slider {...settings}>
          <div className={`${block}__card`}>
            <div className={`${block}__imagewrapper`}>
              <div className="imagecontainer">
                <Link href="/test" className="image">
                  <Image src="/product.jpg" alt="product" width="1440" height="429" />
                </Link>
              </div>
            </div>
            <div className={`${block}__textwrapper`}>
              <Link href="/test" className="text">
                FTTx PON Simulator
              </Link>
            </div>
          </div>
          <div className={`${block}__card`}>
            <div className={`${block}__imagewrapper`}>
              <div className="imagecontainer">
                <Link href="/test" className="image">
                  <Image src="/product.jpg" alt="product" width="1440" height="429" />
                </Link>
              </div>
            </div>
            <div className={`${block}__textwrapper`}>
              <Link href="/test" className="text">
                FTTx PON Simulator
              </Link>
            </div>
          </div>
          <div className={`${block}__card`}>
            <div className={`${block}__imagewrapper`}>
              <div className="imagecontainer">
                <Link href="/test" className="image">
                  <Image src="/product.jpg" alt="product" width="1440" height="429" />
                </Link>
              </div>
            </div>
            <div className={`${block}__textwrapper`}>
              <Link href="/test" className="text">
                FTTx PON Simulator
              </Link>
            </div>
          </div>
          <div className={`${block}__card`}>
            <div className={`${block}__imagewrapper`}>
              <div className="imagecontainer">
                <Link href="/test" className="image">
                  <Image src="/product.jpg" alt="product" width="1440" height="429" />
                </Link>
              </div>
            </div>
            <div className={`${block}__textwrapper`}>
              <Link href="/test" className="text">
                FTTx PON Simulator
              </Link>
            </div>
          </div>
          <div className={`${block}__card`}>
            <div className={`${block}__imagewrapper`}>
              <div className="imagecontainer">
                <Link href="/test" className="image">
                  <Image src="/product.jpg" alt="product" width="1440" height="429" />
                </Link>
              </div>
            </div>
            <div className={`${block}__textwrapper`}>
              <Link href="/test" className="text">
                FTTx PON Simulator
              </Link>
            </div>
          </div>
          <div className={`${block}__card`}>
            <div className={`${block}__imagewrapper`}>
              <div className="imagecontainer">
                <Link href="/test" className="image">
                  <Image src="/product.jpg" alt="product" width="1440" height="429" />
                </Link>
              </div>
            </div>
            <div className={`${block}__textwrapper`}>
              <Link href="/test" className="text">
                FTTx PON Simulator
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProductCardCarousel;
