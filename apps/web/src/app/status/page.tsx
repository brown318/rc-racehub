import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock,
  Activity,
  Server,
  Database,
  Globe,
  CreditCard,
  Mail,
  Shield,
  Zap,
  ExternalLink,
  Calendar,
  TrendingUp
} from 'lucide-react'

// Mock data - in a real app, this would come from your monitoring system
const systemStatus = {
  overall: 'operational', // operational, degraded, outage
  lastUpdated: new Date().toISOString(),
  uptime: '99.98%'
}

const services = [
  {
    id: 'api',
    name: 'API Services',
    description: 'Core API endpoints and data access',
    status: 'operational',
    uptime: '99.99%',
    responseTime: '145ms',
    icon: Server,
    lastIncident: null
  },
  {
    id: 'website',
    name: 'Website & Dashboard',
    description: 'Main website and track management dashboard',
    status: 'operational',
    uptime: '99.97%',
    responseTime: '89ms',
    icon: Globe,
    lastIncident: null
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Primary database and data storage',
    status: 'operational',
    uptime: '99.99%',
    responseTime: '12ms',
    icon: Database,
    lastIncident: null
  },
  {
    id: 'payments',
    name: 'Payment Processing',
    description: 'Stripe integration and payment handling',
    status: 'operational',
    uptime: '99.95%',
    responseTime: '234ms',
    icon: CreditCard,
    lastIncident: null
  },
  {
    id: 'email',
    name: 'Email Delivery',
    description: 'Transactional emails and notifications',
    status: 'operational',
    uptime: '99.92%',
    responseTime: '1.2s',
    icon: Mail,
    lastIncident: null
  },
  {
    id: 'auth',
    name: 'Authentication',
    description: 'User login and session management',
    status: 'operational',
    uptime: '99.98%',
    responseTime: '67ms',
    icon: Shield,
    lastIncident: null
  },
  {
    id: 'cdn',
    name: 'CDN & Assets',
    description: 'Content delivery and static assets',
    status: 'operational',
    uptime: '99.99%',
    responseTime: '45ms',
    icon: Zap,
    lastIncident: null
  }
]

const recentIncidents = [
  {
    id: '1',
    title: 'Scheduled Database Maintenance',
    description: 'Routine database optimization and security updates',
    status: 'resolved',
    severity: 'maintenance',
    startTime: '2024-01-15T02:00:00Z',
    endTime: '2024-01-15T02:45:00Z',
    affectedServices: ['database', 'api'],
    updates: [
      {
        time: '2024-01-15T02:45:00Z',
        message: 'Maintenance completed successfully. All services restored.'
      },
      {
        time: '2024-01-15T02:30:00Z',
        message: 'Database optimization in progress. API responses may be slower.'
      },
      {
        time: '2024-01-15T02:00:00Z',
        message: 'Scheduled maintenance started. Database temporarily unavailable.'
      }
    ]
  },
  {
    id: '2',
    title: 'Payment Processing Delays',
    description: 'Intermittent delays in payment confirmation emails',
    status: 'resolved',
    severity: 'minor',
    startTime: '2024-01-10T14:30:00Z',
    endTime: '2024-01-10T15:15:00Z',
    affectedServices: ['payments', 'email'],
    updates: [
      {
        time: '2024-01-10T15:15:00Z',
        message: 'Issue resolved. Payment confirmations are now being sent normally.'
      },
      {
        time: '2024-01-10T14:45:00Z',
        message: 'Investigating delays in payment confirmation emails.'
      }
    ]
  }
]

const upcomingMaintenance = [
  {
    id: '1',
    title: 'CDN Infrastructure Upgrade',
    description: 'Upgrading CDN infrastructure for improved global performance',
    scheduledTime: '2024-02-01T03:00:00Z',
    estimatedDuration: '2 hours',
    affectedServices: ['cdn', 'website'],
    impact: 'Minimal - brief loading delays possible'
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'operational':
      return 'text-green-600 bg-green-100 border-green-200'
    case 'degraded':
      return 'text-yellow-600 bg-yellow-100 border-yellow-200'
    case 'outage':
      return 'text-red-600 bg-red-100 border-red-200'
    case 'maintenance':
      return 'text-blue-600 bg-blue-100 border-blue-200'
    default:
      return 'text-gray-600 bg-gray-100 border-gray-200'
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'operational':
      return CheckCircle
    case 'degraded':
      return AlertCircle
    case 'outage':
      return XCircle
    case 'maintenance':
      return Clock
    default:
      return AlertCircle
  }
}

