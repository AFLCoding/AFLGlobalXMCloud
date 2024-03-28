import React from 'react';
import styles from './CTA.module.scss';
import Link from 'next/link';

type CTACustomProps = {
  href?: string;
  label?: string;
  className?: string;
};

const CTASecondary = ({ label, href, className }: CTACustomProps) => {
  if (href) {
    return (
      <Link href={href} title={label} className={`${styles.ctasecondary} ${className}`}>
        {label}
      </Link>
    );
  } else {
    return (
      <button title={label} className={`${styles.buttonsecondary} ${className}`}>
        {label}
      </button>
    );
  }
};

export default CTASecondary;
