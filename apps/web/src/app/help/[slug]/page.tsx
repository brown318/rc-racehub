import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar, 
  Tag,
  BookOpen,
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle
} from 'lucide-react'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

// Fetch individual help article
async function getHelpArticle(slug: string) {
  try {
    const article = await client.fetch(`
      *[_type == "helpArticle" && slug.current == $slug && status == "published"][0] {
        _id,
        title,
        slug,
        category,
        excerpt,
        content,
        tags,
        featured,
        difficulty,
        estimatedReadTime,
        publishedAt,
        updatedAt,
        author,
        relatedArticles[]-> {
          _id,
          title,
          slug,
          category,
          excerpt,
          estimatedReadTime
        }
      }
    `, { slug })
    
    return article
  } catch (error) {
    console.error('Error fetching help article:', error)
    return null
  }
}

// Get category info
function getCategoryInfo(categoryId: string) {
  const categories: Record<string, any> = {
    'getting-started': { 
      title: 'Getting Started', 
      color: 'bg-blue-100 text-blue-600 border-blue-200'
    },
    'website': { 
      title: 'Website Setup', 
      color: 'bg-green-100 text-green-600 border-green-200'
    },
    'content': { 
      title: 'Content Management', 
      color: 'bg-purple-100 text-purple-600 border-purple-200'
    },
    'ecommerce': { 
      title: 'E-commerce', 
      color: 'bg-orange-100 text-orange-600 border-orange-200'
    },
    'events': { 
      title: 'Events & Registration', 
      color: 'bg-red-100 text-red-600 border-red-200'
    },
    'results': { 
      title: 'Results & Timing', 
      color: 'bg-yellow-100 text-yellow-600 border-yellow-200'
    },
    'pos': { 
      title: 'POS System', 
      color: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    },
    'analytics': { 
      title: 'Analytics', 
      color: 'bg-teal-100 text-teal-600 border-teal-200'
    }
  }
  
  return categories[categoryId] || { title: categoryId, color: 'bg-gray-100 text-gray-600 border-gray-200' }
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

// Portable Text components for rich content rendering
const portableTextComponents = {
  types: {
    callout: ({ value }: any) => {
      const icons = {
        info: Info,
        warning: AlertTriangle,
        success: CheckCircle,
        error: AlertCircle
      }
      
      const colors = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
        success: 'bg-green-50 border-green-200 text-green-800',
        error: 'bg-red-50 border-red-200 text-red-800'
      }
      
      const Icon = icons[value.type as keyof typeof icons] || Info
      const colorClass = colors[value.type as keyof typeof colors] || colors.info
      
      return (
        <div className={`p-4 rounded-lg border-l-4 my-6 ${colorClass}`}>
          <div className="flex items-start">
            <Icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              {value.title && (
                <h4 className="font-semibold mb-2">{value.title}</h4>
              )}
              <p className="text-sm leading-relaxed">{value.content}</p>
            </div>
          </div>
        </div>
      )
    },
    codeBlock: ({ value }: any) => (
      <div className="my-6">
        <div className="bg-gray-900 text-gray-100 rounded-lg overflow-hidden">
          {value.language && (
            <div className="px-4 py-2 bg-gray-800 text-sm font-medium text-gray-300 border-b border-gray-700">
              {value.language}
            </div>
          )}
          <pre className="p-4 overflow-x-auto">
            <code>{value.code}</code>
          </pre>
        </div>
      </div>
    ),
    image: ({ value }: any) => (
      <div className="my-8">
        <img
          src={value.asset.url}
          alt={value.alt || ''}
          className="w-full rounded-lg shadow-lg"
        />
        {value.caption && (
          <p className="text-sm text-gray-600 text-center mt-2 italic">
            {value.caption}
          </p>
        )}
      </div>
    )
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-orange-500 pl-4 py-2 my-6 italic text-gray-600 bg-orange-50">
        {children}
      </blockquote>
    )
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-orange-600 hover:text-orange-700 underline"
        target={value.href.startsWith('http') ? '_blank' : '_self'}
        rel={value.href.startsWith('http') ? 'noopener noreferrer' : ''}
      >
        {children}
      </a>
    )
  }
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function HelpArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getHelpArticle(slug)
  
  if (!article) {
    notFound()
  }
  
  const categoryInfo = getCategoryInfo(article.category)
  const difficultyColor = getDifficultyColor(article.difficulty)
  
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

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  {/* Article Header */}
                  <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className={`${categoryInfo.color} border`}>
                        {categoryInfo.title}
                      </Badge>
                      <Badge variant="outline" className={`${difficultyColor} border`}>
                        {article.difficulty}
                      </Badge>
                      {article.featured && (
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {article.title}
                    </h1>
                    
                    {article.excerpt && (
                      <p className="text-xl text-gray-600 mb-6">
                        {article.excerpt}
                      </p>
                    )}
                    
                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-200 pb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {article.author}
                      </div>
                      {article.estimatedReadTime && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {article.estimatedReadTime} min read
                        </div>
                      )}
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    <PortableText
                      value={article.content}
                      components={portableTextComponents}
                    />
                  </div>

                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center flex-wrap gap-2">
                        <Tag className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500 mr-2">Tags:</span>
                        {article.tags.map((tag: string, index: number) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Quick Actions */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Need More Help?
                    </h3>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/contact">Contact Support</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/help">Browse All Articles</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                {article.relatedArticles && article.relatedArticles.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Related Articles</h3>
                      <div className="space-y-3">
                        {article.relatedArticles.map((related: any) => (
                          <div key={related._id}>
                            <Link
                              href={`/help/${related.slug.current}`}
                              className="block text-sm text-gray-700 hover:text-orange-600 transition-colors"
                            >
                              {related.title}
                            </Link>
                            {related.estimatedReadTime && (
                              <div className="text-xs text-gray-500 mt-1">
                                {related.estimatedReadTime} min read
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