function getSeverityColor(severity: string) {
  switch (severity) {
    case 'critical':
      return 'text-red-600 bg-red-100 border-red-200'
    case 'major':
      return 'text-orange-600 bg-orange-100 border-orange-200'
    case 'minor':
      return 'text-yellow-600 bg-yellow-100 border-yellow-200'
    case 'maintenance':
      return 'text-blue-600 bg-blue-100 border-blue-200'
    default:
      return 'text-gray-600 bg-gray-100 border-gray-200'
  }
}

export default function StatusPage() {
  const OverallStatusIcon = getStatusIcon(systemStatus.overall)
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Activity className="w-8 h-8 text-orange-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              RC RaceHub Status
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-6">
            Current status and performance of RC RaceHub services
          </p>
          
          {/* Overall Status */}
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <OverallStatusIcon className="w-12 h-12 text-green-600 mr-3" />
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">All Systems Operational</h2>
                  <p className="text-gray-600">Uptime: {systemStatus.uptime}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Last updated: {new Date(systemStatus.lastUpdated).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Services Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="w-5 h-5 mr-2" />
                Service Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service) => {
                  const ServiceIcon = service.icon
                  const StatusIcon = getStatusIcon(service.status)
                  
                  return (
                    <div key={service.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <ServiceIcon className="w-6 h-6 text-gray-600 mr-4" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right text-sm">
                          <div className="text-gray-600">Uptime: {service.uptime}</div>
                          <div className="text-gray-500">Response: {service.responseTime}</div>
                        </div>
                        <Badge className={`${getStatusColor(service.status)} border`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {service.status === 'operational' ? 'Operational' : service.status}
                        </Badge>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Recent Incidents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Recent Incidents
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentIncidents.length > 0 ? (
                <div className="space-y-6">
                  {recentIncidents.map((incident) => (
                    <div key={incident.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{incident.title}</h3>
                          <p className="text-gray-600 mb-3">{incident.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>
                              {new Date(incident.startTime).toLocaleString()} - {new Date(incident.endTime).toLocaleString()}
                            </span>
                            <span>Duration: {Math.round((new Date(incident.endTime).getTime() - new Date(incident.startTime).getTime()) / (1000 * 60))} minutes</span>
                          </div>
                        </div>
                        <Badge className={`${getSeverityColor(incident.severity)} border`}>
                          {incident.severity}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">Updates:</h4>
                        {incident.updates.map((update, index) => (
                          <div key={index} className="flex items-start space-x-3 text-sm">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <div className="text-gray-500">{new Date(update.time).toLocaleString()}</div>
                              <div className="text-gray-700">{update.message}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Recent Incidents</h3>
                  <p className="text-gray-600">All services have been running smoothly.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Maintenance */}
          {upcomingMaintenance.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Scheduled Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMaintenance.map((maintenance) => (
                    <div key={maintenance.id} className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{maintenance.title}</h3>
                          <p className="text-gray-600 mt-1">{maintenance.description}</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          Scheduled
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Scheduled:</span>
                          <div className="text-gray-600">{new Date(maintenance.scheduledTime).toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Duration:</span>
                          <div className="text-gray-600">{maintenance.estimatedDuration}</div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Impact:</span>
                          <div className="text-gray-600">{maintenance.impact}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Additional Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Additional Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" asChild>
                  <Link href="/help" className="flex items-center justify-center">
                    Help Center
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact" className="flex items-center justify-center">
                    Contact Support
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Stay Updated</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Subscribe to status updates to receive notifications about incidents and maintenance.
                </p>
                <Button size="sm">
                  Subscribe to Updates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
