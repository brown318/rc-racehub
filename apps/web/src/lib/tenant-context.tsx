'use client'

import { createContext, useContext } from 'react'

interface TenantTheme {
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
}

interface TenantContact {
  email?: string
  phone?: string
  address?: string
  website?: string
}

interface TenantSettings {
  timezone?: string
  currency?: string
  revSharePercentage?: number
}

interface Tenant {
  _id: string
  name: string
  slug: { current: string }
  subdomain: string
  status: string
  logo?: any
  theme?: TenantTheme
  contact?: TenantContact
  settings?: TenantSettings
}

interface TenantContextType {
  tenant: Tenant | null
  isMainSite: boolean
}

const TenantContext = createContext<TenantContextType>({
  tenant: null,
  isMainSite: true,
})

export function useTenant() {
  const context = useContext(TenantContext)
  if (!context) {
    throw new Error('useTenant must be used within a TenantProvider')
  }
  return context
}

interface TenantProviderProps {
  children: React.ReactNode
  tenant: Tenant | null
  isMainSite: boolean
}

export function TenantProvider({ children, tenant, isMainSite }: TenantProviderProps) {
  return (
    <TenantContext.Provider value={{ tenant, isMainSite }}>
      {children}
    </TenantContext.Provider>
  )
}
