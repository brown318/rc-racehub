// Sample Documentation Article Structure for Sanity Studio
// This shows how to create technical documentation using the help article system

const documentationArticleExample = {
  _type: 'helpArticle',
  title: 'API Authentication Guide',
  slug: { _type: 'slug', current: 'api-authentication-guide' },
  category: 'documentation',
  excerpt: 'Learn how to authenticate with the RC RaceHub API using API keys and JWT tokens.',
  content: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The RC RaceHub API uses API keys and JWT tokens for authentication. This guide covers both authentication methods and best practices for secure API access.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'API Key Authentication'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'API keys are the simplest way to authenticate with the RC RaceHub API. Include your API key in the Authorization header of your requests.'
        }
      ]
    },
    {
      _type: 'codeBlock',
      language: 'shell',
      code: `curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.rcracehub.com/v1/events`
    },
    {
      _type: 'callout',
      type: 'warning',
      title: 'Keep Your API Key Secret',
      content: 'Never expose your API key in client-side code or public repositories. Store it securely as an environment variable.'
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'JWT Token Authentication'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'For user-specific operations, use JWT tokens obtained through the authentication endpoint.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Getting a JWT Token'
        }
      ]
    },
    {
      _type: 'codeBlock',
      language: 'javascript',
      code: `const response = await fetch('https://api.rcracehub.com/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'your-password'
  })
});

const { token } = await response.json();`
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Using the JWT Token'
        }
      ]
    },
    {
      _type: 'codeBlock',
      language: 'javascript',
      code: `const response = await fetch('https://api.rcracehub.com/v1/user/profile', {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
});`
    },
    {
      _type: 'callout',
      type: 'info',
      title: 'Token Expiration',
      content: 'JWT tokens expire after 24 hours. Implement token refresh logic in your application to maintain authentication.'
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Error Handling'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The API returns standard HTTP status codes. Here are the most common authentication-related errors:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• 401 Unauthorized - Invalid or missing API key/token\n• 403 Forbidden - Valid credentials but insufficient permissions\n• 429 Too Many Requests - Rate limit exceeded'
        }
      ]
    },
    {
      _type: 'callout',
      type: 'success',
      title: 'Rate Limiting',
      content: 'The API allows 1000 requests per hour per API key. Monitor your usage and implement appropriate caching strategies.'
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
          text: 'Now that you understand authentication, explore these related topics:'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• API Endpoints Reference\n• Rate Limiting and Best Practices\n• Webhook Configuration\n• SDK Documentation'
        }
      ]
    }
  ],
  tags: ['api', 'authentication', 'jwt', 'security', 'developer'],
  featured: true,
  difficulty: 'intermediate',
  estimatedReadTime: 12,
  status: 'published',
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  author: 'RC RaceHub Development Team'
}

const webhookDocumentationExample = {
  _type: 'helpArticle',
  title: 'Webhook Configuration',
  slug: { _type: 'slug', current: 'webhook-configuration' },
  category: 'documentation',
  excerpt: 'Set up webhooks to receive real-time notifications about events, registrations, and race results.',
  content: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Webhooks allow your application to receive real-time notifications when events occur in RC RaceHub. This guide covers webhook setup, payload formats, and security considerations.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Setting Up Webhooks'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Configure webhooks in your track settings or via the API. Each webhook requires a URL endpoint and event types to subscribe to.'
        }
      ]
    },
    {
      _type: 'codeBlock',
      language: 'json',
      code: `{
  "url": "https://your-app.com/webhooks/racehub",
  "events": [
    "event.created",
    "registration.completed",
    "race.finished"
  ],
  "secret": "your-webhook-secret"
}`
    },
    {
      _type: 'callout',
      type: 'info',
      title: 'Webhook Security',
      content: 'Always verify webhook signatures using the provided secret to ensure requests are from RC RaceHub.'
    }
  ],
  tags: ['webhooks', 'api', 'real-time', 'notifications', 'developer'],
  featured: false,
  difficulty: 'advanced',
  estimatedReadTime: 15,
  status: 'published',
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  author: 'RC RaceHub Development Team'
}

console.log('📚 Documentation Article Examples:')
console.log('\n1. API Authentication Guide:')
console.log('   - Covers API keys and JWT tokens')
console.log('   - Includes code examples and security warnings')
console.log('   - Features callout boxes for important information')
console.log('   - Estimated read time: 12 minutes')

console.log('\n2. Webhook Configuration:')
console.log('   - Real-time notification setup')
console.log('   - JSON payload examples')
console.log('   - Security best practices')
console.log('   - Estimated read time: 15 minutes')

console.log('\n💡 To create these articles:')
console.log('1. Go to http://localhost:3001/admin')
console.log('2. Click "Create" and select "Help Article"')
console.log('3. Set category to "documentation"')
console.log('4. Use the structures above as reference')
console.log('5. Set status to "published"')

console.log('\n🔗 Once created, articles will be available at:')
console.log('• http://localhost:3001/help/category/documentation')
console.log('• http://localhost:3001/help/api-authentication-guide')
console.log('• http://localhost:3001/help/webhook-configuration')

console.log('\n📋 Other Documentation Topics to Consider:')
console.log('• API Endpoints Reference')
console.log('• SDK Installation and Usage')
console.log('• Database Schema Documentation')
console.log('• Deployment and Configuration')
console.log('• Troubleshooting Common Issues')
console.log('• Migration Guides')
console.log('• Performance Optimization')
console.log('• Security Best Practices')
