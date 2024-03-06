import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { MouseEventHandler } from 'react';

export interface Link {
  id: string;
  fields: {
    Link: LinkField;
  };
}

export interface ButtonElementProps {
  label: LinkField;
  variant?: string;
  buttonClassName?: string;
  style?: React.CSSProperties;
  url?: Link;
  onClick?: MouseEventHandler;
}
