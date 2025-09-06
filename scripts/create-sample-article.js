// Create a sample help article in Sanity
const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ji5yggrg',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || 'your-token-here', // You'll need to set this
  apiVersion: '2024-01-01'
})

const sampleArticle = {
  _type: 'helpArticle',
  title: 'Getting Started with RC RaceHub',
  slug: { _type: 'slug', current: 'getting-started-with-rc-racehub' },
  category: 'getting-started',
  excerpt: 'Learn the basics of setting up your RC racing track on the RaceHub platform. This comprehensive guide will walk you through account creation, initial setup, and your first steps.',
  content: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Welcome to RC RaceHub! This guide will help you get started with setting up your racing track on our platform. Whether you\'re running a small local track or a large racing facility, RaceHub provides all the tools you need to manage your operations and grow your community.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Step 1: Create Your Account'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'First, you\'ll need to create your RaceHub account. We recommend starting with our free Starter plan to explore the features and see how the platform works for your track.'
        }
      ]
    },
    {
      _type: 'callout',
      type: 'info',
      title: 'Free Trial Available',
      content: 'All new accounts get a 14-day free trial of our Professional plan, so you can test all features before committing to a paid plan.'
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'To create your account:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '1. Visit the RaceHub signup page\n2. Enter your track information\n3. Choose your initial plan\n4. Verify your email address\n5. Complete the onboarding process'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Step 2: Set Up Your Track Profile'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Once your account is created, you\'ll want to set up your track profile. This includes:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Upload your track logo\n• Set your brand colors (primary, secondary, accent)\n• Add contact information\n• Configure your timezone and currency\n• Set up your subdomain (e.g., yourtrack.racehub.com)'
        }
      ]
    },
    {
      _type: 'callout',
      type: 'warning',
      title: 'Subdomain Selection',
      content: 'Choose your subdomain carefully - it cannot be changed later without contacting support. Make it short, memorable, and representative of your track.'
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Step 3: Customize Your Website'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Your track website is automatically generated based on your profile information. You can customize it by:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Adding your track logo (automatically resized and optimized)\n• Setting theme colors that match your brand\n• Creating your first blog post or announcement\n• Adding track information and contact details'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Step 4: Create Your First Event'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Events are the heart of your racing track. To create your first event:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '1. Access the Sanity Studio (your-subdomain.racehub.com/admin)\n2. Click "Create" and select "Racing Event"\n3. Fill in event details (title, date, location)\n4. Add racing classes and entry fees\n5. Set registration deadline\n6. Publish the event'
        }
      ]
    },
    {
      _type: 'callout',
      type: 'success',
      title: 'Pro Tip',
      content: 'Create events well in advance to give racers time to register. Most successful tracks create events 2-4 weeks ahead of time.'
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Next Steps'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Once you\'ve completed these initial steps, you\'re ready to start using RaceHub! Here are some recommended next steps:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Set up your online store (if using Professional or Enterprise plan)\n• Configure payment processing with Stripe\n• Import your existing racer database\n• Create promotional content\n• Set up social media integration'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Need help with any of these steps? Our support team is here to help! Contact us through the help center or schedule a demo call.'
        }
      ]
    }
  ],
  tags: ['setup', 'beginner', 'account', 'getting-started', 'onboarding'],
  featured: true,
  difficulty: 'beginner',
  estimatedReadTime: 8,
  status: 'published',
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  author: 'RC RaceHub Team'
}

async function createSampleArticle() {
  try {
    console.log('Creating sample help article...')
    
    const result = await client.create(sampleArticle)
    console.log(`✅ Successfully created article: ${result.title}`)
    console.log(`📄 Article URL: /help/${result.slug.current}`)
    
  } catch (error) {
    console.error('❌ Error creating help article:', error)
    
    // If it's a token error, provide helpful message
    if (error.message && error.message.includes('token')) {
      console.log('\n💡 To create the article, you need to:')
      console.log('1. Get a Sanity API token from your project dashboard')
      console.log('2. Set it as SANITY_API_TOKEN environment variable')
      console.log('3. Or manually create the article in Sanity Studio at /admin')
    }
  }
}

// Run the function
createSampleArticle()
