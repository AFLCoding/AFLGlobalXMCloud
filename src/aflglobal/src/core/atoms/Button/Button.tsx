import React from 'react';
import styles from './Button.module.scss';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { ButtonElementProps } from './type';

const Button = (props: ButtonElementProps): JSX.Element => {
  const { label, variant, buttonClassName, style } = props;
  const buttonStyle = variant ? styles[variant] : styles.primary;

  return (
    <div className={`${buttonStyle} ${buttonClassName || ''}`} style={style}>
      <Link field={label} />
    </div>
  );
};

export default Button;
