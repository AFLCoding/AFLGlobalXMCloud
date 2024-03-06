import React from 'react';
import { Field, Link, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import styles from './Button.module.scss';
import IconRenderer from '../Icons';

interface CTAButtonIconProps {
  text?: Field<string> | string;
  iconName: string;
  textFirst?: boolean;
  link?: LinkField;
  color?: string;
}

const CTAButtonIcon: React.FC<
  CTAButtonIconProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, iconName, textFirst, link, color, ...props }) => {
  if (link) {
    return (
      <button className={`text-uppercase ${styles.CTAButtonIcon}`} {...props}>
        <Link field={link} />
      </button>
    );
  }
  return (
    <button className={`text-uppercase ${styles.CTAButtonIcon}`} {...props}>
      {textFirst ? (
        <>
          <p>
            <p>{typeof text === 'string' ? text : <Text field={text} />}</p>
          </p>
          <IconRenderer iconName={iconName} color={color} />
        </>
      ) : (
        <>
          <IconRenderer iconName={iconName} color={color} />
          <p>{typeof text === 'string' ? text : <Text field={text} />}</p>
        </>
      )}
    </button>
  );
};

export default CTAButtonIcon;
