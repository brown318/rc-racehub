import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  Scale, 
  Calendar, 
  FileText, 
  ArrowLeft,
  ExternalLink,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

// Fetch Terms of Service from Sanity
async function getTermsOfService() {
  try {
    const document = await client.fetch(`
      *[_type == "legalDocument" && documentType == "terms-of-service" && status == "published"] | order(effectiveDate desc)[0] {
        _id,
        title,
        slug,
        documentType,
        effectiveDate,
        lastUpdated,
        version,
        summary,
        content,
        status
      }
    `)
    
    return document
  } catch (error) {
    console.error('Error fetching terms of service:', error)
    return null
  }
}

// Portable Text components for legal document rendering
const portableTextComponents = {
  types: {
    contactInfo: ({ value }: any) => (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Mail className="w-5 h-5 mr-2" />
          {value.title || 'Contact Information'}
        </h3>
        <div className="space-y-3">
          {value.companyName && (
            <div className="font-medium text-gray-900">{value.companyName}</div>
          )}
          {value.address && (
            <div className="flex items-start text-gray-700">
              <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
              <div className="whitespace-pre-line">{value.address}</div>
            </div>
          )}
          {value.email && (
            <div className="flex items-center text-gray-700">
              <Mail className="w-4 h-4 mr-2" />
              <a href={`mailto:${value.email}`} className="text-orange-600 hover:text-orange-700">
                {value.email}
              </a>
            </div>
          )}
          {value.phone && (
            <div className="flex items-center text-gray-700">
              <Phone className="w-4 h-4 mr-2" />
              <a href={`tel:${value.phone}`} className="text-orange-600 hover:text-orange-700">
                {value.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    )
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-6 first:mt-0">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-orange-500 pl-6 py-2 my-6 italic text-gray-600 bg-orange-50">
        {children}
      </blockquote>
    )
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">{children}</ol>
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
        target={value.blank ? '_blank' : '_self'}
        rel={value.blank ? 'noopener noreferrer' : ''}
      >
        {children}
        {value.blank && <ExternalLink className="w-3 h-3 inline ml-1" />}
      </a>
    )
  }
}

export default async function TermsOfServicePage() {
  const document = await getTermsOfService()
  
  if (!document) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-12 text-center">
                <Scale className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Terms of Service Not Available
                </h1>
                <p className="text-gray-600 mb-6">
                  We're working on updating our terms of service. Please check back soon or contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" asChild>
                    <Link href="/">Back to Home</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              {/* Document Header */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center mb-4">
                  <Scale className="w-8 h-8 text-orange-600 mr-3" />
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {document.title}
                  </h1>
                </div>
                
                {document.summary && (
                  <p className="text-xl text-gray-600 mb-6">
                    {document.summary}
                  </p>
                )}
                
                {/* Document Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                    <FileText className="w-3 h-3 mr-1" />
                    Version {document.version}
                  </Badge>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Effective: {new Date(document.effectiveDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-500">
                    Last updated: {new Date(document.lastUpdated).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* Document Content */}
              <div className="prose prose-lg max-w-none">
                <PortableText
                  value={document.content}
                  components={portableTextComponents}
                />
              </div>

              {/* Footer Actions */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-sm text-gray-500">
                    This document was last updated on {new Date(document.lastUpdated).toLocaleDateString()}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/privacy">Privacy Policy</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">
                        Contact Us
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
