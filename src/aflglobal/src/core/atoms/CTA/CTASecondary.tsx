import React from 'react';
import styles from './CTA.module.scss';
import Link from 'next/link';

type CTACustomProps = {
  href?: string;
  label?: string;
};

const CTASecondary = ({ label, href }: CTACustomProps) => {
  if (href) {
    return (
      <Link href={href} title={label} className={styles.ctasecondary}>
        {label}
      </Link>
    );
  } else {
    return (
      <button title={label} className={styles.buttonsecondary}>
        {label}
      </button>
    );
  }
};

export default CTASecondary;
