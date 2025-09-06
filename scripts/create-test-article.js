// Create a test help article directly in Sanity (without API token)
// This is a simplified version for demonstration

const testArticleData = {
  _type: 'helpArticle',
  title: 'Getting Started with RC RaceHub',
  slug: { _type: 'slug', current: 'getting-started-with-rc-racehub' },
  category: 'getting-started',
  excerpt: 'Learn the basics of setting up your RC racing track on the RaceHub platform.',
  content: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Welcome to RC RaceHub! This comprehensive guide will walk you through setting up your racing track on our platform.'
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
          text: 'First, you\'ll need to create your RaceHub account. We recommend starting with our free Starter plan to explore the features.'
        }
      ]
    },
    {
      _type: 'callout',
      type: 'info',
      title: 'Free Trial Available',
      content: 'All new accounts get a 14-day free trial of our Professional plan, so you can test all features before committing.'
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
          text: 'Configure your track information including logo, colors, and contact details.'
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
}

console.log('📄 Test Article Data Structure:')
console.log(JSON.stringify(testArticleData, null, 2))
console.log('\n💡 To create this article:')
console.log('1. Go to http://localhost:3001/admin')
console.log('2. Click "Create" and select "Help Article"')
console.log('3. Use the data structure above as a reference')
console.log('4. Set the slug to: getting-started-with-rc-racehub')
console.log('5. Set status to "published"')
console.log('\n🔗 Once created, the article will be available at:')
console.log('http://localhost:3001/help/getting-started-with-rc-racehub')
