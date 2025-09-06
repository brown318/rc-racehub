import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Headphones,
  Users,
  Zap,
  HelpCircle,
  Send
} from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            💬 Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We're Here to Help
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Have questions about RC RaceHub? Need help getting started? 
            Our team of RC racing enthusiasts is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#contact-form">Send Message</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Email Support */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Get detailed help with setup, features, or technical questions.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    Response within 24 hours
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <a href="mailto:support@rcracehub.com">support@rcracehub.com</a>
                </Button>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-orange-200">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Chat with our team in real-time for quick questions and support.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    Mon-Fri, 9 AM - 6 PM EST
                  </div>
                </div>
                <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            {/* Phone Support */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Phone Support</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team for complex issues or consultations.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    Mon-Fri, 10 AM - 5 PM EST
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <a href="tel:+1-555-RC-TRACK">+1 (555) RC-TRACK</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="trackName" className="block text-sm font-medium text-gray-700 mb-2">
                      Track Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="trackName"
                      name="trackName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request Demo</option>
                      <option value="pricing">Pricing Questions</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your track, your needs, or any questions you have..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      Subscribe to our newsletter for RC racing tips and platform updates
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Answers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions we receive from track owners
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-orange-500" />
                  How quickly can I get my track online?
                </h3>
                <p className="text-gray-600">
                  Most tracks are up and running within 24-48 hours. Our team handles the initial setup, 
                  and you can start adding content immediately through our easy-to-use CMS.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-orange-500" />
                  Do you provide training and onboarding?
                </h3>
                <p className="text-gray-600">
                  Yes! Every new customer gets a personalized onboarding session and access to our 
                  comprehensive training materials. We're here to ensure your success.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-orange-500" />
                  Can you help migrate from our current system?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Our team can help migrate your existing data, including member lists, 
                  race results, and product catalogs. We make the transition as smooth as possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-orange-500" />
                  What if I need custom features?
                </h3>
                <p className="text-gray-600">
                  We're always adding new features based on customer feedback. For Enterprise customers, 
                  we can develop custom integrations and features specific to your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-600">
                Located in the heart of RC racing country
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">
                        123 Racing Way<br />
                        RC Valley, CA 90210<br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday: 10:00 AM - 4:00 PM PST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
