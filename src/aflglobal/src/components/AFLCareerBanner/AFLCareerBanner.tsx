import React, { useEffect, useRef } from 'react';
import shave from 'shave';
import Image from 'next/image';
import CTA from 'src/core/atoms/CTA/CTA';

const CareersBanner = () => {
  const block = 'banner';
  const textRef = useRef<HTMLParagraphElement>(null);
  const readMoreHref = '/test';
  const readMoreText = 'Read More';

  useEffect(() => {
    if (textRef.current) {
      const config = {
        character: '... Read More',
      };
      shave(textRef.current, 70, config);
      setTimeout(() => {
        if (textRef.current) {
          const shaveCharElement = textRef.current.querySelector('.js-shave-char');

          if (shaveCharElement) {
            shaveCharElement.innerHTML = `... <a class="ReadMore" href="${readMoreHref}">${readMoreText}</a>`;
          }
        }
      }, 0);
    }
  }, []);

  return (
    <div className={`container-fluid ${block}`}>
      <div className={`${block}__imagewrapper`}>
        <Image src="/banner.png" alt="banner" width="1440" height="429" />
      </div>
      <div className={`container ${block}__content`}>
        <div className={`${block}__textwrapper`}>
          <span className="eyebrow-text">CAREERS</span>
          <div className="title">Start Your Path at AFL Career</div>
          <div className="description" ref={textRef}>
            AFL’s success over the past 30+ years is due to the commitment of our greatest asset—our
            associates. We hire and train talented individuals, investing in them to ensure their
            success as they embark on a career path with AFL. As competition is fierce, we
            understand the importance of offering a total package that exceeds that of our
            competition. Continue reading to fully grasp what sets AFL apart.
          </div>
          <div className="cta-wrapper">
            <div className="cta">
              <CTA bg label={{ value: 'See Job Listing' }} className="btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersBanner;
