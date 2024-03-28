import React from 'react';
import styles from './CTA.module.scss';
import {
  Link,
  LinkField,
  TextField,
  Text,
  ImageField,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';

type CTACustomProps = {
  link?: LinkField;
  label?: TextField;
  icon?: ImageField;
  bg?: boolean;
  className?: string;
};

const CTA = ({ label, link, icon, bg, className }: CTACustomProps) => {
  if (link) {
    return (
      <Link
        field={link}
        className={`${icon?.value?.src ? styles.cta : styles.cta__icon} ${
          bg ? styles.background : ''
        } ${className}`}
      >
        {icon?.value?.src && <Image field={icon} />}
      </Link>
    );
  } else {
    return (
      <button
        className={`${icon?.value?.src ? styles.cta : styles.cta__icon} ${
          bg ? styles.background : ''
        } ${className}`}
        title={label?.value as string}
      >
        <Text field={label} />
        {icon?.value?.src && <Image field={icon} />}
      </button>
    );
  }
};

export default CTA;
