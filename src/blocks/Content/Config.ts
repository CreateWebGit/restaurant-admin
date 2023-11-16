import { Block } from 'payload/types';

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Maträtt',
    plural: 'Maträtter',
  },
  fields: [
    {
      name: 'title',
      label: 'Namn',
      type: 'text',
    },
    {
      name: 'Beskrivning',
      type: 'textarea',
    },
    {
      name: 'Pris',
      type: 'number',
    },
    {
      name: 'enableCoolStuff', // required
      type: 'checkbox', // required
      label: 'Click me to see fanciness',
      defaultValue: false,
    },
  ],
};

export default Content;
