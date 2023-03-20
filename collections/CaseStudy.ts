import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';
// import { Image, Type as ImageType } from '../blocks/Image';
// import { CallToAction, Type as CallToActionType } from '../blocks/CallToAction';
// import { Content, Type as ContentType } from '../blocks/Content';
// import { VideoHero, Component as videoHero } from '../blocks/VideoHero';
import meta from '../fields/meta';
import slug from '../fields/slug';

// export type Layout = CallToActionType | ContentType | ImageType;

export type Type = {
  title: string;
  slug: string;
  image?: MediaType;
  //   layout: Layout[];
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

export const CaseStudy: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Case Study Title',
      type: 'text',
      required: true,
    },
    {
      name: 'featuredImage',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'service',
      label: 'Service',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'site',
      label: 'Website',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    // {
    //   name: 'layout',
    //   label: 'Page Layout',
    //   type: 'blocks',
    //   minRows: 1,
    //   blocks: [CallToAction, Content, Image, VideoHero],
    // },
    meta,
    slug,
  ],
};

export default CaseStudy;

// import { CollectionConfig } from 'payload/types';
// import meta from '../fields/meta';
// import slug from '../fields/slug';

// export type Type = {
//   title: string;
//   slug: string;
//   meta: {
//     title?: string;
//     description?: string;
//     keywords?: string;
//   };
// };

// const Work: CollectionConfig = {
//   slug: 'work',
//   admin: {
//     useAsTitle: 'title',
//   },
//   access: {
//     read: (): boolean => true, // Everyone can read Pages
//   },
//   fields: [
//     {
//       name: 'title',
//       label: 'Title',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'featuredImage',
//       label: 'Featured Image',
//       type: 'upload',
//       relationTo: 'media',
//     },
//     {
//       name: 'logo',
//       label: 'Logo',
//       type: 'upload',
//       relationTo: 'media',
//       admin: {
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'service',
//       label: 'Service',
//       type: 'relationship',
//       relationTo: 'services',
//       hasMany: true,
//       admin: {
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'site',
//       label: 'Website',
//       type: 'text',
//       admin: {
//         position: 'sidebar',
//       },
//     },
//     meta,
//     slug,
//   ],
// };

// export default Work;
