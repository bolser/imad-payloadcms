import React from 'react';
import { Block } from 'payload/types';
import RichText from '../../components/RichText';
import classes from './index.module.css';
import backgroundColour from '../../fields/backgroundColour';

export type Type = {
  blockType: 'videoHero';
  blockName?: string;
  content: unknown;
};

export const VideoHero: Block = {
  slug: 'video-hero',
  labels: {
    singular: 'Video Hero',
    plural: 'Video Hero Blocks',
  },
  fields: [
    backgroundColour,
    {
      name: 'layout',
      type: 'array',
      minRows: 1,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              label: 'Width',
              type: 'select',
              defaultValue: 'full',
              required: true,
              options: [
                {
                  label: 'Full',
                  value: 'full',
                },
                {
                  label: 'Half',
                  value: 'half',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'align',
              label: 'Align',
              type: 'select',
              defaultValue: 'left',
              required: true,
              options: [
                {
                  label: 'Left',
                  value: 'left',
                },
                {
                  label: 'Right',
                  value: 'right',
                },
                {
                  label: 'Center',
                  value: 'center',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'title',
              label: 'Title',
              type: 'richText',
              required: true,
            },
            {
              name: 'video',
              label: 'Video',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'paddingTop',
              label: 'Padding Top',
              type: 'select',
              defaultValue: 'medium',
              required: true,
              options: [
                {
                  label: 'None',
                  value: 'none',
                },
                {
                  label: 'Small',
                  value: 'small',
                },
                {
                  label: 'Medium',
                  value: 'medium',
                },
                {
                  label: 'Large',
                  value: 'large',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'paddingBottom',
              label: 'Padding Bottom',
              type: 'select',
              defaultValue: 'medium',
              required: true,
              options: [
                {
                  label: 'None',
                  value: 'none',
                },
                {
                  label: 'Small',
                  value: 'small',
                },
                {
                  label: 'Medium',
                  value: 'medium',
                },
                {
                  label: 'Large',
                  value: 'large',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText
        content={content}
        className={classes.content}
      />
    </div>
  );
};

export default VideoHero;
