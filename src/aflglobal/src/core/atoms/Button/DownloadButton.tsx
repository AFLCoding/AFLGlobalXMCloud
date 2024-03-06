import React from 'react';
import styles from './Button.module.scss';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { ButtonElementProps } from './type';
import { Download } from '../Icons/Download';

const DownloadButton = (props: ButtonElementProps & { hasIcon?: boolean }): JSX.Element => {
  const { label, variant, buttonClassName, style, hasIcon } = props;

  let buttonStyle: string = buttonClassName || ' ';
  if (variant) {
    buttonStyle = styles[variant];
    if (hasIcon) {
      buttonStyle += ' ' + styles.downloadButtonWithVariant;
    }
  } else buttonStyle = styles.downloadButton;

  return (
    <div className={buttonStyle} style={style}>
      <Link field={label} />
      {hasIcon && !variant && <Download />}
    </div>
  );
};

export default DownloadButton;
