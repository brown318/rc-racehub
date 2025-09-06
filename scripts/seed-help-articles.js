// Seed script to create sample help articles in Sanity
// Run with: node scripts/seed-help-articles.js

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ji5yggrg',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // You'll need to set this
  apiVersion: '2024-01-01'
})

const sampleArticles = [
  {
    _type: 'helpArticle',
    title: 'Getting Started with RC RaceHub',
    slug: { _type: 'slug', current: 'getting-started-with-rc-racehub' },
    category: 'getting-started',
    excerpt: 'Learn the basics of setting up your RC racing track on RaceHub platform.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Welcome to RC RaceHub! This guide will help you get started with setting up your racing track on our platform.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Step 1: Account Setup'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'First, you\'ll need to create your account and choose your plan. We recommend starting with our free Starter plan to explore the features.'
          }
        ]
      }
    ],
    tags: ['setup', 'beginner', 'account'],
    featured: true,
    difficulty: 'beginner',
    estimatedReadTime: 5,
    status: 'published',
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'RC RaceHub Team'
  },
  {
    _type: 'helpArticle',
    title: 'Setting Up Your Track Website',
    slug: { _type: 'slug', current: 'setting-up-track-website' },
    category: 'website',
    excerpt: 'Customize your track\'s website with branding, colors, and content.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Your track website is the face of your racing community. Here\'s how to make it look professional and engaging.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Upload Your Logo'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Navigate to the Sanity Studio and edit your tenant record to upload your track logo. The system will automatically resize and optimize it for web display.'
          }
        ]
      }
    ],
    tags: ['website', 'branding', 'logo'],
    featured: true,
    difficulty: 'beginner',
    estimatedReadTime: 8,
    status: 'published',
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'RC RaceHub Team'
  },
  {
    _type: 'helpArticle',
    title: 'Managing Events and Registration',
    slug: { _type: 'slug', current: 'managing-events-registration' },
    category: 'events',
    excerpt: 'Create racing events, manage registration, and track attendance.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Events are the heart of your racing track. Learn how to create and manage them effectively.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Creating Your First Event'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Go to the Sanity Studio and create a new Racing Event. Fill in the event details, classes, and registration information.'
          }
        ]
      }
    ],
    tags: ['events', 'registration', 'management'],
    featured: false,
    difficulty: 'intermediate',
    estimatedReadTime: 12,
    status: 'published',
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'RC RaceHub Team'
  },
  {
    _type: 'helpArticle',
    title: 'Setting Up Your Online Store',
    slug: { _type: 'slug', current: 'setting-up-online-store' },
    category: 'ecommerce',
    excerpt: 'Configure your e-commerce store to sell parts, merchandise, and race entries.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Turn your track into a revenue center by selling parts, merchandise, and race entries online.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Stripe Integration'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Connect your Stripe account to start accepting payments. We handle all the security and compliance for you.'
          }
        ]
      }
    ],
    tags: ['ecommerce', 'stripe', 'payments'],
    featured: true,
    difficulty: 'intermediate',
    estimatedReadTime: 15,
    status: 'published',
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'RC RaceHub Team'
  },
  {
    _type: 'helpArticle',
    title: 'Importing Race Results',
    slug: { _type: 'slug', current: 'importing-race-results' },
    category: 'results',
    excerpt: 'Learn how to import timing data and display race results on your website.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Keep your racers engaged by quickly publishing race results after each event.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'CSV Import Format'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Export your timing data as CSV and import it directly into the event results. The system supports most popular timing systems.'
          }
        ]
      }
    ],
    tags: ['results', 'timing', 'csv'],
    featured: false,
    difficulty: 'intermediate',
    estimatedReadTime: 10,
    status: 'published',
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'RC RaceHub Team'
  }
]

async function seedHelpArticles() {
  try {
    console.log('Creating sample help articles...')
    
    for (const article of sampleArticles) {
      const result = await client.create(article)
      console.log(`Created article: ${result.title}`)
    }
    
    console.log('✅ Successfully created all sample help articles!')
  } catch (error) {
    console.error('❌ Error creating help articles:', error)
  }
}

// Run the seed function
seedHelpArticles()
