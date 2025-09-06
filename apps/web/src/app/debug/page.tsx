'use client'

import { useTenant } from "@/lib/tenant-context";

export default function DebugPage() {
  const { tenant, isMainSite } = useTenant();

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Debug Information</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Host Information</h2>
            <div className="space-y-2">
              <p><strong>Host:</strong> {typeof window !== 'undefined' ? window.location.host : 'Server-side'}</p>
              <p><strong>Is Main Site:</strong> {isMainSite ? 'Yes' : 'No'}</p>
              <p><strong>Tenant Context:</strong> {tenant ? 'Loaded' : 'Not loaded'}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Tenant Information</h2>
            {tenant ? (
              <div className="space-y-2">
                <p><strong>Name:</strong> {tenant.name}</p>
                <p><strong>Subdomain:</strong> {tenant.subdomain}</p>
                <p><strong>Status:</strong> {tenant.status}</p>
                <p><strong>ID:</strong> {tenant._id}</p>
                {tenant.theme && (
                  <div>
                    <p><strong>Theme:</strong></p>
                    <div className="ml-4 space-y-1">
                      <p>Primary: <span style={{color: tenant.theme.primaryColor}}>{tenant.theme.primaryColor}</span></p>
                      <p>Secondary: <span style={{color: tenant.theme.secondaryColor}}>{tenant.theme.secondaryColor}</span></p>
                      <p>Accent: <span style={{color: tenant.theme.accentColor}}>{tenant.theme.accentColor}</span></p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500">
                {isMainSite ? 'Main site - no tenant needed' : 'Tenant not found'}
              </p>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Context Status</h2>
            <div className="space-y-2">
              <p><strong>Tenant Provider:</strong> {tenant ? '✅ Working' : '❌ No tenant'}</p>
              <p><strong>Multi-tenant Mode:</strong> {!isMainSite ? '✅ Active' : '❌ Main site'}</p>
              <p><strong>Data Source:</strong> Server-side rendered</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Test URLs</h2>
            <div className="space-y-2">
              <p><strong>Main Site:</strong></p>
              <a href="http://localhost:3001" className="text-blue-500 hover:underline">
                http://localhost:3001
              </a>
              
              <p className="mt-4"><strong>NTAR Tenant:</strong></p>
              <a href="http://ntar.localhost:3001" className="text-blue-500 hover:underline">
                http://ntar.localhost:3001
              </a>
              
              <p className="mt-4"><strong>Alternative (if subdomain doesn't work):</strong></p>
              <a href="http://localhost:3001?tenant=ntar" className="text-blue-500 hover:underline">
                http://localhost:3001?tenant=ntar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Troubleshooting</h3>
          <div className="text-yellow-700 space-y-2">
            <p>If subdomain is not detected:</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Add <code>127.0.0.1 ntar.localhost</code> to your hosts file</li>
              <li>Try using <code>ntar.localhost:3001</code> directly</li>
              <li>Check if your browser is blocking local subdomains</li>
              <li>Try a different browser or incognito mode</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
