import { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

export type NavigationMenuProps = {
  fields: {
    MenuItems: Array<MenuItem>;
  };
};

export type MenuItem = {
  Id: string;
  Link: LinkField;
  Children: Array<MenuItem>;
  Level?: number;
};

export const navigationMenuProps: NavigationMenuProps = {
  fields: {
    MenuItems: [
      {
        Id: '1',
        Link: {
          value: {
            text: 'Solutions',
            title: 'Solutions',
            href: '/Solutions',
          },
        },
        Children: [
          {
            Id: '11',
            Link: {
              value: {
                text: 'Service Provider',
                title: 'Service Provider',
                href: '/Solutions/Service-Provider',
              },
            },
            Children: [],
          },
          {
            Id: '12',
            Link: {
              value: {
                text: 'Hyperscale',
                title: 'Hyperscale',
                href: '/Solutions/Hyperscale',
              },
            },
            Children: [],
          },
        ],
      },
      {
        Id: '2',
        Link: {
          value: {
            text: 'Products',
            title: 'Products',
            href: '/Products',
          },
        },
        Children: [],
      },
      {
        Id: '3',
        Link: {
          value: {
            text: 'Resources',
            title: 'Resources',
            href: '/Resources',
          },
        },
        Children: [
          {
            Id: '31',
            Link: {
              value: {
                text: 'Product Related Materials',
                title: 'Product Related Materials',
                href: '/Resources/Product-Related-Materials',
              },
            },
            Children: [],
          },
        ],
      },
      {
        Id: '4',
        Link: {
          value: {
            text: 'Contact',
            title: 'Contact',
            href: '/Contact',
          },
        },
        Children: [],
      },
      {
        Id: '5',
        Link: {
          value: {
            text: 'Company',
            title: 'Company',
            href: '/Company',
          },
        },
        Children: [],
      },
    ],
  },
};
