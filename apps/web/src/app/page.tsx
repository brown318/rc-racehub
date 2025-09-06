'use client'

import { MainSiteHome } from '@/components/main-site-home'
import { TenantSiteHome } from '@/components/tenant-site-home'
import { useTenant } from '@/lib/tenant-context'

export default function Home() {
  const { isMainSite, tenant } = useTenant()

  // If we have a subdomain but no tenant, show not found
  if (!isMainSite && !tenant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Site Not Found</h1>
          <p className="text-gray-600 mb-8">The requested site could not be found.</p>
          <a
            href="http://localhost:3001"
            className="text-orange-500 hover:text-orange-600 underline"
          >
            Visit RC RaceHub
          </a>
        </div>
      </div>
    )
  }

  return isMainSite ? <MainSiteHome /> : <TenantSiteHome />
}
