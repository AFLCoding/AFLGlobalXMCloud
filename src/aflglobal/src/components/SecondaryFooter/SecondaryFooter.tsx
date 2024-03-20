import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import footerData from 'components/PrimaryFooter/utils';
import Link from 'next/link';
import React from 'react';

const SecondaryFooter = () => {
  const name = 'footer-secondary';
  const secondaryFooterContent =
    footerData.sitecore.route.placeholders['headless-footer'][0].placeholders['sxa-footer'][2]
      .fields.Text;
  return (
    <div className={`${name} w-100`}>
      <div className={`${name}__content d-flex align-items-center`}>
        <RichText className={`${name}__social-icon`} field={secondaryFooterContent} />
        {/* <p className={`${name}__content-p`}>
          © Copyright 2022 AFL. All Rights Reserved&nbsp;|&nbsp;
        </p>
        <Link href="/" className={`${name}__content-p`}>
          Privacy Policy
        </Link>
        <p>&nbsp;|&nbsp;</p>
        <Link href="/" className={`${name}__content-link`}>
          Sitemap
        </Link> */}
      </div>
    </div>
  );
};

export default SecondaryFooter;
