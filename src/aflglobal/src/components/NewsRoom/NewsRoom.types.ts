import { LinkField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

export type NewsRoomProps = {
  fields: {
    Title: TextField;
    CTA: LinkField;
  };
};

// TODO: Remove after integrating with real props
export const mockNewRoomProps: NewsRoomProps = {
  fields: {
    Title: {
      value: 'News Room',
    },
    CTA: {
      value: {
        text: 'VIEW MORE',
        title: 'View More',
        href: 'https://www.aflglobal.com/en/apac/Resources/Other-Resources/NewsRoom',
      },
    },
  },
};
