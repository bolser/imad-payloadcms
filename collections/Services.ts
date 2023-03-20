import { CollectionConfig } from 'payload/types';
import meta from '../fields/meta';
import slug from '../fields/slug';


export type Type = {
  title: string;
  slug: string;
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    meta,
    slug,
  ],
};

export default Services;
