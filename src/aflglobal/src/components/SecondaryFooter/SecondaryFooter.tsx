import Link from 'next/link';
import React from 'react';

const SecondaryFooter = () => {
  const name = 'footer-secondary';
  return (
    <div className={`${name} w-100`}>
      <div className={`${name}__content d-flex align-items-center`}>
        <p>© Copyright 2022 AFL. All Rights Reserved&nbsp;|&nbsp;</p>
        <Link href="/">Privacy Policy</Link>
        <p>&nbsp;|&nbsp;</p>
        <Link href="/">Sitemap</Link>
      </div>
    </div>
  );
};

export default SecondaryFooter;
