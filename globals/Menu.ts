import { GlobalConfig } from 'payload/types';
import link from '../fields/link';

const Menu: GlobalConfig = {
  slug: 'menu',
  label: 'Menu',
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [link],
    },
  ],
};

export default Menu;
