import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar, 
  BookOpen,
  Globe,
  Settings,
  ShoppingCart,
  Trophy,
  CreditCard,
  BarChart3,
  Star,
  ArrowRight
} from 'lucide-react'
import { client } from '@/lib/sanity'

// Fetch articles for a specific category
async function getCategoryArticles(category: string) {
  try {
    const articles = await client.fetch(`
      *[_type == "helpArticle" && category == $category && status == "published"] | order(featured desc, publishedAt desc) {
        _id,
        title,
        slug,
        category,
        excerpt,
        featured,
        difficulty,
        estimatedReadTime,
        publishedAt,
        author,
        tags
      }
    `, { category })
    
    return articles || []
  } catch (error) {
    console.error('Error fetching category articles:', error)
    return []
  }
}

// Category configuration
const categories: Record<string, any> = {
  'getting-started': { 
    title: 'Getting Started', 
    icon: BookOpen, 
    description: 'New to RC RaceHub? Start here for setup guides and basics.',
    color: 'bg-blue-100 text-blue-600 border-blue-200'
  },
  'website': { 
    title: 'Website Setup', 
    icon: Globe, 
    description: 'Customize your track website, branding, and theme.',
    color: 'bg-green-100 text-green-600 border-green-200'
  },
  'content': { 
    title: 'Content Management', 
    icon: Settings, 
    description: 'Manage events, posts, media, and site content.',
    color: 'bg-purple-100 text-purple-600 border-purple-200'
  },
  'ecommerce': { 
    title: 'E-commerce', 
    icon: ShoppingCart, 
    description: 'Set up your online store, products, and inventory.',
    color: 'bg-orange-100 text-orange-600 border-orange-200'
  },
  'events': { 
    title: 'Events & Registration', 
    icon: Calendar, 
    description: 'Create events, manage registration, and track attendance.',
    color: 'bg-red-100 text-red-600 border-red-200'
  },
  'results': { 
    title: 'Results & Timing', 
    icon: Trophy, 
    description: 'Import timing data and display race results.',
    color: 'bg-yellow-100 text-yellow-600 border-yellow-200'
  },
  'pos': { 
    title: 'POS System', 
    icon: CreditCard, 
    description: 'Set up in-person sales and payment processing.',
    color: 'bg-indigo-100 text-indigo-600 border-indigo-200'
  },
  'analytics': { 
    title: 'Analytics', 
    icon: BarChart3, 
    description: 'Track performance, sales, and engagement metrics.',
    color: 'bg-teal-100 text-teal-600 border-teal-200'
  },
  'account': { 
    title: 'Account Management', 
    icon: User, 
    description: 'Manage your account settings and preferences.',
    color: 'bg-gray-100 text-gray-600 border-gray-200'
  },
  'troubleshooting': { 
    title: 'Troubleshooting', 
    icon: Settings, 
    description: 'Common issues and how to resolve them.',
    color: 'bg-red-100 text-red-600 border-red-200'
  },
  'billing': { 
    title: 'Billing & Pricing', 
    icon: CreditCard, 
    description: 'Payment, billing, and subscription information.',
    color: 'bg-green-100 text-green-600 border-green-200'
  },
  'api': {
    title: 'API & Integrations',
    icon: Settings,
    description: 'Developer resources and integration guides.',
    color: 'bg-purple-100 text-purple-600 border-purple-200'
  },
  'documentation': {
    title: 'Documentation',
    icon: BookOpen,
    description: 'Technical documentation, API references, and developer guides.',
    color: 'bg-slate-100 text-slate-600 border-slate-200'
  }
}

// Get difficulty badge color
function getDifficultyColor(difficulty: string) {
  const colors: Record<string, string> = {
    'beginner': 'bg-green-100 text-green-700 border-green-200',
    'intermediate': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'advanced': 'bg-red-100 text-red-700 border-red-200'
  }
  return colors[difficulty] || 'bg-gray-100 text-gray-700 border-gray-200'
}

interface PageProps {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params
  const categoryInfo = categories[category]
  
  if (!categoryInfo) {
    notFound()
  }
  
  const articles = await getCategoryArticles(category)
  const Icon = categoryInfo.icon
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/help" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Link>
          </Button>
        </div>

        {/* Category Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${categoryInfo.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {categoryInfo.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    {categoryInfo.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {articles.length} article{articles.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Articles List */}
        <div className="max-w-4xl mx-auto">
          {articles.length > 0 ? (
            <div className="space-y-6">
              {articles.map((article: any) => (
                <Card key={article._id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          {article.featured && (
                            <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          <Badge variant="outline" className={`${getDifficultyColor(article.difficulty)} border`}>
                            {article.difficulty}
                          </Badge>
                        </div>
                        
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                          <Link 
                            href={`/help/${article.slug.current}`}
                            className="hover:text-orange-600 transition-colors"
                          >
                            {article.title}
                          </Link>
                        </h2>
                        
                        {article.excerpt && (
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {article.excerpt}
                          </p>
                        )}
                        
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {article.author}
                          </div>
                          {article.estimatedReadTime && (
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {article.estimatedReadTime} min read
                            </div>
                          )}
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(article.publishedAt).toLocaleDateString()}
                          </div>
                        </div>
                        
                        {article.tags && article.tags.length > 0 && (
                          <div className="flex items-center flex-wrap gap-2 mt-4">
                            {article.tags.slice(0, 3).map((tag: string, index: number) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {article.tags.length > 3 && (
                              <span className="text-xs text-gray-500">
                                +{article.tags.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-shrink-0">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/help/${article.slug.current}`}>
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-white">
              <CardContent className="p-12 text-center">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 ${categoryInfo.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  No articles yet in {categoryInfo.title}
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We're working on adding helpful articles to this category. 
                  Check back soon or browse other categories.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" asChild>
                    <Link href="/help">Browse All Categories</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/contact">Request Article</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Related Categories */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categories)
              .filter(([key]) => key !== category)
              .slice(0, 6)
              .map(([key, cat]) => {
                const CatIcon = cat.icon
                return (
                  <Card key={key} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${cat.color}`}>
                        <CatIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{cat.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{cat.description}</p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/help/category/${key}`}>
                          Explore
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
