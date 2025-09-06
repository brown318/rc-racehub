// RC RaceHub Sanity Schema
// Based on project documentation requirements

import { defineType, defineField } from 'sanity'

// Document Types
export const tenant = defineType({
  name: 'tenant',
  title: 'Tenant (Track/Club)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Track/Club Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subdomain',
      title: 'Subdomain',
      type: 'string',
      validation: Rule => Rule.required().regex(/^[a-z0-9-]+$/, {
        name: 'subdomain',
        invert: false
      })
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Inactive', value: 'inactive' },
          { title: 'Suspended', value: 'suspended' }
        ]
      },
      initialValue: 'active'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'theme',
      title: 'Theme Settings',
      type: 'object',
      fields: [
        { name: 'primaryColor', title: 'Primary Color', type: 'string' },
        { name: 'secondaryColor', title: 'Secondary Color', type: 'string' },
        { name: 'accentColor', title: 'Accent Color', type: 'string' }
      ]
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'email' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'address', title: 'Address', type: 'text' },
        { name: 'website', title: 'Website', type: 'url' }
      ]
    }),
    defineField({
      name: 'settings',
      title: 'Settings',
      type: 'object',
      fields: [
        { name: 'timezone', title: 'Timezone', type: 'string' },
        { name: 'currency', title: 'Currency', type: 'string', initialValue: 'USD' },
        { name: 'revSharePercentage', title: 'Revenue Share %', type: 'number', validation: Rule => Rule.min(0).max(100) }
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subdomain',
      media: 'logo'
    }
  }
})

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tenant',
      title: 'Tenant',
      type: 'reference',
      to: [{ type: 'tenant' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'mainImage'
    }
  }
})

export const event = defineType({
  name: 'event',
  title: 'Racing Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tenant',
      title: 'Tenant',
      type: 'reference',
      to: [{ type: 'tenant' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'registrationDeadline',
      title: 'Registration Deadline',
      type: 'datetime'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'classes',
      title: 'Racing Classes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Class Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'entryFee', title: 'Entry Fee', type: 'number' }
          ]
        }
      ]
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        { name: 'name', title: 'Venue Name', type: 'string' },
        { name: 'address', title: 'Address', type: 'text' },
        { name: 'coordinates', title: 'Coordinates', type: 'geopoint' }
      ]
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Registration Open', value: 'registration_open' },
          { title: 'Registration Closed', value: 'registration_closed' },
          { title: 'In Progress', value: 'in_progress' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      },
      initialValue: 'upcoming'
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'className', title: 'Class', type: 'string' },
            { name: 'position', title: 'Position', type: 'number' },
            { name: 'driverName', title: 'Driver Name', type: 'string' },
            { name: 'lapTime', title: 'Best Lap Time', type: 'string' },
            { name: 'totalTime', title: 'Total Time', type: 'string' },
            { name: 'laps', title: 'Laps Completed', type: 'number' }
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eventDate',
      description: 'status'
    }
  }
})

export const promo = defineType({
  name: 'promo',
  title: 'Promotional Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Promo Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tenant',
      title: 'Tenant',
      type: 'reference',
      to: [{ type: 'tenant' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'promoImage',
      title: 'Promo Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string'
    }),
    defineField({
      name: 'ctaUrl',
      title: 'Call to Action URL',
      type: 'url'
    }),
    defineField({
      name: 'targetProducts',
      title: 'Target Products (Stripe Product IDs)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Stripe product IDs this promo should link to'
    }),
    defineField({
      name: 'discountCode',
      title: 'Discount Code',
      type: 'string'
    }),
    defineField({
      name: 'validFrom',
      title: 'Valid From',
      type: 'datetime'
    }),
    defineField({
      name: 'validTo',
      title: 'Valid To',
      type: 'datetime'
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'validTo',
      media: 'promoImage'
    }
  }
})

export const mediaAsset = defineType({
  name: 'mediaAsset',
  title: 'Media Asset',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tenant',
      title: 'Tenant',
      type: 'reference',
      to: [{ type: 'tenant' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'type',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
          { title: 'Gallery', value: 'gallery' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        }
      ],
      hidden: ({ document }) => document?.type !== 'image'
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      hidden: ({ document }) => document?.type !== 'video'
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ]
        }
      ],
      hidden: ({ document }) => document?.type !== 'gallery'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'event',
      title: 'Related Event',
      type: 'reference',
      to: [{ type: 'event' }]
    }),
    defineField({
      name: 'uploadedAt',
      title: 'Uploaded At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'image'
    }
  }
})

export const sponsorBlock = defineType({
  name: 'sponsorBlock',
  title: 'Sponsor Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sponsor Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tenant',
      title: 'Tenant',
      type: 'reference',
      to: [{ type: 'tenant' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Sponsor Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'sponsorUrl',
      title: 'Sponsor Website',
      type: 'url'
    }),
    defineField({
      name: 'sponsorshipLevel',
      title: 'Sponsorship Level',
      type: 'string',
      options: {
        list: [
          { title: 'Bronze', value: 'bronze' },
          { title: 'Silver', value: 'silver' },
          { title: 'Gold', value: 'gold' },
          { title: 'Title Sponsor', value: 'title' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'placement',
      title: 'Placement',
      type: 'string',
      options: {
        list: [
          { title: 'Header Banner', value: 'header' },
          { title: 'Sidebar', value: 'sidebar' },
          { title: 'Footer', value: 'footer' },
          { title: 'Event Page', value: 'event' },
          { title: 'Results Page', value: 'results' },
          { title: 'Homepage Hero', value: 'hero' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'displayFrom',
      title: 'Display From',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'displayTo',
      title: 'Display To',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'clickCount',
      title: 'Click Count',
      type: 'number',
      initialValue: 0,
      readOnly: true
    }),
    defineField({
      name: 'impressionCount',
      title: 'Impression Count',
      type: 'number',
      initialValue: 0,
      readOnly: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sponsorshipLevel',
      media: 'logo'
    }
  }
})

// Export schema array
export default [tenant, post, event, promo, mediaAsset, sponsorBlock]
