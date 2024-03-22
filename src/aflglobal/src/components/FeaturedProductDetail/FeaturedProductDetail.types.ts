import { ImageField, LinkField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

export type FeaturedProductDetailProps = {
  fields: {
    Link: LinkField;
    Image: ImageField;
    Title: TextField;
    Description: TextField;
  };
};

// TODO: Remove after integrating with real props
export const mockPropsFeaturedProductDetail: FeaturedProductDetailProps = {
  fields: {
    Image: {
      value: {
        src: 'https://afl-delivery.stylelabs.cloud/api/public/content/8a5c7c6438d9424aaa40e4cee642d3a7?v=175a35aa',
      },
    },
    Title: {
      value: 'FLEXSCAN® FS200 SM OTDRS WITH SMARTAUTO® & LINKMAP®',
    },
    Description: {
      value:
        "AFL's FlexScan® OTDRs enable even novice technicians to quickly and reliably troubleshoot or completely characterize optical networks.",
    },
    Link: {
      value: {
        href: 'https://afl-delivery.stylelabs.cloud/api/public/content/8a5c7c6438d9424aaa40e4cee642d3a7?v=175a35aa',
        text: 'LEARN MORE',
      },
    },
  },
};
