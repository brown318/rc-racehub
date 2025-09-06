import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { 
  Search, 
  BookOpen, 
  Users, 
  Globe, 
  ShoppingCart, 
  Calendar, 
  Trophy, 
  BarChart3,
  CreditCard,
  Settings,
  HelpCircle,
  Star,
  Clock,
  ArrowRight
} from 'lucide-react'
import { client } from '@/lib/sanity'

// Fetch help articles from Sanity
async function getHelpArticles() {
  try {
    const articles = await client.fetch(`
      *[_type == "helpArticle" && status == "published"] | order(featured desc, publishedAt desc) {
        _id,
        title,
        slug,
        category,
        excerpt,
        featured,
        difficulty,
        estimatedReadTime,
        publishedAt,
        tags
      }
    `)
    return articles || []
  } catch (error) {
    console.error('Error fetching help articles:', error)
    return []
  }
}

// Get featured articles
async function getFeaturedArticles() {
  try {
    const articles = await client.fetch(`
      *[_type == "helpArticle" && status == "published" && featured == true] | order(publishedAt desc) [0...3] {
        _id,
        title,
        slug,
        category,
        excerpt,
        estimatedReadTime,
        publishedAt
      }
    `)
    return articles || []
  } catch (error) {
    console.error('Error fetching featured articles:', error)
    return []
  }
}

// Category configuration
const categories = [
  { 
    id: 'getting-started', 
    title: 'Getting Started', 
    icon: BookOpen, 
    description: 'New to RC RaceHub? Start here for setup guides and basics.',
    color: 'bg-blue-100 text-blue-600'
  },
  { 
    id: 'website', 
    title: 'Website Setup', 
    icon: Globe, 
    description: 'Customize your track website, branding, and theme.',
    color: 'bg-green-100 text-green-600'
  },
  { 
    id: 'content', 
    title: 'Content Management', 
    icon: Settings, 
    description: 'Manage events, posts, media, and site content.',
    color: 'bg-purple-100 text-purple-600'
  },
  { 
    id: 'ecommerce', 
    title: 'E-commerce', 
    icon: ShoppingCart, 
    description: 'Set up your online store, products, and inventory.',
    color: 'bg-orange-100 text-orange-600'
  },
  { 
    id: 'events', 
    title: 'Events & Registration', 
    icon: Calendar, 
    description: 'Create events, manage registration, and track attendance.',
    color: 'bg-red-100 text-red-600'
  },
  { 
    id: 'results', 
    title: 'Results & Timing', 
    icon: Trophy, 
    description: 'Import timing data and display race results.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  { 
    id: 'pos', 
    title: 'POS System', 
    icon: CreditCard, 
    description: 'Set up in-person sales and payment processing.',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: BarChart3,
    description: 'Track performance, sales, and engagement metrics.',
    color: 'bg-teal-100 text-teal-600'
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: BookOpen,
    description: 'Technical documentation, API references, and developer guides.',
    color: 'bg-slate-100 text-slate-600'
  }
]

export default async function HelpPage() {
  const [articles, featuredArticles] = await Promise.all([
    getHelpArticles(),
    getFeaturedArticles()
  ])

  // Group articles by category
  const articlesByCategory = articles.reduce((acc: any, article: any) => {
    if (!acc[article.category]) {
      acc[article.category] = []
    }
    acc[article.category].push(article)
    return acc
  }, {})

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            📚 Help Center
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers, get support, and learn how to make the most of RC RaceHub 
            for your racing track.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search help articles..."
                className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-orange-500 rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600">
                Popular guides to get you started quickly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredArticles.map((article: any) => (
                <Card key={article._id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                      {article.estimatedReadTime && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.estimatedReadTime} min
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-lg">
                      <Link 
                        href={`/help/${article.slug.current}`}
                        className="hover:text-orange-600 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/help/${article.slug.current}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find help articles organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon
              const categoryArticles = articlesByCategory[category.id] || []
              
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''}
                      </span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/help/category/${category.id}`}>
                          View All
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Can't find what you're looking for? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Contact Support</h3>
                <p className="text-gray-600 mb-4">
                  Get personalized help from our support team via email, chat, or phone.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/contact">Get Support</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Community Forum</h3>
                <p className="text-gray-600 mb-4">
                  Connect with other track owners and share tips, tricks, and experiences.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/community">Join Community</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Video Tutorials</h3>
                <p className="text-gray-600 mb-4">
                  Watch step-by-step video guides for setting up and using RC RaceHub.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/tutorials">Watch Videos</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
