import React from 'react';
import styles from './CTA.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type CTACustomProps = {
  href?: string;
  icon?: {
    src: string;
    alt: string;
  };
  label?: string;
  bg?: boolean;
};

const CTA = ({ label, href, icon, bg }: CTACustomProps) => {
  if (href) {
    return (
      <Link
        href={href}
        title={label}
        className={`${icon?.src ? styles.cta : styles.cta__icon} ${bg ? styles.background : ''}`}
      >
        {label}
        {icon?.src && <Image src={icon?.src} alt={icon?.alt} />}
      </Link>
    );
  } else {
    return (
      <button
        className={`${icon?.src ? styles.cta : styles.cta__icon} ${bg ? styles.background : ''}`}
        title={label}
      >
        {label}
        {icon?.src && <Image src={icon?.src} alt={icon?.alt} />}
      </button>
    );
  }
};

export default CTA;
