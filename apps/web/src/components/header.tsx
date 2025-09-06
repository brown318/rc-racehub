'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTenant } from '@/lib/tenant-context'
import { urlFor } from '@/lib/sanity'

export function Header() {
  const { tenant, isMainSite } = useTenant()

  if (isMainSite) {
    return (
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">RaceHub</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/features" className="text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    )
  }

  // Tenant-specific header
  return (
    <header 
      className="border-b bg-white"
      style={{
        backgroundColor: tenant?.theme?.primaryColor ? `${tenant.theme.primaryColor}10` : undefined
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            {tenant?.logo && (
              <Image
                src={urlFor(tenant.logo).width(40).height(40).url()}
                alt={`${tenant.name} logo`}
                width={40}
                height={40}
                className="rounded-lg"
              />
            )}
            <div>
              <h1 className="text-xl font-bold text-gray-900">{tenant?.name}</h1>
              <p className="text-sm text-gray-600">RC Racing Track</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/events" className="text-gray-600 hover:text-gray-900">
              Events
            </Link>
            <Link href="/results" className="text-gray-600 hover:text-gray-900">
              Results
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">
              Shop
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button 
              asChild
              style={{
                backgroundColor: tenant?.theme?.primaryColor || undefined
              }}
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
