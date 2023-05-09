import {MoonIcon} from '@sanity/icons'

const page = {
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: MoonIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Optional',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Title',
          type: 'string',
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

export default page
