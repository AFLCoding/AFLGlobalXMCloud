import React from 'react';
import styles from './Button.module.scss';
import { Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ButtonElementProps } from './type';

const LinkButton = (props: ButtonElementProps): JSX.Element => {
  const { label, variant, buttonClassName, style } = props;
  const buttonStyle = variant ? styles[variant] : styles.linkButton;

  return (
    <div
      className={`${buttonStyle} ${buttonClassName || ''}`}
      style={style}
      onClick={props.onClick}
    >
      {props.onClick ? (
        <Text tag="span" field={{ value: label.value.text }} />
      ) : (
        <Link field={label} />
      )}
    </div>
  );
};

export default LinkButton;
